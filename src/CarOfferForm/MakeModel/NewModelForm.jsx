import { useState } from "react";
import Select from "react-select";
import { dataCars } from "./DataCars"; // Keep your data separate

const NewModelForm = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);

  const [focusedField, setFocusedField] = useState("");

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
      setFocusedField("brand"); // Auto open Brand
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
      setFocusedField("model"); // Auto open Model
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
    setFocusedField("variant"); // Auto open Variant
  };

  const handleVariantChange = (option) => {
    setSelectedVariant(option);
    setFocusedField(""); // Close dropdown
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
        onMenuOpen={() => setFocusedField("year")}
        onMenuClose={() => setFocusedField("")}
        menuIsOpen={focusedField === "year" || !selectedYear}
      />

      <label className="mt-4 mb-1 fw-bold">Brand</label>
      <Select
        options={brandOptions}
        value={selectedBrand}
        onChange={handleBrandChange}
        placeholder="Select Brand"
        isDisabled={!selectedYear}
        onMenuOpen={() => setFocusedField("brand")}
        onMenuClose={() => setFocusedField("")}
        menuIsOpen={focusedField === "brand"}
      />

      <label className="mt-4 mb-1 fw-bold">Model</label>
      <Select
        options={modelOptions}
        value={selectedModel}
        onChange={handleModelChange}
        placeholder="Select Model"
        isDisabled={!selectedBrand}
        onMenuOpen={() => setFocusedField("model")}
        onMenuClose={() => setFocusedField("")}
        menuIsOpen={focusedField === "model"}
      />

      <label className="mt-4 mb-1 fw-bold">Variant</label>
      <Select
        options={variantOptions}
        value={selectedVariant}
        onChange={handleVariantChange}
        placeholder="Select Variant"
        isDisabled={!selectedModel}
        onMenuOpen={() => setFocusedField("variant")}
        onMenuClose={() => setFocusedField("")}
        menuIsOpen={focusedField === "variant"}
      />
    </div>
  );
};

export default NewModelForm;

