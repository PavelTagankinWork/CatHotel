import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useEffect, useState } from "react"
import CatsData from "../../../../A_Data"
import CardsRoom from "./CardsRoom"
import styles from './CardsRoom.module.css'

const SORT_KEYS = ['priceNum', 'areaNum']

function sortRooms(CatsData, key) {
  const sortedRooms = [...CatsData]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedRooms
  } else {
    sortedRooms.sort((a, b) => (a[key] < b[key] ? 1 : -1))
  }
  return sortedRooms
}

const CardsRooms = () => {

  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedRooms, setSortedRooms] = useState(sortRooms(CatsData, sortKey))
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedRooms([...CatsData])
    }
  }, [sortKey, navigate])

  return (
    <ul className={styles.roomsList}>
        {sortedRooms.map((catsCard) => 
            <NavLink to={catsCard.slug} className={styles.cardsLink} key={catsCard.id}>
              <CardsRoom key={catsCard.id} title={catsCard.title} size={catsCard.size} price={catsCard.price} imgMob={catsCard.imgMob} imgMob2x={catsCard.imgMob2x} imgTab={catsCard.imgTab} imgTab2x={catsCard.imgTab2x} imgDes={catsCard.imgDes} imgDes2x={catsCard.imgDes2x} area={catsCard.area} eqpOne={catsCard.eqp[0].one} eqpTwo={catsCard.eqp[0].two} eqpThree={catsCard.eqp[0].three} eqpFour={catsCard.eqp[0].four} slug={catsCard.slug} priceNum={catsCard.priceNum} areaNum={catsCard.areaNum}></CardsRoom>
            </NavLink>
            )}
    </ul>
  )
}

export default CardsRooms