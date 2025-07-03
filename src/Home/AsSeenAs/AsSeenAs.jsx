import { LazyLoadImage } from "react-lazy-load-image-component"
import "./AsSeenOn.css";

const AsSeenAs = () => {
  return (
   <section className="asseenon-section p-3 p-sm-4 p-md-5">
    <p className="text-center fw-bold d-block d-md-none mb-4">As seen on:</p>
    <div className="asseenon-scroll">
        <p className="fw-bold fs-5 mb-3 asseenon-label d-none d-md-inline-block">As seen on:</p>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/ndtv.webp" effect="blur" threshold={200}/>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/india-today.png" effect="blur" threshold={200}/>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/Times-of-India.png" effect="blur" threshold={200}/>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/Hindustan_Times_logo.png" effect="blur" threshold={200}/>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/the-hindu.png" effect="blur" threshold={200}/>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/zee-news.png" effect="blur" threshold={200}/>
        <LazyLoadImage className="asseenon-img" src="/Home/news channel/news-18.png" effect="blur" threshold={200}/>
    </div>
</section>

  )
}

export default AsSeenAs
