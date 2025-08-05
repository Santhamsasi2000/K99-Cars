import { useState, useEffect } from "react";
import Select from "react-select";
import { dataCars } from "./DataCars";
import "./MakeModel.css";

const NewModel = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

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
      setOpenDropdown("brand");
      
      // Mobile-specific focus handling
      if (isMobile) {
        setTimeout(() => {
          document.querySelector("#brand-select .select-dropdown__control")?.click();
        }, 100);
      }
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
      setOpenDropdown("model");
      
      if (isMobile) {
        setTimeout(() => {
          document.querySelector("#model-select .select-dropdown__control")?.click();
        }, 100);
      }
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
    setOpenDropdown("variant");
    
    if (isMobile) {
      setTimeout(() => {
        document.querySelector("#variant-select .select-dropdown__control")?.click();
      }, 100);
    }
  };

  const handleVariantChange = (option) => {
    setSelectedVariant(option);
    setOpenDropdown(null);
  };

  const yearOptions = Object.keys(dataCars).map((year) => ({
    value: year,
    label: year,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: "8px 12px",
      borderRadius: "4px",
      minHeight: isMobile ? "48px" : "38px",
    }),
    option: (provided) => ({
      ...provided,
      padding: "10px 12px",
    }),
    singleValue: (provided) => ({
      ...provided,
      padding: "4px",
    }),
    input: (provided) => ({
      ...provided,
      padding: "4px 0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    menu: (provided) => ({
      ...provided,
      position: isMobile ? "fixed" : "absolute",
      width: isMobile ? "90%" : "100%",
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
        menuPortalTarget={isMobile ? document.body : undefined}
        menuPosition={isMobile ? "fixed" : "absolute"}
        captureMenuScroll={false}
        closeMenuOnScroll={!isMobile}
      />

      <Select
        id="brand-select"
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
        menuPortalTarget={isMobile ? document.body : undefined}
        menuPosition={isMobile ? "fixed" : "absolute"}
        captureMenuScroll={false}
        closeMenuOnScroll={!isMobile}
      />

      <Select
        id="model-select"
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
        menuPortalTarget={isMobile ? document.body : undefined}
        menuPosition={isMobile ? "fixed" : "absolute"}
        captureMenuScroll={false}
        closeMenuOnScroll={!isMobile}
      />

      <Select
        id="variant-select"
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
        menuPortalTarget={isMobile ? document.body : undefined}
        menuPosition={isMobile ? "fixed" : "absolute"}
        captureMenuScroll={false}
        closeMenuOnScroll={!isMobile}
      />
    </div>
  );
};

export default NewModel;