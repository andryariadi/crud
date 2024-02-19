import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../libs/data";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../redux/ProductSlice";

export default function UpdateFormProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector((state) => state.productStore.products);
  const product = products.find((prod) => prod._id === slug);

  const [inputProduct, setInputProduct] = useState({
    title: "",
    price: 0,
    categories: "Electronic",
  });

  useEffect(() => {
    if (product) {
      setInputProduct({
        title: product.title,
        price: product.price,
        categories: product.categories,
      });
    }
  }, [product]);

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setInputProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      const updateNewProduct = await updateProduct({ slug, ...inputProduct });
      dispatch(editProduct(updateNewProduct));
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(product, "<----updateProduct");
  console.log(inputProduct, "<----updateInputProduct");

  return (
    <>
      <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
        <h2 className="mb-4">Update Product</h2>
        <div className="w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleSubmitProduct} className="d-flex flex-column gap-3">
            <input type="text" placeholder="Judul" className="form-control py-2" name="title" value={inputProduct.title} onChange={handleChangeProduct} />
            <input type="number" placeholder="Harga" className="form-control py-2" name="price" value={inputProduct.price} onChange={handleChangeProduct} />
            <select name="categories" value={inputProduct.categories} onChange={handleChangeProduct} className="form-select py-2">
              <option value="Electronic">Electronic</option>
              <option value="Shirt">Shirt</option>
            </select>
            <button type="submit" className="btn btn-info py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
