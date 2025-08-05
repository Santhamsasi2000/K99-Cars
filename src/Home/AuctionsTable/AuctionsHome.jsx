import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react";
import LiveAuctionsTab from "./LiveAuctionsTab/LiveAuctionsTab";
import UpcomingAuctionsTab from "./UpcomingTab/UpcomingAuctionsTab";
import "./AuctionsHome.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AuctionsHome = () => {
    const [activeTab, setActiveTab] = useState("live auctions");

    // Animation variant for form transition
    const formVariants = {
        initial: { opacity:0, y:30 },
        animate: { opacity:1, y:0 },
        exit: { opacity: 0, y: -30 },
    };

  return (
    <section className="mt-4 py-5 px-2">
      {/* Badge */}
      {/* <div className="d-flex justify-content-center mb-3">
         <span className="primary-color-100 px-4 py-1 rounded-5 
         primary-title-color d-flex align-items-center gap-2">
           <FaShieldAlt /> Verified Cars</span>
      </div> */}

      {/* title */}
      <motion.h2 className="title blue-color"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore K99X <span className="green-color title">Car Auctions</span>
      </motion.h2>

      {/* Small Desc */}
      <motion.p className="text-center text-secondary mb-4 mb-sm-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Discover verified vehicle listings from Banks, Insurance firms, and Direct Consumers. 
        Bid confidently and grab the best deals today.
      </motion.p>

      {/* Tab Button */}
      <div className="d-flex justify-content-center gap-3 gap-sm-4 mb-4 mb-sm-5">
        {/* Live Auction Button */}
        <motion.button 
          type="button"
            className={`main-tabBtn shadow-sm px-3 px-sm-4 px-md-5 py-3
            bold-900 d-flex align-items-center
            ${activeTab === "live auctions" ? "activeLive-btn" : "normalLive-btn"}`}
            onClick={() => setActiveTab("live auctions")}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}>
            <LazyLoadImage src="/Images/Home/Auctions/live-auction.png" className="mainTab-icon"/>
            Live Auctions
        </motion.button>
        {/* Upcoming Auction Button */}
        <motion.button 
          type="button"
           className={`main-tabBtn shadow-sm px-3 px-sm-4 px-md-5 py-3
            bold-900 d-flex align-items-center
            ${activeTab === "upcoming auctions" ? "activeUpcoming-btn" : "normalUpcoming-btn"}`}
          onClick={()=>setActiveTab("upcoming auctions")}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}>
           <LazyLoadImage src="/Images/Home/Auctions/upcoming-auction.png" className="mainTab-icon"/>Upcoming Auctions
        </motion.button>
      </div>

      {/* Dynamic Form Content */}
      <AnimatePresence mode="wait" initial={false}>
          {
              activeTab === "live auctions" ? 
              <motion.div
              key="live auctions"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}>
                <LiveAuctionsTab/>
              </motion.div>
              : 
              <motion.div
              key="upcoming auctions"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}>
                <UpcomingAuctionsTab/>
              </motion.div>

          }
      </AnimatePresence>
    </section>
  )
}

export default AuctionsHome
