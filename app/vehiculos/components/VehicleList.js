"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const brands = ["Toyota", "Honda", "Ford","Lamborghini", "Land Rover", "Lexus", "Lincoln", "Chevrolet", "Nissan", "BMW", "Audi"]; // Lista de marcas para el dropdown

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  useEffect(() => {
    if (!selectedBrand) return;

    const fetchVehicles = async () => {
      try {
        const { data } = await axios.get("https://api.api-ninjas.com/v1/cars", {
          headers: {
            "X-Api-Key": "81OilG7rx+l2Rxux+Wd0JA==UfpU864H1gfxK7Mn",
          },
          params: {
            limit: 50,
            make: selectedBrand.toLowerCase(),
            year: 2020,
          },
        });

        const uniqueVehicles = [];
        const modelsSet = new Set();

        data.forEach((vehicle) => {
          const modelName = vehicle.model.toLowerCase().split(" ")[0];
          if (!modelsSet.has(modelName)) {
            uniqueVehicles.push(vehicle);
            modelsSet.add(modelName);
          }
        });

        if (uniqueVehicles.length > 0) {
          setVehicles(uniqueVehicles);
        } else {
          setError("No se encontraron vehículos.");
        }
      } catch (err) {
        setError(`Error fetching vehicle images: ${err.response?.data?.error || err.message}`);
      }
    };

    fetchVehicles();
  }, [selectedBrand]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Vehículos</h1>

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

      {error && <div style={{ textAlign: 'center', color: 'red' }}>{error}</div>}

      <div className="vehicle-grid">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <h3>{vehicle.model.toLowerCase()} {vehicle.year}</h3>
            <img
              src={vehicle.image || 'https://via.placeholder.com/300x200?text=No+Image+Available'}
              alt={`Vehículo ${index + 1}`}
              className="vehicle-image"
            />
            <p>{vehicle.make.toUpperCase()}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .vehicle-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .vehicle-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          width: 250px;
          padding: 10px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
        }

        .vehicle-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .vehicle-card h3 {
          font-size: 18px;
          margin-bottom: 10px;
          text-transform: capitalize;
        }

        .vehicle-card p {
          font-size: 14px;
          color: #555;
          font-weight: bold;
        }

        select {
          padding: 8px;
          font-size: 16px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default VehicleList;