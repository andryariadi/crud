import { useState, useEffect } from "react";
import { getUsers } from "../libs/data";

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

  return (
    <div className="container">
      <h2>CRUD User</h2>
      <button className="btn btn-success my-3">Create +</button>
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
                <button className="btn btn-primary mx-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
