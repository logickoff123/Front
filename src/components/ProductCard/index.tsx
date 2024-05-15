"use client"
import styles from "./ProductCard.module.scss"
import Image from "next/image"
import Link from "next/link"
export default function ProductCard() {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.iconWrapper}>
                <div className={styles.favoriteIcon}>
                    <Image src="/assets/icons/Vector.svg" width={28} height={28} alt="" />
                </div>
            </div>
            <Link href="#"><div className={styles.image_con}>
                <Image
                    src="/assets/images/card1.svg"
                    alt='product'
                    height={289}
                    width={228}
                    className={styles.productImage}
                />
            </div></Link>
            <Link href="#"><div className={styles.textBlock}>
                <p>Foxxx Kitsune Mini Black Vintage RCA</p>
            </div></Link>
            <div className={styles.priceAndCart}>
                <p className={styles.price}>6000 P</p>
            </div>
        </div>
    )
}