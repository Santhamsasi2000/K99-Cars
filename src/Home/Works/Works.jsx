import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion";

const subtitle = "3 Simple Steps to Sell or Bid for a Used Car in K99X.";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Handle Resize
  useEffect(()=>{
    const handleResize = () => {
       setIsMobile(window.innerWidth < 576);
    };
    handleResize(); //initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <section className="p-3 p-sm-4 p-md-5">
       {/* title */}
       <motion.h2 className="title blue-color"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
       >
          HOW K99X <span className="green-color title">WORKS</span>
       </motion.h2>

       {/* Subtitle */}
        <motion.p className="text-center text-secondary mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        {/* Card and Carousel with Indicator */}
        <div className="row gy-4 gy-sm-5 justify-content-center">
         {
           isMobile ? 
          <div>
            <Swiper
            modules={[Pagination]}
            pagination={{ 
              el: ".custom-pagination",
              clickable: true, }}
            spaceBetween={20}
            slidesPerView={1}
            className="d-sm-none">
           {
            ThreeSteps.map(({ id, icon, title, description }, i)=>(
             <SwiperSlide key={id}>
              <motion.div className="green-bg-100 p-3 p-lg-4 d-flex flex-column 
                align-items-center h-100 rounded-4 shadow-sm"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                  <LazyLoadImage src={icon} className="weWorks-img mb-3"/>
                  <h4 className="text-capitalize fs-5 bold-900 mb-2">{title}</h4>
                  <p>{description}</p>
              </motion.div>
            </SwiperSlide>
            ))
           }
            </Swiper>
            {/* Pagination dots outside the card */}
            <div className="custom-pagination text-center"></div>
            </div>
        :
          ThreeSteps.map(({ id, icon, title, description }, i)=>(
           <div className="col-6 col-lg-4" key={id}>
             <motion.div className="green-bg-100 p-3 p-lg-4 d-flex flex-column 
                align-items-center h-100 rounded-4 shadow"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                >
                <LazyLoadImage src={icon} className="weWorks-img mb-4"/>
                <h4 className="text-capitalize fs-5 bold-900 mb-2">{title}</h4>
                <p>{description}</p>
             </motion.div>
           </div>
          ))
         }
        </div>

        {/* Button - Learn more */}
        <div className="d-flex justify-content-center mt-4 mt-md-5">
          <motion.button 
          className="primary-btn d-flex align-items-center gap-2 px-4 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          >
            LEARN MORE <FaArrowRight/>
          </motion.button>
        </div>
    </section>
  )
}

export default Works

const ThreeSteps = [
  {
    title: "Register & List Your Car",
    description: "Submit your vehicle details for free and get it verified for live auction.",
    icon: "/Images/Home/how-works/register-list-car-k99x.jpeg",
  },
  {
    title: "Get Inspected & Auction Live",
    description: "We inspect your car and list it in our online auction for verified bidders.",
    icon: "/Images/Home/how-works/inspection-live-auction.jpeg",
  },
  {
    title: "Sell or Bid & Get Best Price",
    description: "Highest bidder wins. Sellers get paid quickly, buyers get verified cars.",
    icon: "/Images/Home/how-works/close-deal-get-the-price.jpeg",
  },
];

