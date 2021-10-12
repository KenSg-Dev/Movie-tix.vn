import React from "react";

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="text">
        <h1>404</h1>
        <h4>Oops! Page not found</h4>
        <button className="btn">
          <Link to="/">Về trang chủ</Link>
        </button>
      </div>
    </div>
  );
}
