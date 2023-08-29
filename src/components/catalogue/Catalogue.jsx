import LocationCat from "../main/location/LocationCat"
import CardsFilters from "./cards/CardsFilters"
import SpecialOffer from "./specialOffer/SpecialOffer"

const Catalogue = () => {
  return (
    <>
        <CardsFilters/>
        <SpecialOffer/>
        <LocationCat/>
    </>
  )
}

export default Catalogue