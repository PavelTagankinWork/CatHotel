import OrangeButton from '../../../OrangeButton'
import handleToTop from '../../../toTop/toTop'
import styles from './CardsRoom.module.css'

const CardsRoom = ({title, slug, id, imgMob, imgMob2x, imgTab, imgTab2x, imgDes, imgDes2x, price, area, size, eqpOne, eqpTwo, eqpThree, eqpFour, priceNum, areaNum}) => {
  return (
    <li className={styles.roomItem}  onClick={handleToTop}>
        <picture>
            <source media="(min-width: 1366px)" srcSet={`${imgDes} 1x, ${imgDes2x} 2x`} />
            <source media="(min-width: 768px)" srcSet={`${imgTab} 1x, ${imgTab2x} 2x`}/>
            <img src={imgMob} srcSet={`${imgMob2x} 2x`} className={styles.roomImg}/>
        </picture>
        <div className={styles.roomItemSpec}>
            <h3 className={styles.roomItemTitle}>{title}</h3>
            <span className={styles.roomItemDes}>Размеры (ШхГхВ) {size}</span>
            <span className={styles.roomItemDes}>Площадь {area}</span>
            <div className={styles.eqpBlock}>
                    <span className={styles.roomItemDes}>Оснащение номера</span>
                    <div className={styles.eqpSvg}>
                        <img src={eqpOne} className={styles.roomItemEqp}/>
                        {eqpTwo ? <img src={eqpTwo} className={styles.roomItemEqp}/> : ''}
                        {eqpThree ? <img src={eqpThree} className={styles.roomItemEqp}/> : ''}
                        {eqpFour ? <img src={eqpFour} className={styles.roomItemEqp}/> : ''}
                    </div>
            </div>
            <span className={styles.roomItemDes}>Цена за сутки: {price} </span>
            <OrangeButton className={styles.button} onClick={handleToTop}/>
        </div>
    </li>
  )
}

export default CardsRoom