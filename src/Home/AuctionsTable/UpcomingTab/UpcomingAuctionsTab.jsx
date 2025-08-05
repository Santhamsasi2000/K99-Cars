import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react";
import BankUpcoming from "./BankUpcoming";
import InsuranceUpcoming from "./InsuranceUpcoming";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ConsumerUpcoming from "./ConsumerUpcoming";

const UpcomingAuctionsTab = () => {
    const [activeTab, setActiveTab] = useState("bank");

    // Animation variant for form transition
    const formVariants = {
        initial: { opacity:0, y:30 },
        animate: { opacity:1, y:0 },
        exit: { opacity: 0, y: -30 },
    };

  return (
     <section>

       {/* Tab Button */}
       <div className="d-flex justify-content-center gap-3 gap-sm-4">
        <motion.button 
            type="button"
            className={`sub-tabBtn shadow-sm px-3 px-md-5 px-sm-4 py-2
            bold-900 d-flex align-items-center gap-1
            ${activeTab === "bank" ? "activeUpcoming-btn" : "normalUpcoming-subBtn"}`}
            onClick={() => setActiveTab("bank")}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}>
            <LazyLoadImage src="/Images/Home/Auctions/bank-auction.png" className="subTab-icon"/>
            Bank
        </motion.button>
        <motion.button 
            type="button"
            className={`sub-tabBtn px-3 px-md-5 px-sm-4 py-3 shadow-sm bold-900 d-flex align-items-center 
            ${activeTab === "insurance" ? "activeUpcoming-btn" : "normalUpcoming-subBtn"}`}
            onClick={()=>setActiveTab("insurance")}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}>
            <LazyLoadImage src="/Images/Home/Auctions/insurance-auction.png" className="subTab-icon"/>
        Insurance
        </motion.button>
        <motion.button 
            type="button"
            className={`sub-tabBtn px-3 px-md-5 px-sm-4 py-2 shadow-sm
            bold-900 d-flex align-items-center
            ${activeTab === "consumer" ? "activeUpcoming-btn" : "normalUpcoming-subBtn"}`}
            onClick={()=>setActiveTab("consumer")}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}>
            <LazyLoadImage src="/Images/Home/Auctions/consumer-auction.png" className="subTab-icon"/>
            Consumer
        </motion.button>
       </div>

        {/* Dynamic Form Content*/}    
        <AnimatePresence mode="wait" initial={false}>
            {activeTab === "bank" && (
                <motion.div
                key="bank"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                >
                <BankUpcoming/>
                </motion.div>
            )}

            {activeTab === "insurance" && (
                <motion.div
                key="insurance"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                >
                <InsuranceUpcoming/>
                </motion.div>
            )}

            {activeTab === "consumer" && (
                <motion.div
                key="consumer"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                >
                <ConsumerUpcoming/>
                </motion.div>
            )}
        </AnimatePresence>

     </section>
  )
}


export default UpcomingAuctionsTab
