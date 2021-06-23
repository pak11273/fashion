import Footer from "./../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";
import React from "react";
import VerticalNav from "./../components/VerticalNav";
import { signOutUserStart } from "./../redux/User/user.actions";
import { useDispatch } from "react-redux";

const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <Navbar {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link href="/admin">Home</Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
