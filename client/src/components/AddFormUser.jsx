import { useState } from "react";
import { createUser } from "../libs/data";
import { useNavigate } from "react-router-dom";

export default function AddFormUser() {
  const navigate = useNavigate();

  //   OLD WAY:
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [gender, setGender] = useState("male");

  //   Bestpractice:
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    gender: "Male",
  });

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "<-----difunctionchange");
    setInputUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(inputUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log({ name, email, gender }, "<-----diformuser");
  console.log(inputUser, "<-----addinputUser");
  return (
    <>
      <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
        <h2 className="mb-4">Add New User</h2>
        <div className="w-50 border bg-secondary text-white p-5">
          <form className="d-flex flex-column gap-3">
            <input type="text" placeholder="Name" className="form-control py-2" name="name" value={inputUser.name} onChange={handleChangeUser} />
            <input type="text" placeholder="Email" className="form-control py-2" name="email" value={inputUser.email} onChange={handleChangeUser} />
            <select name="gender" className="form-select py-2" value={inputUser.gender} onChange={handleChangeUser}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button type="submit" onClick={handleSubmitUser} className="btn btn-info py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
