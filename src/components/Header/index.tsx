'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };
  return (
    <header className={styles.header}>
      <div className = {styles.full}> 
      <div className={styles.liner}>
        <div>
          <div className={styles['row']}>
            <div className={styles['contact-icons']}>
              <Image src="/assets/icons/Call.svg" width={28} height={28} alt="" />
              <span>+7 952 552-52-52</span>
            </div>

            <div className={styles.mail}>
              <Image src="/assets/icons/mail.svg" width={28} height={28} alt="" />
              <span>Mr.Driskell@mail.ru</span>
            </div>
          </div>
          <div className={styles['mesenger']}>
            <span>Viber</span>
            <span>Whats App</span>
            <span>Telegram</span>
          </div>
        </div>
        <div className={styles.logo_glav}>
          <Image src="/assets/icons/logo.svg" width={186} height={63} alt="" />
        </div>

        <div className={styles.user_icon}>
          <div className={styles.price}>
            <Link className={styles.text2} href="/">3700</Link>
            <Image src="/assets/icons/bag_headrr.svg" width={28} height={28} alt="" />
          </div>
          <Image src="/assets/icons/heart_header.svg" width={28} height={28} alt="" />
          <Image src="/assets/icons/user_header.svg" width={28} height={28} alt="" />
        </div>
      </div>

      <div className={styles['line-icon']}>
        <Image src="/assets/icons/dividers.svg" width={1216} height={10} alt=" " />
      </div>

      <div className={styles.catalog_container}>
        <div className={styles.buttons_layout}>
          {!isMenuOpen && <span className={styles.cat}>Каталог</span>}
          <div className={styles.burger_menu} onClick={toggleMenu}>
            {/* Кнопка бургер-меню */}
            <div className={styles['burger-icon']}>
              <div className={styles['burger-line']}></div>
              <div className={styles['burger-line']}></div>
              <div className={styles['burger-line']}></div>
              <div className={styles['burger-line']}></div>
            </div>
            {isMenuOpen && (
                <div className={styles['catalog-content']}>
                  <ul className="catalog-list">
                    <li><Link className={styles.text} href="#">Тату наборы</Link></li>
                    <li><Link className={styles.text} href="#">Держатели</Link></li>
                    <li><Link className={styles.text} href="#">Тату машинки</Link></li>
                    <li><Link className={styles.text} href="#">Педали и провода</Link></li>
                    <li><Link className={styles.text} href="#">Тату краски</Link></li>
                    <li><Link className={styles.text} href="#">Блоки питания</Link></li>
                    <li><Link className={styles.text} href="#">Наконечники</Link></li>
                    <li><Link className={styles.text} href="#">Тату иглы</Link></li>
                    <li><Link className={styles.text} href="#">Защитные емкости</Link></li>
                  </ul>
                </div>
            )}
          </div>
        </div>

          <div className={styles.d3}>
            <form>
              <input type="text" placeholder="Искать здесь..." />
              <button type="submit"></button>
            </form>
          </div>

      <div className={styles.promo}>
        <Link className={styles.textp} href="#"> Промоакции</Link>
        <Link className={styles.textp} href="#">Скидкы</Link>
        <Link className={styles.textp} href="#">Помощь</Link>
        <Link className={styles.textp} href="#"> О Нас</Link>
        <Link className={styles.textp} href="#">Контакты</Link>
      </div>

      </div>
      </div>
        

    </header >
  );
}
export default Header;
