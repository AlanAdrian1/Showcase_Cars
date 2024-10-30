"use client";
import React, { useState } from 'react';

import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Application</h1>
      <Link href="/login">
        <button>Login / Sign Up</button>
      </Link>

      <style jsx>{`
        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default HomePage;