import { useState } from "react";
import Select from "react-select";
import { dataCars } from "./DataCars";

const NewModel = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);

  // Individual open states for each dropdown
  const [yearOpen, setYearOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [variantOpen, setVariantOpen] = useState(false);

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
      // Close year dropdown and open brand
      setYearOpen(false);
      setBrandOpen(true);
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
      // Close brand dropdown and open model
      setBrandOpen(false);
      setModelOpen(true);
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
    // Close model dropdown and open variant
    setModelOpen(false);
    setVariantOpen(true);
  };

  const handleVariantChange = (option) => {
    setSelectedVariant(option);
    setVariantOpen(false);
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
        onMenuOpen={() => setYearOpen(true)}
        onMenuClose={() => setYearOpen(false)}
        menuIsOpen={yearOpen}
      />

      <label className="mt-4 mb-1 fw-bold">Brand</label>
      <Select
        options={brandOptions}
        value={selectedBrand}
        onChange={handleBrandChange}
        placeholder="Select Brand"
        isDisabled={!selectedYear}
        onMenuOpen={() => setBrandOpen(true)}
        onMenuClose={() => setBrandOpen(false)}
        menuIsOpen={brandOpen}
      />

      <label className="mt-4 mb-1 fw-bold">Model</label>
      <Select
        options={modelOptions}
        value={selectedModel}
        onChange={handleModelChange}
        placeholder="Select Model"
        isDisabled={!selectedBrand}
        onMenuOpen={() => setModelOpen(true)}
        onMenuClose={() => setModelOpen(false)}
        menuIsOpen={modelOpen}
      />

      <label className="mt-4 mb-1 fw-bold">Variant</label>
      <Select
        options={variantOptions}
        value={selectedVariant}
        onChange={handleVariantChange}
        placeholder="Select Variant"
        isDisabled={!selectedModel}
        onMenuOpen={() => setVariantOpen(true)}
        onMenuClose={() => setVariantOpen(false)}
        menuIsOpen={variantOpen}
      />
    </div>
  );
};

export default NewModel;