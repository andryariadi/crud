import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/users`);
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

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [gender, setGender] = useState("male");
//   console.log({ name, email, gender }, "<-----diformuser");
