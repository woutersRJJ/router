import {Link, Outlet, useParams} from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();

    return (
        <div style={{ marginTop: "1rem" }}>
            <h2>Product Detail</h2>
            <p>Je bekijkt product met product ID: {id}</p>

            <Link to="reviews">Beoordelingen</Link>

            <Outlet/>
        </div>
    );
}
