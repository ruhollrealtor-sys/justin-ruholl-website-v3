import React from "react";
import "./index.css";
import heroBg from "./hero-bg.webp"; // background image
import remLogo from "./remax-logo.png"; // your uploaded logo

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <img
        src={remLogo}
        alt="RE/MAX Key Advantage"
        style={{
          width: "300px",
          maxWidth: "80%",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Effingham Real Estate — Done Right
      </h1>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            backgroundColor: "#e60000",
            color: "white",
            padding: "12px 24px",
            margin: "0 10px",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Get Your Home Value
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "#333",
            padding: "12px 24px",
            margin: "0 10px",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          View Sold Homes
        </button>
      </div>
    </div>
  );
};

export default Hero;
