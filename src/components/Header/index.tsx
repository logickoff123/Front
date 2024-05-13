'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
          <div className ={styles.liner}>
            <div className={styles['contact-icons']}>
                <Image src="/assets/icons/Call.svg" width={28} height={28} alt="" />
                <span>+7 952 552-52-52</span>
            </div>
         <div className = {styles.mail}>
            <Image src="/assets/icons/mail.svg" width={28} height={28} alt="" />
            <span>Mr.Driskell@mail.ru</span>
         </div>
         <div className = {styles.logo_glav}>
          <Image src="/assets/icons/logo.svg" width={186} height={63} alt="" />
        </div> 
        <div className = {styles.user_icon}>
          <div className = {styles.price}>
            <span>37500</span>
            <Image src="/assets/icons/bag_headrr.svg" width={28} height={28} alt="" />
          </div>
          <Image src="/assets/icons/heart_header.svg" width={28} height={28} alt="" />
          <Image src="/assets/icons/user_header.svg" width={28} height={28} alt="" />
        </div>
         </div>
        <div className = {styles['mesenger']}>
            <span>Viber</span>
            <span>Whats App</span>
            <span>Telegram</span>
        </div> 
            <div className = {styles['line-icon']}>
              <Image src="/assets/icons/dividers.svg" width={1216} height={10} alt=" " />
            </div>
      </header>
    );
}
export default Header;