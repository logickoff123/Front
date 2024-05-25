"use client"
import styles from "./Category.module.scss"
import Image from "next/image"
import ProductCard from "../ProductCard"
import { useProductsQuery } from "@/hooks/useProductsQuery"

export default function Category() {
    const { data } = useProductsQuery();
    const handleCategoryClick = (category: string) => {
        // Здесь можно добавить логику, которая будет выполняться при клике на категорию
        console.log(`Clicked on ${category}`);
    };

    return (
        <div className={styles.ProductCard}>
            <div className={styles.contanier}>
                <div className={styles.product_text}>
                    <p
                        className={`${styles.category} ${styles.hovered}`}
                        onClick={() => handleCategoryClick('Хиты продаж')}
                    >
                        Хиты продаж
                    </p>
                    <p
                        className={`${styles.category} ${styles.hovered}`}
                        onClick={() => handleCategoryClick('Самые популярные')}
                    >
                        Самые популярные
                    </p>
                    <p
                        className={`${styles.category} ${styles.hovered}`}
                        onClick={() => handleCategoryClick('Новые поступления')}
                    >
                        Новые поступления
                    </p>
                    <p
                        className={`${styles.category} ${styles.hovered}`}
                        onClick={() => handleCategoryClick('Акционные товары')}
                    >
                        Акционные товары
                    </p>
                </div>
            </div>

            <div className={styles.productCon}>
                <div className={styles.product}>
                {data?.map(product => (
                    <ProductCard {...product} key={product.id} />
                ))}
                </div>
                <button className={styles.button}>Показать еще</button>
            </div>
        </div>
    );
}