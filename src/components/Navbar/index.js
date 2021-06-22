import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
// import { useLocation } from "react-router-dom";
import Link from "next/link";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";
import { signOutUserStart } from "../../redux/User/user.actions";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

const Navbar = (props) => {
  // const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  // useEffect(() => {
  //   setActiveMenu(false);
  // }, [location]);

  return (
    <header className="header">
      <Head>
        <title>Woo Style</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="wrap">
        <div className="logo">
          <Link href="/">
            <h1
              style={{
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              Woo
            </h1>
          </Link>
        </div>

        <nav className={`mainMenu ${activeMenu ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            <li>
              <Link href="/cart">
                {/* Your Cart ({totalNumCartItems}) */}
                <i className="fas fa-shopping-basket"></i>
              </Link>
            </li>
            {currentUser && [
              <li key={1}>
                <Link to="/dashboard">
                  My Account
                  <i className="fas fa-user-circle"></i>
                </Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>
                  LogOut
                  <i className="fas fa-sign-out-alt"></i>
                </span>
              </li>,
            ]}
            {!currentUser && [
              <li key={1} className="hideOnMobile">
                <Link href="/registration">Register</Link>
              </li>,
              <li key={2}>
                <Link href="/login">Login</Link>
              </li>,
            ]}
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

Navbar.defaultProps = {
  // currentUser: null,
};

export default Navbar;
