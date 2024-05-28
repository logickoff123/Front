"use client"
import styles from "./Category.module.scss"
import Image from "next/image"
import ProductCard from "../ProductCard"
import { useProductsQuery } from "@/hooks/useProductsQuery"
import { useCategoriesQuery } from "@/hooks/useCategoriesQuery"
import { useState } from "react"

export default function Category() {
    const { data: products } = useProductsQuery();
    const { data: categories } = useCategoriesQuery();
    const [activ_category_id, set_activ_category_id] = useState(1)
    const handleCategoryClick = (categoryid: number) => {
        set_activ_category_id(categoryid)
        console.log(`Clicked on ${categoryid}`);
    };

    return (
        <div className={styles.ProductCard}>
            <div className={styles.contanier}>
                <div className={styles.product_text}>

                {categories?.map(category => (
                    <p
                        className={`${styles.category} ${styles.hovered}`}
                        onClick={() => handleCategoryClick(category.id)}
                        key={category.id}
                    >{
                        category.name
                    }</p>
                ))}
                </div>
            </div>

            <div className={styles.productCon}>
                <div className={styles.product}>
                {products?.map(product => (
                    <ProductCard {...product} key={product.id}  />
                ))}
                </div>
                <button className={styles.button}>Показать еще</button>
            </div>
        </div>
    );
}

// по сути у меня есть сейчас отдельно карточки и отдель категории,
// теперь мне надо их связать. Что их связывает? У каждой карточки есть idcategory к который и относиться 
//к основным катеогориям
//то есть мне надо использовать   map который будет связывать и категории и продукты.
//даже не так, мне надо изменить мой продукт кард, который будет взоимодейтсвать с 
// каталогом и при этом. Когда пользователь заходит на страницу я хочу чтобы у него высвечивалась на странице
//первая категория и товары которые входят в эту категорию
// if (categoryid = cat) 

const category = {
    id: 12,
    _name: 'Новые товары'
}

interface Props {
    _name: string,
    id?: number,
    isRed?: boolean,
}


const Category2 = (props: Props) => <p>WHHAAT??{'id' in props}</p>


const asd1 = <>
    <Category2 _name="asd" id={undefined}/>
    <Category2 _name="asd"/>
</>;

