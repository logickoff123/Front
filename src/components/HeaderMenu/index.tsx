'use client';

import Link from 'next/link';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    return (
        <nav className={styles.nav}>

            <div className={styles.navList}>
                <div className={styles.navListItem}>
                    <Link href="#">меню</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="/about">о нас</Link>
                </div>
                <div className={styles.navListItem}>
                    <Link href="#">контакты</Link>
                </div>
            </div>
        </nav>
    );
}