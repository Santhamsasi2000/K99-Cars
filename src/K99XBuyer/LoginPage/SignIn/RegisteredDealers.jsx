import { motion, AnimatePresence} from "framer-motion"
import OtpLogin from "./OtpLogin"
import PasswordLogin from "./PasswordLogin"
import { useState } from "react";

const RegisteredDealers = () => {
    const [activeTab, setActiveTab] = useState("otp");

    // Animation variant for form transition
    const formVariants = {
        initial: { opacity:0, y:30 },
        animate: { opacity:1, y:0 },
        exit: { opacity: 0, y: -30 },
    };

  return (
     <div className="card-bg p-3 p-sm-4 p-lg-3 rounded-2 shadow-sm">
        {/* Title */}
        <motion.h3 className="primary-second-title mb-3"
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4}}>
            Registered Dealers
        </motion.h3>

        {/* SubText */}
        <motion.p 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2 }}>
            If you are a registered dealer, sign in with your Mobile number or Password.
        </motion.p>

        {/* Tab Button */}
        <div className="d-flex my-3">
            <motion.button 
              type="button"
               className={`px-3 px-md-5 px-sm-4 py-2 rounded-start-2 rounded-end-0 ${
                activeTab === "otp" ? "activeTab-btn" : "normalTab-btn"}`}
                onClick={() => setActiveTab("otp")}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}>
                Login Using OTP
            </motion.button>
            <motion.button 
             type="button"
             className={`px-3 px-md-5 px-sm-4 py-2 rounded-start-0 rounded-end-2 
             ${activeTab === "password" ? "activeTab-btn" : "normalTab-btn"}`}
             onClick={()=>setActiveTab("password")}
             whileTap={{ scale: 0.95 }}
             whileHover={{ scale: 1.02 }}>
            Login Using Password</motion.button>
        </div>

        {/* Dynamic Form Content*/}
        <AnimatePresence mode="wait" initial={false}>
            {
                activeTab === "otp" ? 
                <motion.div
                 key="otp"
                 variants={formVariants}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 transition={{ duration:0.3 }}>
                  <OtpLogin/>
                </motion.div>
                : 
                <motion.div
                key="password"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}>
                  <PasswordLogin/> 
                </motion.div>

            }
        </AnimatePresence>
     </div>
  )
}

export default RegisteredDealers
