import React, { useEffect, useState } from "react";
import {
  emailSignInStart,
  googleSignInStart,
} from "./../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";

import AuthWrapper from "./../AuthWrapper";
import Button from "./../forms/Button";
import FormInput from "./../forms/FormInput";
import Link from "next/link";
import { firebase } from "../../firebase/init";
import { useRouter } from "next/router";

import {
  GoogleProvider,
  getCurrentUser,
  handleUserProfile,
} from "../../firebase/utils";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      router.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = async () => {
    dispatch(googleSignInStart());
  };

  const configAuthWrapper = {
    headline: "LogIn",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">LogIn</Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>

          <div className="links">
            <Link href="/registration">Register</Link>
            {` | `}
            <Link href="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
