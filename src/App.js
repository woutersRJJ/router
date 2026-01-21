import './App.css';
import Home from "./Home";
import About from "./About";
import {Link, Route, Routes} from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ProductReviews from "./ProductReviews";

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
                    <Route path="/products" element={<Products />}>
                        {/* Geneste Child route level 1
                        bv. /products/1 */}
                        <Route path=":id" element={<ProductDetail />} >
                            {/* Geneste Child route
                            bv. /products/1/reviews  */}
                             <Route path="reviews" element={<ProductReviews />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
            // </HashRouter>
        );
}

export default App;
