import { useNavigate, useParams } from "react-router-dom"
import CatsData from "../../../../A_Data"
import { useEffect } from "react"
import styles from "./CardsRoom.module.css"
import OrangeButton from "../../../OrangeButton"
import Numbers from "../../../main/numbers/Numbers"
import LocationCat from "../../../main/location/LocationCat"

const SingleRoom = () => {
    const params = useParams()
    const navigate = useNavigate()
    const room = CatsData.find((room) => room.slug === params.slug)

    useEffect(() => {
      if (!CatsData) {
        navigate('..', {relative: 'path'})
      }
    }, [room, navigate])

  return (
    <>
      <section className={styles.singleRoom}>
          <picture>
              <source media="(min-width: 1366px)" srcSet={`${room?.imgDes} 1x, ${room?.imgDes2x} 2x`} />
              <source media="(min-width: 768px)" srcSet={`${room?.imgTab} 1x, ${room?.imgTab2x} 2x`}/>
              <img src={room?.imgMob} srcSet={`${room?.imgMob2x} 2x`} className={`${styles.roomImg} ${styles.singleImg}`}/>
          </picture>
          <div className={styles.singleRoomDes}>
              <h2 className={`${styles.roomItemTitle} ${styles.singleTitle}`}>{room?.title}</h2>
              <p className={styles.roomItemDes}>Размеры (ШхГхВ) {room?.size}</p>
              <span className={styles.roomItemDes}>Площадь {room?.area}</span>
              <div className={styles.eqpBlock}>
                      <span className={styles.roomItemDes}>Оснащение номера</span>
                      <div className={styles.eqpSvg}>
                          <img src={room?.eqp[0].one} className={styles.roomItemEqp}/>
                          {room?.eqp[0].two ? <img src={room?.eqp[0].two} className={styles.roomItemEqp}/> : ''}
                          {room?.eqp[0].three ? <img src={room?.eqp[0].three} className={styles.roomItemEqp}/> : ''}
                          {room?.eqp[0].four ? <img src={room?.eqp[0].four} className={styles.roomItemEqp}/> : ''}
                      </div>
              </div>
              <span className={styles.roomItemDes}>Цена за сутки: {room?.price} </span>
              <OrangeButton className={styles.button}/>
          </div>
      </section>
      <Numbers></Numbers>
      <LocationCat/>
    </>
  )
}

export default SingleRoom