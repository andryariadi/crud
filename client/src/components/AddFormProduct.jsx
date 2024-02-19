import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../libs/data";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/ProductSlice";

export default function AddFormProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputProduct, setInputProduct] = useState({
    title: "",
    price: 0,
    categories: "Electronic",
  });

  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    console.log({ name, value }, "<-----difunctionchange");
    setInputProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await createProduct(inputProduct);
      dispatch(addProduct(newProduct));
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(inputProduct, "<-----addformproduct");

  return (
    <>
      <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
        <h2 className="mb-4">Tambahkan Produk Baru</h2>
        <div className="w-50 border bg-secondary text-white p-5">
          <form className="d-flex flex-column gap-3" onSubmit={handleSubmitProduct}>
            <input type="text" placeholder="Judul" className="form-control py-2" name="title" value={inputProduct.title} onChange={handleChangeProduct} />
            <input type="number" placeholder="Harga" className="form-control py-2" name="price" value={inputProduct.price} onChange={handleChangeProduct} />
            <select name="categories" value={inputProduct.categories} onChange={handleChangeProduct} className="form-select py-2">
              <option value="" disabled>
                Kategori
              </option>
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
