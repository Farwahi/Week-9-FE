
export const signupFetch = async (username, password, email) => {
  const res = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await res.json();
  console.log("data in fetch signup", data);
  return data;
};

//========================================================================================

export const loginFetch = async (username, password) => {
  const res = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await res.json();

  

  return data;
};

//===================================================================================

