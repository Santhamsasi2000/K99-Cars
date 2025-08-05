import { IoMdNotifications } from "react-icons/io"
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
const Notifications = () => {
  return (
    <div className="overflow-hidden shadow rounded-3">
        {/* Title */}
        <h5 className="navbar-bg secondary-color py-2 px-3 fw-bold mb-0 d-flex align-items-center fs-5">
            <IoMdNotifications className="fs-4 me-1"/>
            Notifications
        </h5>
        {/* COntent */}
        <div className="p-3">
        {
            notifications.map(({ id, icon: Icon, content}) => (
                <div key={id} className="py-2 px-3 rounded-2 mb-3" style={{backgroundColor: "#dcfce7"}}>
                <p className="mb-0 small d-flex align-items-center gap-2"><Icon className="secondary-color"/>{content}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Notifications

const notifications = [
    {
        id: 1,
        icon: FaExclamationTriangle,
        content: "Payment required for recent auction win",
        borderColor: "border-warning",
        bgColor: "bg-warning bg-opacity-25",
    },
    {
        id: 2,
        icon: FaInfoCircle,
        content: "New vehicles matching your preferences",
        borderColor: "border-info ",
        bgColor: "bg-info bg-opacity-25",
    },
];
