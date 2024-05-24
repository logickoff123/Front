"use client"
import styles from "./Brend.module.scss";
import Image from 'next/image';

export default function Brend() {
    return (
        <div className = {styles.Brend}>
            <span className = {styles.popular_brend}>Популярные бренды</span>
                <div className = {styles.contanier1}>
                    <Image  src = "/assets/images/dracon.svg"  width={221} height={82} alt ="" className={styles.image} />
                    <Image  src = "/assets/images/brend2.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend3.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend4.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend5.svg"  width={221} height={82} alt ="" className={styles.image}/>
                </div>
                <div className= {styles.contanier2}>
                    <Image  src = "/assets/images/brend6.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend7.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend8.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend9.svg"  width={221} height={82} alt ="" className={styles.image}/>
                    <Image  src = "/assets/images/brend10.svg"  width={221} height={82} alt ="" className={styles.image}/>
                </div>
        </div>
    )
}