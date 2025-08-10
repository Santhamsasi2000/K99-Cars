import { MdOutlineAccessTimeFilled } from "react-icons/md"
import { FaArrowRight } from "react-icons/fa"
const EndingSoon = () => {
  return (
    <div className="mb-5 overflow-hidden shadow rounded-3">
      <p className="green-bg-200 skyBlue-700 py-2 px-3 fw-bold fs-5 mb-0 d-flex align-items-center">
        <MdOutlineAccessTimeFilled className="fs-4 me-1"/>
        Ending Soon
      </p>
      <div className="p-3 green-bg-50">
        {/* Red Color */}
        {
        endingSoon.map(({ id, car, price, timeleft, barPercentage })=>(
        <div className="mb-4" key={id}>
            <p className="green-color fw-bold text-start mb-1">{car}</p>
            <div className="d-flex justify-content-between">
                <p className="text-secondary mb-0">{price}</p>
                <p className="mb-0 skyBlue-700">{timeleft}</p>
            </div>
            <div className="progress mt-1" style={{ height: '5px' }}>
                <div
                className="progress-bar sky-bg-600"
                role="progressbar"
                style={{ width: barPercentage}} // adjust percentage based on time
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                ></div>
            </div>
        </div>
        ))
        }
        {/* Button */}
        <div className="d-flex justify-content-center mt-4">
            <button className="green-darkBg border-0 rounded-4 text-white fw-bold px-4 py-2 d-flex align-items-center gap-2">View All <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default EndingSoon

const endingSoon = [
    {
        id: 1,
        car: "2020 BMW X5",
        price: "Current: $35,200",
        timeleft: "2h 15m left",
        barPercentage: "80%",
    },
    {
        id: 2,
        car: "2019 Audi A6",
        price: "Current: $28,900",
        timeleft: "4h 32m left",
        barPercentage: "60%",
    },
];