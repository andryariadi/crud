import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../libs/data";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateFormUser() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    gender: "Male",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserById(slug);
        setInputUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [slug]);

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
      await updateUser({ slug, ...inputUser }); // Mengirimkan slug dan data pengguna yang diperbarui
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log({ inputUser, slug }, "<-----updateinputUser");
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <form className="d-flex flex-column gap-3">
            <input type="text" placeholder="Name" className="form-control py-2" name="name" value={inputUser.name} onChange={handleChangeUser} />
            <input type="text" placeholder="Email" className="form-control py-2" name="email" value={inputUser.email} onChange={handleChangeUser} />
            <select name="gender" className="form-select py-2" value={inputUser.gender} onChange={handleChangeUser}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button type="submit" onClick={handleSubmitUser} className="btn btn-info py-2">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
