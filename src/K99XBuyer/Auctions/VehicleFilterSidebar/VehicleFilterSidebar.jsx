const VehicleFilterSidebar = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5">
      <div className="col-2">
        {/* City */}
        <div className="mb-3">
          <label className="mb-2 fw-bold">City</label>
          <select className="form-select">
                <option selected>Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        {/* Year */}
        <div className="row">
          <div className="col-6 mb-3">
            <label className="mb-2 fw-bold">Minimum Year</label>
            <select className="form-select">
                <option selected>2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
            </select>
          </div>
          <div className="col-6 mb-3">
            <label className="mb-2 fw-bold">Maximum Year</label>
            <select className="form-select">
                <option selected>2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
          </div>
        </div>
        {/* Make */}
      </div>
    </section>
  )
}

export default VehicleFilterSidebar
