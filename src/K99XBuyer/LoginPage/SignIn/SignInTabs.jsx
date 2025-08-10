// import { useState } from "react"
// import OtpLogin from "./OtpLogin";
// import PasswordLogin from "./PasswordLogin";
// import { motion, AnimatePresence } from "framer-motion";

// const SignInTabs = () => {
//   const [activeTab, setActiveTab] = useState("otp");

//   return (
//     <motion.section className="d-flex flex-column align-items-center mb-5"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut"}}>
//        <motion.h2 className="primary-title mb-4"
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}>
//         Sign in to your account</motion.h2>
//        <motion.div className="p-4 p-sm-5 shadow rounded-2 card-bg" 
//        style={{ maxWidth: "600px"}}
//        >
//         <div className="d-flex justify-content-center mb-3">
//           <button className={`px-3 px-md-5 px-sm-4 py-2 rounded-start-2 rounded-end-0  ${activeTab === "otp" ? "activeTab-btn" : "normalTab-btn"}`}
//           onClick={()=>setActiveTab("otp")}>Login Using OTP</button>
//           <button className={`px-3 px-md-5 px-sm-4 py-2 rounded-start-0 rounded-end-2  ${activeTab === "password" ? "activeTab-btn" : "normalTab-btn"}`}
//           onClick={()=>setActiveTab("password")}>Login Using Password</button>
//         </div>
//         <div className="">
//             {
//                 activeTab === "otp" ? <OtpLogin/>: <PasswordLogin/> 
//             }
//         </div>
//        </motion.div>
//     </motion.section>
//   )
// }

// export default SignInTabs

import { motion } from "framer-motion";
import NewDealers from "./NewDealers";
import RegisteredDealers from "./RegisteredDealers";

const SignInTabs = () => {

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y:0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariant}
    >

        {/* title */}
       <motion.h2 className="blue-color title mb-4 mb-lg-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
       >
        Dealer Login</motion.h2>

        {/* grid */}
        <div className="row gy-5 align-items-center align-items-lg-start">
         <motion.div className="col-md-9 col-lg-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}>
            <RegisteredDealers/>
         </motion.div>

         {/* New Dealers */}
         <motion.div className="col-md-9 col-lg-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
            <NewDealers/>
         </motion.div>
        </div>
    </motion.section>
  )
}

export default SignInTabs
