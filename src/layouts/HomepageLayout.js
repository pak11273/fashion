import Footer from "./../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Navbar {...props} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomepageLayout;
