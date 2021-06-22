import Cosmetics from "./../../assets/cosmetics.jpg";
import Fashion from "./../../assets/fashion1.jpg";
import Link from "next/link";
import React from "react";

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
          <Link href="/cosmetics">Cosmetics</Link>
        </div>
        {/* <div
          className="item"
          style={{
            backgroundImage: `url(${Fashion})`,
          }}
        >
          <Link to="/search/fashion">Fashion</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Directory;
