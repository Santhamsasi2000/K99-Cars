import { FaCalendarAlt, FaCar, FaClock, FaGavel, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const title = "Consumer-to-Consumer Upcoming Auctions";
const subtitle = "Bid on cars directly from verified individual sellers";

// Card - ANimation
 const cardVariant = {
      hidden: {
        opacity: 0,
        y: 30
      },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
          ease: "easeOut",
        },
      }),
  };
const ConsumerUpcoming = () => {
  return (
    <section className="m-3 m-sm-4 m-md-5 shadow p-4 p-md-5 main-auctionCard green-bg-50">
      <h4 className="fw-bold fs-4 d-flex align-items-center">
        <LazyLoadImage src="/Images/Home/Auctions/upcoming-auction.png" className="mainTab-icon"/>
        {title}
      </h4>
      <p className="text-secondary">{subtitle}</p>
      <div>
         {
            upcomingData.map(( {id, event, location, startTime,  closingTime, noOfVehicles, action }, i ) => (
                <motion.div key={id} className="sub-auctionCard bg-white shadow rounded-4 rounded-sm-5 border mb-4 px-2 px-sm-4 py-4 row justify-content-center"
                    custom={i}
                    initial= "hidden"
                    whileInView="visible"
                    variants={cardVariant}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ scale: 1.01}}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="d-none col-md-5 col-xl-4  d-md-flex flex-column">
                      <span className="blue-color bold-900 text-uppercase">Event</span>
                      <span className="">{event}</span>
                    </div>
                    <div className="d-md-none d-flex justify-content-center">
                      <p><span className="blue-color bold-900 text-uppercase me-2">Event   :</span>{event}</p>
                    </div>
                    <div className="col-sm-6 col-md-3 d-flex flex-column">
                      <p className="d-flex align-items-center gap-1">
                        <FaMapMarkerAlt className="blue-color fs-5"/>{location}
                      </p>
                       <p className="d-flex align-items-center gap-2">
                        <FaCar className="blue-color fs-5"/> {noOfVehicles} Available
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 d-flex flex-column align-items-sm-center">
                      <p className="d-flex align-items-center gap-2 gap-xl-1"> 
                        <FaCalendarAlt className="blue-color" />{startTime}
                      </p>
                      <p className="d-flex align-items-center gap-2 gap-xl-1">
                        <FaClock className="blue-color" />{closingTime}
                      </p>
                    </div>
                    <div className="col-xl-2  d-xl-block d-flex justify-content-center">
                        <motion.button className="blue-bg text-white border-0 rounded-4 d-flex align-items-center gap-2 px-5 py-2 px-xl-3 py-xl-2 mt-3 mt-xl-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                        <FaGavel className=""/> {action} 
                        </motion.button>
                    </div>
                </motion.div>
            ))
         }
      </div>
    </section>
  )
}

export default ConsumerUpcoming

const upcomingData = [
  {
    id: 3,
    event: "Nissan Renault Fin-Chhattisgarh-4W",
    location: "Chhattisgarh",
    startTime: "01-Aug-2025 16:00",
    closingTime: "05-Aug-2025 17:50",
    noOfVehicles: 1,
    action: "Bid Now"
  },
  {
    id: 4,
    event: "Nissan Renault Fin-Jharkhand-4W",
    location: "Jharkhand",
    startTime: "23-Aug-2025 16:00",
    closingTime: "27-Aug-2025 17:50",
    noOfVehicles: 4,
    action: "Bid Now"
  },
];
