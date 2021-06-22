import Directory from "../components/Directory";
import React from "react";
// import "./styles.scss";
import styles from "../styles/Home.module.scss";

const Homepage = (props) => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};

export default Homepage;
