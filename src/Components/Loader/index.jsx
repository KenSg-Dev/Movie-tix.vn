import React from "react";
import logo from "../../Assets/img/11.png";

export default function Loader() {
  return (
    <div className="loading">
      <div className="logo-loading">
        <img src={logo} alt="Tix" />
      </div>
    </div>
  );
}
