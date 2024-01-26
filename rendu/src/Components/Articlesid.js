import {useGetArticlesQuery, useGetProductsQuery, useFetchProductsQuery, usePostCommentMutation} from "../Services/API"
import {useParams} from "react-router-dom";
import {useCart} from "../Providers/CartContext";
import React, {useState} from "react";

import Header from "./header";

export default function () {
    let {id} = useParams()
    let {cart, addToCart} = useCart()
    let {data, isFetching} = useGetProductsQuery()

    return data.map((product) => {
        return product.id === id ? <div>
            <Header/>
            <h3>{product.title}</h3>
            <img src={product.image}/>
            <h3>{product.price} €</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Postcome/>
            <Commentair/>
        </div>
        : <div></div>
    })
}




function Postcome() {
    let {id} = useParams();
    let [username, setUsername] = useState("");
    let [comment, setComment] = useState("");
    let [postComment, { isLoading }] = usePostCommentMutation();
    let [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && comment) {
            try {
                await postComment({ id, username, comment });
                setUsername("");
                setComment("");
                setErrorMessage(""); // Clear any previous error message
            } catch (error) {
                console.error("Failed to post comment: ", error);
            }
        } else {
            setErrorMessage("Both username and comment are required.");
        }
    };

    return (
        <>
            {/* Existing code... */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username..."
                />
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Posting..." : "Post Comment"}
                </button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}


function Commentair () {

    let {id} = useParams()
    let {data, isFetching} = useFetchProductsQuery(id)

    if (isFetching) {
        return <div>Loading...</div>;
    }
    return data.map((comments) => {

        return comments.product_id === id ? <div>



                <h3>{comments.username}</h3>
                <h3>{comments.comment}</h3>


            </div>
            : <div>

            </div>

    })

}
