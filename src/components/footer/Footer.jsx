import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
import handleToTop from '../toTop/toTop'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerInfo}>
            <NavLink to="." className={styles.footerLink} onClick={handleToTop}>
                <img src="/main-logo.svg" />
            </NavLink>
            <div className={styles.footerLists}>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}>Почему мы?</li>
                    <li className={styles.footerItem}>Номера</li>
                </ul>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}>Отзывы</li>
                    <li className={styles.footerItem}>Как нас найти</li>
                </ul>
            </div>
        </div>
        <div className={styles.footerCR}>
            <span className={styles.footerRights}>2019 Все права защищены</span>
            <span className={styles.footerPolicy}>Политика конфиденциальности</span>
        </div>
    </footer>
  )
}

export default Footer