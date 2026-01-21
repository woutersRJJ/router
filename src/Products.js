import {Link, Outlet} from "react-router-dom";

export default function Products() {
    const items = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Lader" },
        { id: 3, name: "Keyboard" }
    ];

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {items.map(p => (
                    <li key={p.id}>{p.name}
                        <Link to={`${p.id}`}>{p.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Outlet is part of router-dom. It serves as a placeholder for the child routes content */}
            <Outlet />
        </div>
    );
}
