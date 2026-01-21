import {Link, Outlet} from "react-router-dom";

export default function Products() {
    const items = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Headphones" },
        { id: 3, name: "Keyboard" }
    ];

    return (
        <div>
            <h1>Producten</h1>
            <ul>
                {items.map(p => (
                    <li key={p.id}>
                        <Link to={`${p.id}`}>{p.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Outlet is part of router-dom. It serves as a placeholder for the child route content */}
            <Outlet />
        </div>
    );
}
