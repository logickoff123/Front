'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.square}>
                <div className={styles.logo}>
                    <Image src="/assets/icons/logo.svg" width={186} height={63} alt="" />
                </div>
                <div className={styles.contanier1}>
                    <Link className={styles.textp} href="#"> Промоакции</Link>
                    <Link className={styles.textp} href="#">Скидкы</Link>
                    <Link className={styles.textp} href="#">Помощь</Link>
                </div>
                <div className={styles.contanier2}>
                    <Link className={styles.textp} href="#"> О нас</Link>
                    <Link className={styles.textp} href="#">Контакты</Link>
                </div>
                <div className={styles.contanier3}>
                    <div className={styles.mail}>
                        <Image src="/assets/icons/mail.svg" width={28} height={28} alt="" />
                        <span>Mr.Driskell@mail.ru</span>
                    </div>
                    <div className={styles['contact-icons']}>
                        <Image src="/assets/icons/Call.svg" width={28} height={28} alt="" />
                        <span>+7 952 552-52-52</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
