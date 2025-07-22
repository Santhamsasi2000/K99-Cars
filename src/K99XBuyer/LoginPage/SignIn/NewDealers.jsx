import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NewDealers = () => {
  return (
    <motion.div
      className="card-bg p-3 p-sm-4 rounded-2 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="primary-second-title mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        New Dealers
      </motion.h3>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Register with us now for a seamless pre-owned vehicle buying experience!
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <NavLink to="/sign-up" className="primary-btn px-4 py-2 d-inline-block">
          Create an Account
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default NewDealers;
