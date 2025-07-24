import { FaFilter } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { MdOutlineClear } from "react-icons/md"

const FilterAuction = () => {
  return (
    <section className="shadow rounded-2 overflow-hidden">
        <p className="navbar-bg secondary-color fs-5 fw-bold mb-0 d-flex align-items-center gap-2 py-2 px-3">
            <FaFilter className="fs-4"/>
            <span>Filters</span>
        </p>
        <div className="p-3 card-bg">
            <div className="row gy-4 mb-4">
                {/* State */}
                <div className="col-sm-6 col-lg-3">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state">
                    <option selected>All States</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                {/* Category */}
                <div className="col-sm-6 col-lg-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-select" id="category">
                    <option selected>All Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                {/*Make */}
                <div className="col-sm-6 col-lg-3">
                <label htmlFor="make" className="form-label">Make</label>
                <select className="form-select" id="make">
                    <option selected>All Makes</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                {/* Status */}
                <div className="col-sm-6 col-lg-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select" id="status">
                    <option selected>All Auctions</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
            </div>
            <h6 className="mb-3">Price Range</h6>
            <div className="row gy-4">
                {/* Min Price */}
                <div className="col-sm-6 col-lg-3">
                    <input type="text" class="form-control" placeholder="Min Price"/>
                </div>
                {/* Max Price */}
                <div className="col-sm-6 col-lg-3">
                    <input type="text" class="form-control" placeholder="Max Price"/>
                </div>
                {/* Buttons - Filter and Clear*/}
                <div className="col-lg-6">
                    <button className="primary-btn py-2 px-4 px-sm-5 d-inline-flex align-items-center gap-1 me-3"><IoSearch />Apply Filters</button>
                    <button className="secondary-outline-btn  py-2 px-4 px-sm-5 d-inline-flex align-items-center gap-1"><MdOutlineClear />Clear</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FilterAuction
