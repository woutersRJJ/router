import './App.css';
import Home from "./Home";
import About from "./About";
import {Link, Route, Routes} from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
        return (
            // <HashRouter> goes into index.js
            <div>
                <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    Parent route
                    <Route path="/products" element={<Products />} />
                        Nested child route
                         <Route path=":id" element={<ProductDetail />} />

                    {/* Parent route */}
                    <Route path="/products" element={<Products />}>
                        {/* Nested route */}
                        <Route path=":id" element={<ProductDetail />} />
                    </Route>
                </Routes>
            </div>
            // </HashRouter>
        );
}

export default App;
