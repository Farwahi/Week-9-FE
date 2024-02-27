import { useState, useEffect } from "react";

import LogOrSign from "./components/logOrSign/LogOrSign";

import "./App.css";
import { getTokenFromCookie, writeCookie } from "./common";
import { authCheck } from "./utils/fetch";

function App() {
  const [user, setUser] = useState({});

//1. create new state call allUsers
//2. in useEffect in App.jsx fetch all users(google fetch in userEffect react)
//3. set the state allUsers to data from backend
//4. pass down allUsers to Usercontainer as props
//5. mapuse.map to render users


  // useEffect(() => {
  //   if (document.cookie) {
  //     console.log("useEffect cookie: ", document.cookie);
  //     let token = getTokenFromCookie("jwt_token");
  //     if (token === false) {
  //       setUser({});
  //     } else {
  //       loginWithToken(token, setUser);
  //     }
  //   }
  // }, []);

  const loginWithToken = async (token, setUser) => {
    const persistantUser = await authCheck(token);
    await setUser(persistantUser.user);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser({});
    // writeCookie("jwt_token", " ");
    document.cookie =
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <>
      <div className="wrapper">
        {!user.username ? (
          <LogOrSign setUser={setUser} />
        ) : (
          <>
            <h2>You are logged in, {user.username}</h2>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
