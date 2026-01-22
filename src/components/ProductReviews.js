import { useParams } from "react-router-dom";

function ProductReviews({products}) {
    const { id } = useParams();
    const reviews=products.find(p=>p.id===Number(id)).reviews

    return (
        <div style={{ marginTop: "1rem" }}>
            <h2>Beoordelingen voor product {id}</h2>

            {reviews.length === 0 && <p>No reviews yet.</p>}

            {reviews.filter(r=>r.productID===Number(id)).map((review, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <strong>{review.author}</strong> — {review.rating}/5
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductReviews;
