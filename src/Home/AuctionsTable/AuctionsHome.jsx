import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react";
import LiveAuctionsTab from "./LiveAuctionsTab/LiveAuctionsTab";
import UpcomingAuctionsTab from "./UpcomingTab/UpcomingAuctionsTab";
import "./AuctionsHome.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AuctionsHome = () => {
    const [activeTab, setActiveTab] = useState("live auctions");

    // Variants for main tab content
    const formVariants = {
        initial: { opacity:0, y:30 },
        animate: { opacity:1, y:0 },
        exit: { opacity: 0, y: -30 },
    };

    // Variants for scroll aniamtion
    const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    };

  return (
    <section className="mt-4 py-5 px-2">

      {/* title */}
      <motion.h2 className="title blue-color"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Explore K99X{" "}
        <motion.span 
         className="green-color title"
         whileHover={{ scale: 1.05 }}
         transition={{ type: "spring", stiffness: 200 }}>
          Car Auctions
          </motion.span>
      </motion.h2>

      {/* Small Desc */}
      <motion.p className="text-center text-secondary mb-4 mb-sm-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut"}}
        viewport={{ once: true }}
      >
        Discover verified vehicle listings from Banks, Insurance firms, and Direct Consumers. 
        Bid confidently and grab the best deals today.
      </motion.p>

      {/* ===== Main Tab Buttons ===========*/}
      <motion.div 
        className="d-flex justify-content-center gap-3 gap-sm-4 mb-4 mb-sm-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        >
        {/* Live Auction Button */}
        <motion.button 
          type="button"
          className={`main-tabBtn shadow-sm px-3 px-sm-4 px-md-5 py-3
          bold-900 d-flex align-items-center
          ${activeTab === "live auctions" ? "activeLive-btn" : "normalLive-btn"}`}
          onClick={() => setActiveTab("live auctions")}
          whileTap={{ scale: 0.95 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(0, 149, 39, 0.3)", }}
            transition={{ type: "spring", stiffness: 300}}>
              <motion.div
                whileHover={{ rotate: 10 }}>
                 <LazyLoadImage src="/Images/Home/Auctions/live-auction.png" className="mainTab-icon"/>
              </motion.div>
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
           <motion.div
            whileHover={{ rotate: -10}}>
              <LazyLoadImage src="/Images/Home/Auctions/upcoming-auction.png" className="mainTab-icon"/>
           </motion.div>
           Upcoming Auctions
        </motion.button>
      </motion.div>

      {/* Sub Tab Link */}
      <AnimatePresence mode="wait" initial={false}>
          {
              activeTab === "live auctions" ? 
              <motion.div
                key="live auctions"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                <LiveAuctionsTab/>
              </motion.div>
              : 
              <motion.div
                key="upcoming auctions"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}>
                <UpcomingAuctionsTab/>
              </motion.div>

          }
      </AnimatePresence>
    </section>
  )
}

export default AuctionsHome
