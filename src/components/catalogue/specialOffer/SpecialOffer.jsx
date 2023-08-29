import { Link ,NavLink } from 'react-router-dom'
import WhiteButton from '../../WhiteButton'
import styles from './SpecialOffer.module.css'
import handleToTop from '../../toTop/toTop'

const SpecialOffer = () => {
  return (
    <section className={styles.specialOffer}>
        <div className={styles.specialOfferBlock}>
            <h3 className={styles.blockTitle}>Каждый 7-й день<br></br><strong className={styles.blockTitleAccent}>бесплатно!</strong></h3>
            <p className={styles.blockDescription}>Акция действует при размещении в номерах “Люкс” и “Супер-Люкс” </p> 
            <Link to="luxe"  onClick={handleToTop}>
              <WhiteButton/>
            </Link>
        </div>
    </section>
  )
}

export default SpecialOffer