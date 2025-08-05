import { useState } from "react";
import Select from "react-select";
import { dataCars } from "./DataCars";
import "./MakeModel.css";

const MakeModel = () => {
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

  const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: '8px 12px',      // Inner padding for the main container
    borderRadius: '4px',      // Optional: Rounded corners
  }),
  option: (provided) => ({
    ...provided,
    padding: '10px 12px',     // Padding for dropdown items
  }),
  singleValue: (provided) => ({
    ...provided,
    padding: '4px',           // Padding for the selected value
  }),
  input: (provided) => ({
    ...provided,
    padding: '4px 0',         // Padding for the typing input
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none', // Hides the separator
  }),
   };

  return (
    <div className="p-4">
      <Select
        className="select-dropdown"
        styles={customStyles}
        options={yearOptions}
        value={selectedYear}
        onChange={handleYearChange}
        placeholder="Year"
        onMenuOpen={() => setOpenDropdown("year")}
        onMenuClose={() => {
          if (openDropdown === "year") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "year"}
      />

      <Select
        className="select-dropdown"
        styles={customStyles}
        options={brandOptions}
        value={selectedBrand}
        onChange={handleBrandChange}
        placeholder="Brand"
        isDisabled={!selectedYear}
        onMenuOpen={() => setOpenDropdown("brand")}
        onMenuClose={() => {
          if (openDropdown === "brand") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "brand"}
      />

      <Select
        className="select-dropdown"
        styles={customStyles}
        options={modelOptions}
        value={selectedModel}
        onChange={handleModelChange}
        placeholder="Model"
        isDisabled={!selectedBrand}
        onMenuOpen={() => setOpenDropdown("model")}
        onMenuClose={() => {
          if (openDropdown === "model") setOpenDropdown(null);
        }}
        menuIsOpen={openDropdown === "model"}
      />

      <Select
        className="select-dropdown"
        styles={customStyles}
        options={variantOptions}
        value={selectedVariant}
        onChange={handleVariantChange}
        placeholder="Variant"
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

export default MakeModel;