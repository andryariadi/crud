import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = useSelector((state) => state.productStore.products);

  console.log(products, "<---productlist");

  return (
    <div className="container">
      <h2>CRUD Product with Redux Toolkit</h2>
      <div className="d-flex justify-content-start">
        <Link to="/createproduct" className="btn btn-success my-3">
          Create +
        </Link>
      </div>
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
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.categories}</td>
              <td>
                <Link to={`/updateproduct/${product.id}`} className="btn btn-primary mx-3">
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
