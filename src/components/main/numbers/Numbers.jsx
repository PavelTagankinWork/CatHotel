import { NavLink } from "react-router-dom";
import OrangeButton from "../../OrangeButton";
import SliderCat from "../../sliders/Slider";
import styles from "./Numbers.module.css";
import handleToTop from "../../toTop/toTop";

const Numbers = () => {

    return (
        <section className={styles.numbers}>
            <h2 className={styles.numbersTitle}>Номера</h2>
            <SliderCat>
                <div className={styles.numbersCard}>
                    <picture>
                        <source media="(min-width: 1366px)" srcSet="/img/number-1-des.jpg" />
                        <source media="(min-width: 768px)" srcSet="/img/number-1-tab.jpg" />
                        <img src='/img/number-1.jpg' alt="Картинка номера" className={styles.numbersCardImg}/>
                    </picture>
                    <div className={styles.numbersCardSection}>
                        <h3 className={styles.numbersCardTitle}>Эконом плюс</h3>
                        <ul className={styles.numbersCardList}>
                            <li className={styles.numbersCardItem}>Площадь - 0,90 м2</li>
                            <li className={styles.numbersCardItem}>Размеры (ШхГхВ) 90х100х180 см</li>
                            <li className={styles.numbersCardItem}>Цена за сутки: 200₽</li>
                        </ul>
                        <NavLink to='/catalogue' className={styles.link} onClick={handleToTop}>
                            <OrangeButton/>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.numbersCard}>
                    <picture>
                        <source media="(min-width: 1366px)" srcSet="/img/number-2-des.jpg" />
                        <source media="(min-width: 768px)" srcSet="/img/number-2-tab.jpg" />
                        <img src='/img/number-2.jpg' alt="Картинка номера" className={styles.numbersCardImg}/>
                    </picture>
                    <div className={styles.numbersCardSection}>
                        <h3 className={styles.numbersCardTitle}>Комфорт</h3>
                        <ul className={styles.numbersCardList}>
                            <li className={styles.numbersCardItem}>Площадь - 1,13 м2</li>
                            <li className={styles.numbersCardItem}>Размеры (ШхГхВ) 100х125х180 см</li>
                            <li className={styles.numbersCardItem}>Цена за сутки: 250₽</li>
                        </ul>
                        <NavLink to='/catalogue' className={styles.link} onClick={handleToTop}>
                            <OrangeButton/>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.numbersCard}>
                    <picture>
                        <source media="(min-width: 1366px)" srcSet="/img/number-3-des.jpg" />
                        <source media="(min-width: 768px)" srcSet="/img/number-3-tab.jpg" />
                        <img src='/img/number-3.jpg' alt="Картинка номера" className={styles.numbersCardImg}/>
                    </picture>
                    <div className={styles.numbersCardSection}>
                        <h3 className={styles.numbersCardTitle}>Сьют</h3>
                        <ul className={styles.numbersCardList}>
                            <li className={styles.numbersCardItem}>Площадь - 1,56 м2</li>
                            <li className={styles.numbersCardItem}>Размеры (ШхГхВ) 125х125х180 см</li>
                            <li className={styles.numbersCardItem}>Цена за сутки: 350₽</li>
                        </ul>
                        <NavLink to='/catalogue' className={styles.link} onClick={handleToTop}>
                            <OrangeButton/>
                        </NavLink>
                    </div>
                </div>
            </SliderCat>
        </section>
    )

}

export default Numbers