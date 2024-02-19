import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLists from "./components/UserLists";
import AddFormUser from "./components/AddFormUser";
import UpdateFormUser from "./components/UpdateFormUser";
import ProductList from "./components/ProductList";
import AddFormProduct from "./components/AddFormProduct";
import UpdateFormProduct from "./components/UpdateFormProduct";
import { useEffect } from "react";
import { getProducts } from "./libs/data";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./redux/ProductSlice";

Route;
function App() {
  const dispatch = useDispatch();

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
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="/createuser" element={<AddFormUser />} />
          <Route path="/updateuser/:slug" element={<UpdateFormUser />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/createproduct" element={<AddFormProduct />} />
          <Route path="/updateproduct/:slug" element={<UpdateFormProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
