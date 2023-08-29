import SliderCat from "../../sliders/Slider"
import styles from "./Feedback.module.css"

const Feedback = () => {
  return (
    <section className={styles.feedback}>
        <h2 className={styles.feedbackTitle}>Отзывы</h2>
        <SliderCat>
            <div className={styles.feedbackSection}>
                <p className={styles.feedbackText}>Первый раз пришлось оставить нашего котика в гостинице, очень переживали. Администратор Мария каждый день высылала нам фото нашего питомца, рассказывала, как он себя чувствует. И мы и котик остались очень довольны!</p>
                <span className={styles.feedbackName}>Валерия Гришаева</span>
                <span className={styles.feedbackDate}>15 ноября, 2019</span>
            </div>
            <div className={styles.feedbackSection}>
                <p className={styles.feedbackText}>Гостиницу для питомцев нам посоветовали друзья. Они всегда оставляют здесь своего кота, когда уезжают. В “Котейке” очень хорошо заботятся о питомцах, в гостинице очень чисто. Всем рекомендую! Будем обращаться еще.</p>
                <span className={styles.feedbackName}>Екатерина Минаева</span>
                <span className={styles.feedbackDate}>10 октября, 2019</span>
            </div>
            <div className={styles.feedbackSection}>
                <p className={styles.feedbackText}>Мой кот — настоящая привереда, угодить ему сложно. У меня были особые требования к уходу за ним, и “Котейка” отлично справились. Я часто наблюдал по видео за питомцем со своего телефона, это очень удобно. </p>
                <span className={styles.feedbackName}>Валерия Гришаева</span>
                <span className={styles.feedbackDate}>15 ноября, 2019</span>
            </div>
        </SliderCat>
    </section>
  )
}

export default Feedback