// import { useLocation } from "react-router-dom";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import Logo from "./../../assets/logo.png";
import { selectCartItemsCount } from "./../../redux/Cart/cart.selectors";
import { signOutUserStart } from "./../../redux/User/user.actions";
import styles from "../../styles/Header.module.scss";

const mapState = (state) => ({
  // currentUser: state.user.currentUser,
  // totalNumCartItems: selectCartItemsCount(state),
});

const Header = (props) => {
  // const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  // const dispatch = useDispatch();
  // const { currentUser, totalNumCartItems } = useSelector(mapState);

  // const signOut = () => {
  //   dispatch(signOutUserStart());
  // };

  // useEffect(() => {
  //   setActiveMenu(false);
  // }, [location]);

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          {/* <Link href="/">
             <img src={Logo} alt="Woo LOGO" /> 
            <h1
              style={{
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              Woo
            </h1>
          </Link> */}
        </div>

        <nav className={`mainMenu ${activeMenu ? "active" : ""}`}>
          <ul>
            <li>{/* <Link from="/">Home</Link> */}</li>
            <li>{/* <Link from="/search">Search</Link> */}</li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            <li>
              <Link href="/cart">
                {/* Your Cart ({totalNumCartItems}) */}
                <i class="fas fa-shopping-basket"></i>
              </Link>
            </li>
            {/* {currentUser && [
              <li key={1}>
                <Link to="/dashboard">
                  My Account
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>
                  LogOut
                  <i class="fas fa-sign-out-alt"></i>
                </span>
              </li>,
            ]} */}
            {/* {!currentUser && [
              // <li key={1} className="hideOnMobile">
              //   <Link href="/registration">Register</Link>
              // </li>,
              <li key={2}>
                {/* <Link href="/login">
                  Login
                  <i class="fas fa-user-circle"></i>
                </Link> */}
            {/* </li>, */}
            {/* ]} */} */}
            <li className="mobileMenu">
              <span onClick={() => setActiveMenu(!activeMenu)}>
                <i className="fas fa-bars"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  // currentUser: null,
};

export default Header;
