import { useParams } from "react-router-dom";

function ProductReviews() {
    const { id } = useParams();

    // In a real app, you'd fetch reviews using the product ID
    const reviews = [
        { productID: 1 ,author: "Alice", rating: 5, text: "Amazing product!" },
        { productID: 1, author: "Bob", rating: 4, text: "Pretty good overall." },
        { productID: 2, author: "Donald", rating: 4, text: "I can recommend this product." },
        { productID: 2, author: "Ronald", rating: 3, text: "Kan slechter." },
        { productID: 3, author: "Rick", rating: 1, text: "Poor quality." },
        { productID: 3, author: "Mike", rating: 2, text: "Not really what I expected." }
    ];

    return (
        <div style={{ marginTop: "1rem" }}>
            <h2>Reviews for product {id}</h2>

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
