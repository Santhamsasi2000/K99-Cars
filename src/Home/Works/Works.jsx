import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Handle Resize
  useEffect(()=>{
    const handleResize = () => {
       setIsMobile(window.innerWidth < 768 );
    };
    handleResize(); //initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <section className="p-3 p-sm-4 p-md-5 mt-4">
        <h2 className="works-title">HOW IT WORKS</h2>
        <p className="text-center fw-semibold fs-5 mb-5">3 simple steps to sell your car anywhere in India — fast and hassle-free.</p>
        <div className="row gy-4 gy-sm-5 justify-content-center">
         {
           isMobile ? 
          <div>
            <Swiper
            modules={[Pagination]}
            pagination={{ 
              el: ".custom-pagination",
              clickable: true, }}
            spaceBetween={20}
            slidesPerView={1}
            className="d-md-none">
           {
            ThreeSteps.map(({ id, icon, title, description })=>(
             <SwiperSlide key={id}>
              <div className="card p-3 p-lg-4 d-flex flex-column align-items-center h-100 rounded-4 shadow-sm">
                  <LazyLoadImage src={icon} className="weWorks-img mb-3"/>
                  <h4 className="mb-2 steps-title">{title}</h4>
                  <p>{description}</p>
              </div>
            </SwiperSlide>
            ))
           }
            </Swiper>
            {/* Pagination dots outside the card */}
            <div className="custom-pagination text-center"></div>
            </div>
        :
          ThreeSteps.map(({ id, icon, title, description })=>(
           <div className="col-sm-6 col-md-4" key={id}>
             <div className="card p-3 p-lg-4 d-flex flex-column align-items-center h-100 rounded-4 shadow-sm">
                <LazyLoadImage src={icon} className="weWorks-img mb-4"/>
                <h4 className="steps-title mb-3">{title}</h4>
                <p>{description}</p>
             </div>
           </div>
          ))
        
         }
        </div>
       <div className="text-center mt-4 mt-md-5">
          <button className="learn-btn">LEARN MORE</button>
       </div>
    </section>
  )
}

export default Works

const ThreeSteps = [
  {
    id: 1,
    icon: "/Home/instant-online-quote.png",
    title: "NO-HAGGLE, INSTANT ONLINE QUOTE",
    description: "Enter your car details (Maruti, Hyundai, Tata, etc.) and get a best-price quote in seconds — no account needed!",
  },
  {
    id: 2,
    icon: "/Home/vehicle-inspection-home.png",
    title: "FREE DOORSTEP CAR INSPECTION",
    description: "Choose a convenient time. Our expert will inspect your car at your home — 100% free, no pressure.",
  },
  {
    id: 3,
    icon: "/Home/pick-up-amout-credited.png",
    title: "INSTANT PAYMENT, SAME DAY PICKUP",
    description: "Once you accept the offer, get paid instantly via UPI or bank transfer. We’ll handle the paperwork and pick up your car the same day.",
  },
];
