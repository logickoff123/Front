import styles from "./Banner.module.scss"
import Image from 'next/image';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src="/assets/images/bg.svg" width={1920} height={700} alt="Banner" className={styles.image} />
                    <div className={styles.bannerText}>
                        <div className = {styles.text1}>
                            <p>Лучшие товары</p>
                            <p>в мире татуировок</p>
                        </div>
                        <div className = {styles.text2}>
                            <p>Oборудование и расходники</p>
                            <p>для самых ярких и качественных работ</p>
                        </div>
                        <div className = {styles.idiot_button}>
                            <button className={styles.myButton}>Смотреть каталог</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}