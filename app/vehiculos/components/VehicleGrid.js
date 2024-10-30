import React from "react";

const VehicleGrid = ({ vehicles }) => {
  return (
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
  );
};

export default VehicleGrid;