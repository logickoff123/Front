"use client"
import Link from "next/link";
import styles from "./Catalog.module.scss";
import Image from 'next/image';


export default function Catalog() {
    return (
        <div className={styles.catalog}>
            <span className={styles.name}> Каталог</span>
            <div className={styles.contenier}>
                <div className={styles.center}>
                    <ul className={styles.catalog_list}>
                        <li className={styles.sets}>
                            <Link className={styles.text1} href="/">Тату наборы</Link>
                            <Image src="/assets/images/sets.svg" width={280} height={340} alt="" className={styles.imagsets} />
                        </li>
                        <li className={styles.touch}>
                            <Link className={styles.text2} href="/">Держатели</Link>
                            <Image src="/assets/images/derg.svg" width={535} height={270} alt="" className={styles.imagsets1} />
                        </li>
                    </ul>
                </div>
                <div className={styles.center1}>
                    <ul className={styles.catag_list2}>
                        <li className={styles.tato_machine}>
                            <Link className={styles.text10} href="/">Тату машинки</Link>
                            <Image src="assets/images/tato.svg" width={259} height={259} alt="" className={styles.imagsets2} />
                        </li>
                        <li className={styles.pidril}>
                            <Link className={styles.text11} href="/">Педали и провода</Link>
                            <Image src="assets/images/pidril.svg" width={290} height={350} alt="" className={styles.imagsets3} />
                        </li>
                        <li className={styles.paints}>
                            <Link className={styles.text12} href="/">Краски</Link>
                            <Image src="assets/images/paints.svg" width={307} height={266} alt="" className={styles.imagsets3} />
                        </li>
                    </ul>
                </div>
                <div className={styles.center3}>
                    <ul className={styles.catag_list3}>
                        <li className={styles.eating_block}>
                            <Link className={styles.text1} href="/">Блоки питания</Link>
                            <Image src="assets/images/eating.svg" width={259} height={259} alt="" className={styles.imagsets2} />
                        </li>
                        <li className={styles.ending}>
                            <Link className={styles.text13} href="/">Наконечники</Link>
                            <Image src="assets/images/ending.svg" width={321} height={350} alt="" className={styles.imagsets3} />
                        </li>
                        <li className={styles.tatoo_needles}>
                            <Link className={styles.text1} href="/">Тату иглы</Link>
                            <Image src="assets/images/needls.svg" width={307} height={266} alt="" className={styles.imagsets3} />
                        </li>
                    </ul>
                </div>
                <div className={styles.center4}>
                    <ul className={styles.catag_list4}>
                        <li className={styles.rashodnic}>
                            <Link className={styles.text1} href="/">Расходники</Link>
                            <Image src="assets/images/rashodnic.svg" width={259} height={259} alt="" className={styles.imagsets2} />
                        </li>
                        <li className={styles.acses}>
                            <Link className={styles.text15} href="/">Аксесуары</Link>
                            <Image src="assets/images/acses.svg" width={321} height={350} alt="" className={styles.imagsets3} />
                        </li>
                        <li className={styles.cserocs}>
                            <Link className={styles.text1} href="/">Принтеры и планшеты</Link>
                            <Image src="assets/images/cserocs.svg" width={307} height={266} alt="" className={styles.imagsets3} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.dop_catalog}>
                <div className={styles.paints_lip}>
                    <div className={styles.imgpaint}>
                        <Image src="assets/images/paintslil.svg" width={930} height={470} alt="" className={styles.painsil}/>
                        <div className={styles.cont_text_p}>
                            <Link className={styles.text8} href="/">Краски Lip Nitn</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.foxx}>
                    <div className={styles.imgfox}>
                        <Image src="assets/images/foxxvipper.svg" width={930} height={470} alt="" className = {styles.foxxviper}/>
                        <div className={styles.cont_text_t}>
                            <Link className={styles.text9} href="/">Foxx viper -</Link>
                            <Link className={styles.text9} href="/">хиты продаж</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}