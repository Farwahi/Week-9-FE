export const writeCookie = (key, value, days = 30) => {
  let date = new Date();
  date.setDate(date.getDate() + days);

  const cookie = (document.cookie =
    key + "=" + value + "; expires=" + date.toGMTString() + "; path=/");

  console.log("cookie in writeCookie: ", cookie);
  return cookie;
};

export const getTokenFromCookie = (jwt_token) => {
  const expression = new RegExp(`(?<=${jwt_token}=)[^;]*`);
  const cookieMatch = document.cookie.match(expression);

  if (cookieMatch) {
    const cookieValue = cookieMatch[0];
    console.log("Cookie value:", cookieValue);
    return cookieValue;
  } else {
    console.error(`Cookie "${jwt_token}" not found.`);
    return null; 
  }
};

