import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionNavLink = motion(NavLink);
const NewDealers = () => {
  return (
    <motion.div
      className="green-bg-50 p-3 p-sm-4 rounded-4 shadow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="green-color fs-5 fw-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        New Dealers
      </motion.h3>

      <motion.p
        className="mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Register with us now for a seamless pre-owned vehicle buying experience!
      </motion.p>

        <MotionNavLink to="/sign-up" 
          className="green-darkBg text-white text-decoration-none 
          px-4 py-2 d-inline-block rounded-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Create an Account
        </MotionNavLink>
    </motion.div>
  );
};

export default NewDealers;
