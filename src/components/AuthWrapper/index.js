import React from "react";

const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="authWrapper">
      {headline && <h2>{headline}</h2>}

      <div className="children">{children && children}</div>
    </div>
  );
};

export default AuthWrapper;
