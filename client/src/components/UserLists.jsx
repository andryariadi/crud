import { useState, useEffect } from "react";
import { deletedUser, getUsers } from "../libs/data";
import { Link } from "react-router-dom";

export default function UserLists() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, []);

  async function deleteUser(slug) {
    try {
      await deletedUser(slug);
      // Setelah penghapusan berhasil, perbarui daftar pengguna
      setUsers(users.filter((user) => user._id !== slug));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  console.log(users, "<---userlist");

  return (
    <div className="container">
      <h2>CRUD User</h2>
      <Link to="/createuser" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <Link to={`/updateuser/${user._id}`} className="btn btn-primary mx-3">
                  Edit
                </Link>
                <button onClick={() => deleteUser(user._id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
