import { Categories } from "../components/Categories"
import Banner from "../components/homepage/Banner"
import Feature from "../components/homepage/Feature"
import DealsOfDay from "../components/homepage/DealsOfDay"


const Homepage = () => {
  return (
    <>
      <Categories />
      <Banner />
      <DealsOfDay />
      <Feature />
    </>
  )
}

export default Homepage