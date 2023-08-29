import styles from './Cards.module.css'
import { useState } from 'react'
import CardsRooms from './rooms/CardsRooms'
import { Link, NavLink } from 'react-router-dom'

const CardsFilters = () => {

    const [range, setRange] = useState({rangeMin: '', rangeMax: ''})
    const [closed, setClosed] = useState(true)

    const handleInputChange = (e, name) => {
        setRange({...range, [name]: e.target.value})
    }

    const closeHandle = () => {
        setClosed(!closed)
    }

  return (
    <section className={styles.cards}>
        <div className={styles.cardsHeader}>
            <h2 className={styles.cardsTitle}>Наши номера</h2>
            <div className={styles.cardsFilters}>
                <button className={styles.cardsFilterButton} onClick={closeHandle}>Фильтры</button>
                <a href="../catalogue?sort=areaNum" className={`${styles.cardsFilterButton} ${styles.cardsSortButton}`}>Площадь</a>
                <a href="../catalogue?sort=priceNum" className={`${styles.cardsFilterButton} ${styles.cardsSortButton}`}>Цена</a>
            </div>
        </div>
        <div className={styles.catalogueMenu}>
            <div className={`${styles.cardsFixed}  ${closed ? 'closed' : ''}`}>
                <div className={styles.cardsFilter}>
                <button className={styles.closeButton}  onClick={closeHandle}></button>
                    <form>
                    <span className={styles.cardsArea}>Цена за сутки, ₽</span> 
                        <div className={styles.rangeInputs}>
                            <label className={styles.rangeLabel}>
                                <input className={styles.rangeInput} type="number" name="min-price" placeholder="100" value={range.rangeMin} onChange={(e) => handleInputChange(e, 'rangeMin')}/>
                                <span className={styles.rangeMin}>от</span>
                            </label>
                            <label className={styles.rangeLabel}>
                                <input className={styles.rangeInput} type="number" name="max-price" placeholder="600" value={range.rangeMax} onChange={(e) => handleInputChange(e, 'rangeMax')}/>
                                <span className={styles.rangeMin}>до</span>
                            </label>
                        </div>
                    <h3 className={styles.cardsArea}>Площадь</h3>
                        <ul className={styles.cardsAreaList}>
                            <li className={styles.cardsAreaItem}>
                                <label for="0.63-0.90" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='0.63-0.90' id='0.63-0.90'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    0,63 м2 - 0,90 м2
                                </label>
                            </li>
                            <li className={styles.cardsAreaItem}>
                                <label for="1.13-1.56" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='1.13-1.56' id='1.13-1.56'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    1,13 м2 - 1,56 м2
                                </label>
                            </li>
                            <li className={styles.cardsAreaItem}>
                                <label for="2.56-2.58" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='2.56-2.58' id='2.56-2.58'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    2,56 м2 - 2.58 м2
                                </label>
                            </li>
                        </ul>
                        <h3 className={styles.cardsArea}>Оснащение</h3>
                        <ul className={styles.cardsAreaList}>
                            <li className={styles.cardsAreaItem}>
                                <label for="empty" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='empty' id='empty'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    Пустой номер
                                </label>
                            </li>
                            <li className={styles.cardsAreaItem}>
                                <label for="sunbed" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='sunbed' id='sunbed'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    Лежак
                                </label>
                            </li>
                            <li className={styles.cardsAreaItem}>
                                <label for="scratch" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='scratch' id='scratch'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    Когтеточка
                                </label>
                            </li>
                            <li className={styles.cardsAreaItem}>
                                <label for="playroom" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='playroom' id='playroom'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    Игровой-комплекс
                                </label>
                            </li>
                            <li className={styles.cardsAreaItem}>
                                <label for="house" className={styles.cardsAreaItemControl}>
                                    <input className={styles.cardsAreaItemInput} type='checkbox' name='house' id='house'></input>
                                    <span className={styles.cardsAreaItemMark}></span>
                                    Домик
                                </label>
                            </li>
                        </ul>
                        <button type='submit' className={styles.submitButton}>Подобрать</button>
                        <button type='reset' className={styles.resetButton}>Сбросить фильтр</button>
                    </form>
                </div>
            </div>
            <CardsRooms/>
        </div>
    </section>
  )
}

export default CardsFilters