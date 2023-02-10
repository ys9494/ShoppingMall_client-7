import jwt_decode from "jwt-decode";

export const timeFormat = (time) => {
  const changed = time.replaceAll(". ", "-");
  const changedTime = changed.replace(".", "");
  return changedTime;
};

export const getUserId = () => {
  try {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const { userId } = decoded;
    return userId;
  } catch (err) {
    console.log("Error", err)
  }
};
