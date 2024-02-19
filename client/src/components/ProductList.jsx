import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "./ProductReducer";
import { Link } from "react-router-dom";
import { getProducts } from "../libs/data";
import { getAllProducts } from "../redux/ProductSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.andry.ariadi);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await getProducts();
        dispatch(getAllProducts(productData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(products, "<---productlist");

  return (
    <div className="container">
      <h2>CRUD Product with Redux Toolkit</h2>
      <div className="d-flex justify-content-start">
        <Link to="/createuser" className="btn btn-success my-3">
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
                <Link to="" className="btn btn-primary mx-3">
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
