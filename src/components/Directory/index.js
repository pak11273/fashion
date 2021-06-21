import React from "react";
import { Link } from "react-router-dom";
import Fashion from "./../../assets/fashion1.jpg";
import Cosmetics from "./../../assets/cosmetics.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Cosmetics})`,
          }}
        >
          <Link to="/search/cosmetics">Cosmetics</Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Fashion})`,
          }}
        >
          <Link to="/search/fashion">Fashion</Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
