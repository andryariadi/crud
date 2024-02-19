import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletedProduct } from "../libs/data";
import { deletingProduct } from "../redux/ProductSlice";

export default function ProductList() {
  const products = useSelector((state) => state.productStore.products);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    try {
      await deletedProduct(slug);
      dispatch(deletingProduct({ _id: slug }));
    } catch (error) {
      console.log(error);
    }
  }

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
            <th>Price</th>
            <th>Categories</th>
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
                <Link to={`/updateproduct/${product._id}`} className="btn btn-primary mx-3">
                  Edit
                </Link>
                <button onClick={() => handleDelete(product._id)} className="btn btn-danger">
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
