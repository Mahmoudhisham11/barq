'use client'
import { useRouter} from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaBars } from "react-icons/fa6";
import gsap from "gsap"
import styles from "./styles.module.css"
import Image from "next/image"
import logo from "../../public/images/logo.png"
import Link from "next/link"
import uk from "../../public/images/uk.png"

export default function Header() {
  const router = useRouter()
  const menuRef = useRef(null)
  const linksRef = useRef([])
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // روابط الهيدر
  const links = [
    { id: "home", label: "الصفحة الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "services", label: "خدماتنا" },
    { id: "contact", label: "تواصل معنا" },
  ]

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
          {links.map((link) => (
            <Link key={link.id} href={`#${link.id}`} className={styles.headerLink}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.langBtnContainer}>
          <button className={styles.langBtn} onClick={() => router.push("https://barq-en-shipping.netlify.app/")}>
            <Image src={uk} alt="uk" fill style={{objectFit: "cover"}}/>
          </button>
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
          {links.map((link, i) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={styles.moblieLinks}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.moblieLangContainer}>
            <button className={styles.langBtn} onClick={() => router.push("https://barq-en-shipping.netlify.app/")}>
              <Image src={uk} alt="uk" fill style={{objectFit: "cover"}}/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
