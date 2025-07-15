import AsSeenAs from "../Home/AsSeenAs/AsSeenAs"
import Works from "../Home/Works/Works"
import HeroSection from "../Home/HeroSection/HeroSection"
import Navbar from "../Home/Navbar/Navbar"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      {/* <AsSeenAs/> */}
      <Works/>
      <Footer/>
    </>
  )
}

export default Home
