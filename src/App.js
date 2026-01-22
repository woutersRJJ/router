import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import {Link, Route, Routes} from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import ProductReviews from "./components/ProductReviews";
import {PRODUCT_DATA} from "./data/data";

function App() {
        return (
            // <HashRouter> goes into index.js
            <div>
                <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Producten</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    {/* Parent route */}
                    <Route path="/products" element={<Products products={PRODUCT_DATA} />}>
                        {/* Geneste Child route level 1
                        bv. /products/1 */}
                        <Route path=":id" element={<ProductDetail />} >
                            {/* Geneste Child route
                            bv. /products/1/reviews  */}
                             <Route path="reviews" element={<ProductReviews products={PRODUCT_DATA}/>} />
                        </Route>
                    </Route>
                </Routes>
            </div>
            // </HashRouter>
        );
}

export default App;
