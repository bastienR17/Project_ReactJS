import {useFetchProductsQuery, useGetArticlesQuery, useGetProductsQuery} from "../Services/API"
import {useParams} from "react-router-dom";
import {useCart} from "../Providers/CartContext";
import React from "react";



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