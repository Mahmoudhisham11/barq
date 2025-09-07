'use client';
import styles from "./styles.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer({ t }) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.title}>
            <h3>مع <span>برق</span> اسرع شحنة في مصر من القاهرة و الجيزة الى الاسكندرية و وجه بحري و الغردقة و الصعيد</h3>
          </div>
          <div className={styles.linkContainer}>
            <p>تواصل معنا</p>
            <p>عزبة علاء الدين - الخصوص - القليوبية</p>
            <p>01055828222</p>
            <p>01222233666</p>
            <p>01126784187</p>
          </div>
          <div className={styles.linkContainer}>
            <p>روابط سريعة</p>
            <Link href={"#home"} className={styles.Links}>الصفحة الرئيسية</Link>
            <Link href={"#about"} className={styles.Links}>من نحن</Link>
            <Link href={"#services"} className={styles.Links}>خدماتنا</Link>
            <Link href={"#contact"} className={styles.Links}>تواصل معنا</Link>
          </div>
        </div>
        <div className={styles.icons}>
          <Link href={"https://www.instagram.com/barq.shipping?igsh=MXh0bm9vb2gzbWhuYQ=="} target="_blank" className={styles.iconsLinks}><FaInstagram/></Link>
          <Link href={"https://www.facebook.com/share/1B5jhDctVv/"} target="_blank" className={styles.iconsLinks}><FaFacebookF/></Link>
        </div>
        <hr style={{ width: '100%' }} />
        <div className={styles.cobyRights}>
          <h4>&copy; نسخة مرخصة لشركة برق جميع الحقوق محفوظة</h4>
          <p>صمم بواسظة DEVORIA</p>
        </div>
      </div>
    </div>
  );
}
