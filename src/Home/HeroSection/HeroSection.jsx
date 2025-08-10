import { FaArrowRight } from "react-icons/fa";
import "./HeroSection.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import CarOfferForm from "./CarOfferForm/CarOfferForm";

// Animation Variants
const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.4,
    ease: "easeOut",
  }
};

// Reusable Animated Text Component
const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      variants={letterContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{ display: "inline-block", marginRight: "0.3em", whiteSpace: "nowrap" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};


const HeroSection = () => {
  return (
  <>
    <section className="tintorange-bg px-3 px-sm-4 px-md-5 pt-3 pt-sm-4 pt-md-5 mt-5">
      <div className="row justify-content-between gy-4 gx-0">
        <div className="col-lg-6">
          {/* Animated Titles */}
          <AnimatedText text="REAL TIME OFFER." className="hero-title mb-0 text-center text-lg-start"/>
          <AnimatedText text="SAME DAY PAYMENT." className="hero-title mb-0 text-center text-lg-start"/>
          <p className="green-color bold-900 hero-subtitle mb-2 mb-lg-3 mt-3 text-center text-lg-start">Sell Your Car with Confidence on K99X</p>
          <p className="mb-2 mb-md-4">
          India's trusted online auction platform for verified car listings, dealer access, and best resale value — fast, fair, and secure.
          </p>
        </div>
        <div className="col-lg-5">
            <CarOfferForm/>
        </div>
      </div>
    </section>

    {/* Instant Offer Btn */}
    <div className="px-3 px-sm-4 px-md-5 row justify-content-center justify-content-lg-end align-items-end gx-0 w-100">
      <div className="col-lg-5 offer-btn-size">
        <NavLink 
        className="instant-offer-btn py-3 w-100 rounded-bottom-4 
        d-flex justify-content-center align-items-center">
        GET AN INSTANT OFFER
         <FaArrowRight className="ms-2"/>
        </NavLink>
        {/* to="/instant-offer" */}
      </div>
    </div>
  </>
  )
}

export default HeroSection
