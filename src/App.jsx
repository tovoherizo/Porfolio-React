import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import NotFound from "./NotFound/NotFound";
import Nav from "./pages/Nav/Nav";
import { useEffect, useState } from "react";
import SingleProduct from "./Component/single/SingleProduct";
import Commande from "./pages/Commande/Commande";
import ProtectedCommande from "./ProtectedRoute/ProtectedCommande";

//https://fakestoreapi.com/products/
function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
 
  
  // console.log(products);
  const [query, setQuery] = useState("");

  const totalCount = cart.reduce((acc, cur) => {
    return acc + cur.counter;
  }, 0);
  const totalprice = cart.reduce((acc, cur) => {
    return (acc + cur.price) * cur.counter;
  }, 0);

  const handleAdd = (data) => {
    //fonction miajouter produit anaty panier
    // console.log(data);

    setCart([...cart, { ...data, counter: 1 }]);
    //  console.log(data);
  };

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProduct(data);
      setIsLoading(false);

      // console.log(data);
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav setQuery={setQuery} cart={cart} totalCount={totalCount} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                isLoading={isLoading}
                query={query}
                handleAdd={handleAdd}
                cart={cart}
                totalprice={totalprice}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                totalprice={totalprice}
                totalCount={totalCount}
                
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct handleAdd={handleAdd} cart={cart} query={query} />
            }
          />
          <Route
            path="/commande"
            element={
              <ProtectedCommande TotalPrice={totalprice}>
                <Commande />
              </ProtectedCommande>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
