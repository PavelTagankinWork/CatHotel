import styles from './Location.module.css'

const LocationCat = () => {
  return (
    <section className={styles.location}>
        <div className={styles.locationInfo}>
            <h2 className={styles.locationTitle}>Как нас найти</h2>
            <p className={styles.locationTitleInfo}>Адрес</p>
            <span className={styles.locationTitleDes}>Санкт-Петербург, ул Большая Конюшенная, д 19</span>
            <p className={styles.locationTitleInfo}>Режим работы</p>
            <span className={styles.locationTitleDes}>Ежедневно, с 9:00 до 20:00</span>
            <p className={styles.locationTitleInfo}>Телефон</p>
            <span className={styles.locationTitleDes}>8 (800) 333-55-99</span>
            <p className={styles.locationTitleInfo}>E-mail</p>
            <span className={styles.locationTitleDes}>info@cat-hotel.ru</span>
            <p className={styles.locationTitleInfo}>Социальные сети</p>
            <ul className="socialMedia">
              <li className="socialMediaItem">
                <a className="socialMediaLink">
                  <img src='/img/facebook.svg'></img>
                </a>
              </li>
              <li className="socialMediaItem">
                <a className="socialMediaLink">
                  <img src='/img/inst.svg'></img>
                </a>
              </li>
              <li className="socialMediaItem">
                <a className="socialMediaLink">
                  <img src='/img/vk.svg'></img>
                </a>
              </li>
            </ul>
        </div>
        <div className={styles.locationMap}>
            <iframe className={styles.locationMapSource} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9422071182491!2d30.32189340919634!3d59.93887862717501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTExODY!5e0!3m2!1sru!2s!4v1692456123997!5m2!1sru!2s" style={{border: 0}} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default LocationCat