import styles from './Advantages.module.css'

const Advantages = () => {
  return (
    <section className={styles.section}>
        <h2 className={styles.title}>Почему мы?</h2>
        <ul className={styles.list}>
            <li className={`${styles.item} ${styles.temp}`}>
                <p className={styles.itemTitle}>Комфортная температура</p>
                <span className={styles.itemDescription}>Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру. </span>
            </li>
            <li className={`${styles.item} ${styles.cam}`}>
                <p className={styles.itemTitle}>Видеонаблюдение</p>
                <span className={styles.itemDescription}>Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера.</span>
            </li>
            <li className={`${styles.item} ${styles.taxi}`}>
                <p className={styles.itemTitle}>Услуги зоотакси</p>
                <span className={styles.itemDescription}>Мы приедем за вашим питомцем в любой район Санкт-Петербурга.</span>
            </li>
            <li className={`${styles.item} ${styles.food}`}>
                <p className={styles.itemTitle}>Сбалансированное питание</p>
                <span className={styles.itemDescription}>Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.</span>
            </li>
            <li className={`${styles.item} ${styles.walk}`}>
                <p className={styles.itemTitle}>Ежедневные прогулки</p>
                <span className={styles.itemDescription}>По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой территории.</span>
            </li>
            <li className={`${styles.item} ${styles.vet}`}>
                <p className={styles.itemTitle}>Лучшие ветеринары</p>
                <span className={styles.itemDescription}>В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.</span>
            </li>
        </ul>
    </section>
  )
}

export default Advantages