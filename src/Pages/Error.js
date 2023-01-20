import React from "react";

import "./Error.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-header">An error occured!</h1>
      <div className="error-message">
        <p>Could not find this page!...</p>
        <p>Please check URL (or) contact the owner.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
