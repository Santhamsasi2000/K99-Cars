import { useState } from "react";
import Select from "react-select";
import { dataCars } from "./DataCars";

const CloseDropdown = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);

  // Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null); // 'year', 'brand', 'model', 'variant'

  const handleYearChange = (option) => {
    setSelectedYear(option);
    setSelectedBrand(null);
    setSelectedModel(null);
    setSelectedVariant(null);
    setModelOptions([]);
    setVariantOptions([]);

    if (dataCars[option.value]) {
      const brands = Object.keys(dataCars[option.value]).map((brand) => ({
        value: brand,
        label: brand,
      }));
      setBrandOptions(brands);
      // Close Year, open Brand
      setOpenDropdown("brand");
    }
  };

  const handleBrandChange = (option) => {
    setSelectedBrand(option);
    setSelectedModel(null);
    setSelectedVariant(null);
    setVariantOptions([]);

    if (dataCars[selectedYear.value][option.value]) {
      const models = Object.keys(
        dataCars[selectedYear.value][option.value]
      ).map((model) => ({
        value: model,
        label: model,
      }));
      setModelOptions(models);
      // Close Brand, open Model
      setOpenDropdown("model");
    }
  };

  const handleModelChange = (option) => {
    setSelectedModel(option);
    setSelectedVariant(null);

    const variants =
      dataCars[selectedYear.value][selectedBrand.value][option.value];

    const variantOptions = variants.map((variant) => ({
      value: variant,
      label: variant,
    }));
    setVariantOptions(variantOptions);
    // Close Model, open Variant
    setOpenDropdown("variant");
  };

  const handleVariantChange = (option) => {
    setSelectedVariant(option);
    setOpenDropdown(null); // Close all dropdowns
  };

  const yearOptions = Object.keys(dataCars).map((year) => ({
    value: year,
    label: year,
  }));

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <label className="mb-1 fw-bold">Year</label>
      <Select
        options={yearOptions}
        value={selectedYear}
        onChange={handleYearChange}
        placeholder="Select Year"
        onMenuOpen={() => setOpenDropdown("year")}
        onMenuClose={() => {
          if (openDropdown === "year") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "year"}
      />

      <label className="mt-4 mb-1 fw-bold">Brand</label>
      <Select
        options={brandOptions}
        value={selectedBrand}
        onChange={handleBrandChange}
        placeholder="Select Brand"
        isDisabled={!selectedYear}
        onMenuOpen={() => setOpenDropdown("brand")}
        onMenuClose={() => {
          if (openDropdown === "brand") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "brand"}
      />

      <label className="mt-4 mb-1 fw-bold">Model</label>
      <Select
        options={modelOptions}
        value={selectedModel}
        onChange={handleModelChange}
        placeholder="Select Model"
        isDisabled={!selectedBrand}
        onMenuOpen={() => setOpenDropdown("model")}
        onMenuClose={() => {
          if (openDropdown === "model") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "model"}
      />

      <label className="mt-4 mb-1 fw-bold">Variant</label>
      <Select
        options={variantOptions}
        value={selectedVariant}
        onChange={handleVariantChange}
        placeholder="Select Variant"
        isDisabled={!selectedModel}
        onMenuOpen={() => setOpenDropdown("variant")}
        onMenuClose={() => {
          if (openDropdown === "variant") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "variant"}
      />
    </div>
  );
};

export default CloseDropdown;