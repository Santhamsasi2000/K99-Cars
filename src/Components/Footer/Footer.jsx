import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="footer-bg text-white p-3 text-center bold-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}>
      Copyright © 2025 Kars99 Private Limited. All Rights Reserved.
    </motion.footer>
  )
}

export default Footer
