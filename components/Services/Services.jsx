'use client';
import styles from "./styles.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services({ t }) {

    const servicesRef = useRef(null);

    useEffect(() => {
        const el = servicesRef.current;

        gsap.fromTo(el,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none", 
                }
            }
        );
    }, []);

    return (
        <div className={styles.servicesContainer} id="services">
            <div className={styles.services} ref={servicesRef}>
                <div className={styles.title}>
                    <p>خدماتنا</p>
                    <h2>سريعة وموثوقة</h2>
                    <p>نقدم حلول شحن متكاملة بسرعات عالية وأمان كامل ودعم كامل لجميع احتياجاتك اللوجستية</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><PiPhoneCallFill /></p>
                            <h3>خــدمــة الـعـمـلاء</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>لدينا فريق متخصص لخدمة العملاء لحل جميع مشاكل عملاءنا ومتابعة عملاءنا لحظة بلحظة في ادارة شحناتهم</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><RiComputerLine /></p>
                            <h3>متابعة الحسابات</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>من خلال حسابك على برنامج الشركة هتقدر تتابع شحناتك وتشوف وتعرف كل شحنة ليك معانا</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><GrMoney /></p>
                            <h3>التحصيل</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>مع خدمة التحصيل تقدر تستلم تحصيلك بشكل يومي بكل سهولة، وكمان نوفرلك إمكانية الحصول على سلفة تصل إلى 15%.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
