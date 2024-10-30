"use client";
import React from "react";

const BrandDropdown = ({ selectedBrand, setSelectedBrand }) => {
  const brands = ["Toyota", "Honda", "Ford","Lamborghini", "Land Rover", "Lexus", "Lincoln", "Chevrolet", "Nissan", "BMW", "Audi"];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <select value={selectedBrand} onChange={handleBrandChange}>
        <option value="">Selecciona una marca</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandDropdown;