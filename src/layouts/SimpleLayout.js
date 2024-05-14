import React from "react";

const SimpleLayout = ({ title = "Title", className, children }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {children}
    </div>
  );
};

export default SimpleLayout;
