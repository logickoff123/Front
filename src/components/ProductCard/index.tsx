"use client"
import styles from "./ProductCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Product } from "@/types/product"

export default function ProductCard(props: Product) {
  const [showAddToCartButton, setShowAddToCartButton] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setShowAddToCartButton(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setShowAddToCartButton(false)
    setIsHovered(false)
  }

  return (
    <div
      className={`${styles.ProductCard} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.iconWrapper}>
        <div className={styles.favoriteIcon}>
          <Image src="/assets/icons/Vector.svg" width={19.6} height={17.65} alt="" />
        </div>
      </div>
      <Link href="#">
        <div className={styles.image_con}>
          <img src={`assets/images/uploaded/product/${props.image}`} alt="Not found" />
        </div>
      </Link>
      <Link href="#">
        <div className={styles.textBlock}>
          <span>{props.name}</span>
        </div>
      </Link>
      <div className={`${styles.priceAndCart} ${isHovered ? styles.expanded : ''}`}>
        <p className={styles.price}>{props.price}</p>
        {showAddToCartButton && (
          <button className={styles.addToCartButton}>Добавить в корзину</button>
        )}
      </div>
    </div>
  )
}