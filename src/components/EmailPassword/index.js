import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  resetPasswordStart,
  resetUserState,
} from "./../../redux/User/user.actions";

import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
});

const EmailPassword = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      router.push("/login");
    }
  }, [resetPasswordSuccess]); // eslint-disable-line

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };

  const configAuthWrapper = {
    headline: "Email Password",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit">Email Password</Button>
        </form>

        <div className="links">
          <Link href="/login">LogIn</Link>
          {` | `}
          <Link href="/registration">Register</Link>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default EmailPassword;
