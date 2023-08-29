import { useState } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [isX, setIsX] = useState(false)

  const toggleBurger = () => {
    setIsActive(!isActive);
    setIsX(!isX);
  };


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
          <NavLink className={styles.mainLogo} to='.'>
              <img src='/main-logo.svg' alt="главный логотип"></img>
          </NavLink>
          <div className={`${styles.menu} ${isActive ? 'active' : ''}`}>
              <ul className={styles.ul}>
                  <li className={styles.li}>Почему мы?</li>
                  <li className={styles.li}>
                    <NavLink to='/catalogue' className={styles.link} onClick={toggleBurger}>Номера</NavLink>
                  </li>
                  <li className={styles.li}>Отзывы</li>
                  <li className={styles.li}>Контакты</li>
              </ul>
              <span className={styles.tel}>8 (800) 333-55-99</span>
              <ul className={`socialMedia ${styles.socialMediaHeader}`}>
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
          <button className={`${styles.mainButton} ${isX ? `${styles.X}` : ''}`} onClick={toggleBurger}></button>
      </nav>
    </header>
  )
}

export default Header