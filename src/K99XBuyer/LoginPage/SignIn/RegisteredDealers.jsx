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
     <div className="green-bg-50 p-3 p-sm-4 p-lg-4 rounded-4 shadow">
        {/* Title */}
        <motion.h3 className="green-color fs-5 fw-bold mb-3"
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
        <div className="d-flex my-3 my-sm-4">
            <motion.button 
              type="button"
               className={`px-4 py-2 rounded-start-3 rounded-end-0 shadow
                ${activeTab === "otp" ? "blue-darkBg text-white border-0" : "normalTab-signIn border blue-lightBg blue-color"}`}
                onClick={() => setActiveTab("otp")}
                >
                OTP Login
            </motion.button>
            <motion.button 
             type="button"
             className={`px-4 py-2 rounded-start-0 rounded-end-3 shadow
             ${activeTab === "password" ? "blue-darkBg text-white border-0" : "normalTab-signIn border blue-lightBg blue-color"}`}
             onClick={()=>setActiveTab("password")}>
            Password Login</motion.button>
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
