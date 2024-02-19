import axios from "axios";

// Data User:
export const getUsers = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/users`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (slug) => {
  try {
    const res = await axios.get(`http://localhost:3000/users/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async ({ name, email, gender }) => {
  try {
    const res = await axios.post(`http://localhost:3000/users`, {
      name,
      email,
      gender,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async ({ slug, name, email, gender }) => {
  try {
    const res = await axios.put(`http://localhost:3000/users/${slug}`, {
      name,
      email,
      gender,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletedUser = async (slug) => {
  try {
    const res = await axios.delete(`http://localhost:3000/users/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/products`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
