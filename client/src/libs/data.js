import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/users`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
