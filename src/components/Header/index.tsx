'use client';

import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from '../HeaderMenu';
import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <Link href="/" className={styles.logo}>
                    <Image fill src="/assets/icons/logo.svg" alt="logo" />
                </Link>
                
                <HeaderMenu />

                <a href="tel:+79184326587" className={styles.phone}>
                    <div className={styles.phoneWrapImage}>
                        <Image fill src="/assets/icons/telephone.svg" alt="logo" />
                    </div>
                    <div className={styles.phoneWrap}>
                        <div className={styles.phoneText}>+7 (918) 432-65-87</div>
                        <div className={styles.phoneTime}>Ежедневно с 9:00 до 23:00</div>
                    </div>
                </a>

                <div className={styles.cart}>
                    <div className={styles.cartIcon}>
                        <div className={styles.cartWrapImage}>
                            <Image fill src="/assets/icons/cart.svg" alt="logo" />
                        </div>
                        <div className={styles.cartIconBadge}>0</div>
                    </div>
                    <div className={styles.cartText}>
                        <div className={styles.cartTextTitle}>ваш заказ</div>
                        <div className={styles.cartTextCount}>Сырная и еще 1 пицца</div>
                    </div>
                </div>

                <Link href="#" className={styles.language}>
                    <span>EN</span>
                </Link>

            </div>
        </header>
    );
}

export default Header;