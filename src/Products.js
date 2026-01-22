import {Link, Outlet} from "react-router-dom";

export default function Products({products}) {

    return (
        <div>
            <h1>Producten</h1>
            <ul>
                {products.map(p => (
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
