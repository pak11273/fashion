import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, firebase } from "../firebase/utils";

import nookies from "nookies";

const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.nookies = nookies;
  //   }
  //   return auth.onIdTokenChanged(async (user) => {
  //     console.log(`token changed!`);
  //     console.log("user: ", user);
  //     if (!user) {
  //       console.log(`no token found...`);
  //       setUser(null);
  //       nookies.destroy(null, "token");
  //       nookies.set(null, "token", "", { path: "/" });
  //       return;
  //     }

  //     console.log(`updating token...`);
  //     const token = await user.getIdToken();
  //     setUser(user);
  //     nookies.destroy(null, "token");
  //     nookies.set(null, "token", token, { path: "/" });
  //   });
  // }, []); // eslint-disable-line

  // // force refresh the token every 10 minutes
  // useEffect(() => {
  //   const handle = setInterval(async () => {
  //     console.log(`refreshing token...`);
  //     const user = auth.currentUser;
  //     if (user) await user.getIdToken(true);
  //   }, 10 * 60 * 1000);
  //   return () => clearInterval(handle);
  // }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
