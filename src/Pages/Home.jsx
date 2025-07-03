import HeroSection from "../HeroSection/HeroSection"
import AsSeenAs from "../Home/AsSeenAs/AsSeenAs"
import Navbar from "../Navbar/Navbar"
import Works from "../Works/Works"

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AsSeenAs/>
      <Works/>
    </>
  )
}

export default Home
