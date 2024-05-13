'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
          <div className={styles['phone-icon']}>
            <div className={styles['cont-icon']}>
                <Image src="/assets/icons/Call.svg" width={28} height={28} alt="" />
                <span className = {styles['number']}>+7 952 552-52-52</span>
            </div>
              <div className = {styles['viber']}>
                <span>Viber </span>
                <span>Whatsapp Telegram</span>
              </div>
         </div>
            <div className = {styles['line-icon']}>
              <Image src="/assets/icons/dividers.svg" width={1216} height={10} alt=" " />
            </div>
      </header>
    );
}
export default Header;