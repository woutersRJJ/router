import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();

    return (
        <div style={{ marginTop: "1rem" }}>
            <h2>Product Detail</h2>
            <p>You are viewing product ID: {id}</p>
        </div>
    );
}
