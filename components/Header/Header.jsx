'use client'
import { useRouter} from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaBars } from "react-icons/fa6";
import gsap from "gsap"
import styles from "./styles.module.css"
import Image from "next/image"
import logo from "../../public/images/logo.png"
import Link from "next/link"

export default function Header() {
  const router = useRouter()
  const menuRef = useRef(null)
  const linksRef = useRef([])
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // انيميشن فتح/قفل المينيو
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { height: "auto", duration: 0.5, ease: "power2.out" })
      gsap.fromTo(
        linksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
      )
    } else {
      gsap.to(menuRef.current, { height: 0, duration: 0.4, ease: "power2.in" })
    }
  }, [isOpen])

  // تغيير خلفية الهيدر عند التمرير
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header} style={{ backgroundColor: isScrolled ? 'black' : 'transparent' }}>
        <div className={styles.imageContainer}>
          <Image src={logo} fill style={{ objectFit: "cover" }} alt="logo" />
        </div>
        <div className={styles.linksContainer}>
          <Link href={"#home"} className={styles.headerLink}>الصفحة الرئيسية</Link>
          <Link href={"#about"} className={styles.headerLink}>من نحن</Link>
          <Link href={"#services"} className={styles.headerLink}>خدماتنا</Link>
          <Link href={"#contact"} className={styles.headerLink}>تواصل معنا</Link>
        </div>
        <div className={styles.langBtnContainer}>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.moblieHeader}>
        <div className={styles.head}>
          <div className={styles.mobileImage}>
            <Image src={logo} fill style={{ objectFit: "cover" }} alt="logo" />
          </div>
          <div className={styles.headerBtn}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
        </div>
        <div
          className={styles.body}
          ref={menuRef}
          style={{ height: 0, overflow: "hidden" }}
        >
          {["الصفحة الرئيسية", "من نحن", "خدماتنا", "تواصل معنا"].map((link, i) => (
            <Link
              key={link}
              href={`#${link}`}
              className={styles.moblieLinks}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
          <div className={styles.moblieLangContainer}>
          </div>
        </div>
      </div>
    </header>
  )
}
