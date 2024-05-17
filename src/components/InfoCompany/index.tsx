import Link from "next/link";
import styles from "./InfoCompany.module.scss";
import Image from 'next/image';


export default function InfoCompany() {
    return (
        <div className={styles.infocompany}>
            <div className={styles.info_picture}>
                <Image src="/assets/images/man.svg" width={930} height={635} alt="" className={styles.man} />
            </div>
            <div className={styles.info_text_content}>
                <h3 className={styles.tatoo_magaz}>Тату магазин Mr. Driskell</h3>
                <div className={styles.info_text}>
                    <p>Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются</p>
                    <p>энтузиасты индустрии, профессиональные мастера и новички, которые</p>
                    <p>только делают первые шаги в тату искусстве. Мы знаем, насколько важно</p>
                    <p>грамотно и точно подобрать инструменты для продуктивных тату сеансов,</p>
                    <p>и помогаем быстро найти то, что поможет их сделать именно такими.</p>
                </div>
                
                <div className={styles.info_text}>
                    <p>В нашем ассортименте не просто тату оборудование, это буквально целая</p>
                    <p>команда из грамотных и действительно эффективных помощников на вашем</p>
                    <p>рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов</p>
                    <p>под пристальным взглядом отечественных машиностроителей, космецевтов</p>
                    <p>и брендов с мировым именем, эти товары нарабатывали опыт и каждый</p>
                    <p>день становились лучше, чтобы показать, на что они способны, и помочь </p>
                    <p>раскрыть ваш потенциал.</p>
                </div>
            </div>
        </div>
    )
}