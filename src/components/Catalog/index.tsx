'use client';

import Image from 'next/image';
import { useState } from 'react';

import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss';

export default function Catalog() {
    const [state, setState] = useState(0);

    return (
        <div className="container">
            <section className={styles.catalog}>

                
                <button onClick={() => setState(state - 1)}>-</button>
                <div>{state}</div>
                <button onClick={() => setState(state + 1)}>+</button>


                <h2 className={styles.catalogTitle}>Выберите пиццу</h2>
                <ul className={styles.catalogCategory}>
                    <li className={styles.catalogCategoryItem}>Все</li>
                    <li className={styles.catalogCategoryItem}>Острые</li>
                    <li className={styles.catalogCategoryItem}>Мясные</li>
                    <li className={styles.catalogCategoryItem}>Сырные</li>
                    <li className={styles.catalogCategoryItem}>Веганские</li>
                </ul>

                <div className={styles.catalogGrid}>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </section>
        </div>
    );
}