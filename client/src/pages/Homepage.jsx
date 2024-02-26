import Header from "../components/Header"
import Footer from "../components/Footer"
import { Categories } from "../components/Categories"
import Banner from "../components/homepage/Banner"
import Feature from "../components/homepage/Feature"
import DealsOfDay from "../components/homepage/DealsOfDay"


const Homepage = () => {
  return (
    <>
      <Header />
      <Categories />
      <Banner />
      <DealsOfDay />
      <Feature />
      <Footer />
    </>
  )
}

export default Homepage