const getAPI = (key) => {
  const baseUrl = `${process.env.REACT_APP_BACKEND_URL}`;
  let url = "";
  switch (key) {
    case "auth":
      url = "users/1";
      break;
    case "users":
      url = "users";
      break;
    default:
      break;
  }
  return baseUrl + url;
};

module.exports = getAPI;
