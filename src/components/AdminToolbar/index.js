import Link from "next/link";
import React from "react";
import { checkUserIsAdmin } from "../../Utils";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <Link href="/admin">admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminToolbar;
