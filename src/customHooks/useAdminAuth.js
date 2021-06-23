import { checkUserIsAdmin } from "./../Utils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAdminAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const router = useRouter();

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      router.push("/login");
    }
  }, [currentUser]); // eslint-disable-line

  return currentUser;
};

export default useAdminAuth;
