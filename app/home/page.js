"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  const user = "User";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Welcome to the Application</h2>
      <p>Good Morning, {user}! We hope you enjoy your time here.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "40px 0" }}>
        <Link href="/vehiculos">
          <button style={buttonStyle}>Go to Vehículos</button>
        </Link>
        <Link href="/clima">
          <button style={buttonStyle}>Go to Clima</button>
        </Link>
        <Link href="/concesionarios">
          <button style={buttonStyle}>Go to Concesionarios</button>
        </Link>
      </div>

      <style jsx>{`
        h2 {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

const buttonStyle = {
  padding: "30px", 
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  width: "150px", 
  height: "150px", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px", 
  borderRadius: "10px", 
  cursor: "pointer",
  textAlign: "center",
};

export default Home;
