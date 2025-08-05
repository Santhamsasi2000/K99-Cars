import Works from "../Home/Works/Works"
import HeroSection from "../Home/HeroSection/HeroSection"
import Footer from "../Components/Footer/Footer"
import AuctionsTable from "../Home/AuctionsTable/AuctionsHome"
import NavBar from "../Home/Navbar/Navbar"

const Home = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <AuctionsTable/>
      <Works/>
      <Footer/>
    </>
  )
}

export default Home
