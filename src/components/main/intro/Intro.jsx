import { NavLink } from 'react-router-dom'
import WhiteButton from '../../WhiteButton'
import styles from './Intro.module.css'
import handleToTop from '../../toTop/toTop'

const Intro = () => {
  return (
    <article className={styles.article}>
        <div className={styles.intro}>
            <span className={styles.city}>Санкт-Петербург</span>
            <h2 className={styles.catTitle}>Котейка</h2>
            <p className={`${styles.catDescription} lato`}>Уютная гостиница для котов и кошек</p>
            <NavLink to='/catalogue' onClick={handleToTop}>
              <WhiteButton/>
            </NavLink>
        </div>
    </article>
  )
}

export default Intro