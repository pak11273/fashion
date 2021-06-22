import Footer from "./../components/Footer";
import Header from "./../components/Header";
import React from "react";

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default HomepageLayout;
