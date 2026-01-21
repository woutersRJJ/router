import './App.css';
import Home from "./Home";
import About from "./About";
import {HashRouter, Link, Route, Routes} from "react-router-dom";

function App() {
        return (
            // <HashRouter> goes into index.js
            <div>
                <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            // </HashRouter>
        );
}

export default App;
