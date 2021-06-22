import Footer from "./../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const HomepageLayout = (props) => {
  return (
    <>
      <Navbar {...props} />
      {props.children}
      <Footer />
    </>
  );
};

export default HomepageLayout;
