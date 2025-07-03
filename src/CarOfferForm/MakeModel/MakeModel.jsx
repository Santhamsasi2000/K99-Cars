import { useState } from "react";
import { dataCars } from "./DataCars";
import "./MakeModel.css";

const MakeModel = () => {
  // Selected values
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");

  // Lists to populate options
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);

  // Handle Year Change
  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setSelectedBrand("");      // Reset brand
    setSelectedModel("");      // Reset model
    setSelectedVariant("");    // Reset variant
    setVariants([]);
    setModels([]);

    // Populate brand options
    if (dataCars[year]) {
      setBrands(Object.keys(dataCars[year]));
    } else {
      setBrands([]);
    }
  };

  // Handle Brand Change
  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setSelectedModel("");     // Reset model
    setSelectedVariant("");   // Reset variant
    setVariants([]);

    // Populate model options
    if (dataCars[selectedYear] && dataCars[selectedYear][brand]) {
      setModels(Object.keys(dataCars[selectedYear][brand]));
    } else {
      setModels([]);
    }
  };

  // Handle Model Change
  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    setSelectedVariant("");   // Reset variant

    if (
      dataCars[selectedYear] &&
      dataCars[selectedYear][selectedBrand] &&
      dataCars[selectedYear][selectedBrand][model]
    ) {
      setVariants(dataCars[selectedYear][selectedBrand][model]);
    } else {
      setVariants([]);
    }
  };

  // Handle Variant Change
  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.value);
  };

  return (
    <div className="p-4">
      {/* ======= YEAR SELECT ========= */}
      <select
        className="form-select mb-3"
        onChange={handleYearChange}
        value={selectedYear}  // Bound to state
      >
        <option value="">Year</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>

      {/* ======= BRAND SELECT ========= */}
      <select
        className="form-select mb-3"
        onChange={handleBrandChange}
        disabled={!brands.length}
        value={selectedBrand}  // Bound to state
      >
        <option value="">Brand</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {/* ======= MODEL SELECT ========= */}
      <select
        className="form-select mb-3"
        onChange={handleModelChange}
        disabled={!models.length}
        value={selectedModel}  // Bound to state
      >
        <option value="">Model</option>
        {models.map((model, index) => (
          <option key={index} value={model}>
            {model}
          </option>
        ))}
      </select>

      {/* ======= VARIANT SELECT ========= */}
      <select
        className="form-select mb-3"
        onChange={handleVariantChange}
        disabled={!variants.length}
        value={selectedVariant}  // Bound to state
      >
        <option value="">Variant</option>
        {variants.map((variant, index) => (
          <option key={index} value={variant}>
            {variant}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MakeModel;
