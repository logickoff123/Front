import Link from "next/link";
import styles from "./InfoCompany.module.scss";
import Image from 'next/image';


export default function InfoCompany() {
    return (
        <div className = {styles.infocompany}>
            <div className = {styles.info_picture}>
                <Image src="/assets/images/man.svg" width={930} height={635} alt="" className = {styles.man}/>
            </div>
            <div className = {styles.info_text_content}>
                <h3 className = {styles.tatoo_magaz}>Тату магазин Mr. Driskell</h3>
                <div className = {styles.info_text}>
                    <p>
                        Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются
                        энтузиасты индустрии, профессиональные мастера и новички, которые
                        только делают первые шаги в тату искусстве. Мы знаем, насколько важно 
                        грамотно и точно подобрать инструменты для продуктивных тату сеансов, 
                        и помогаем быстро найти то, что поможет их сделать именно такими.
                    </p>
                    <p>
                        В нашем ассортименте не просто тату оборудование, это буквально целая
                        команда из грамотных и действительно эффективных помощников на вашем 
                        рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов 
                        под пристальным взглядом отечественных машиностроителей, космецевтов 
                        и брендов с мировым именем, эти товары нарабатывали опыт и каждый 
                        день становились лучше, чтобы показать, на что они способны, и помочь 
                        раскрыть ваш потенциал.
                    </p>
                </div>
            </div>
        </div>
)
}