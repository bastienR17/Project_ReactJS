
import { useGetProductsQuery, useFetchProductsMutation } from "../Services/API"
import { useCart } from "../Providers/CartContext"

import {Link, useParams} from "react-router-dom";
import React from "react";
import Header from "../Components/header";
import styles from '../index.css';



export default function () {

    let {ID} = useParams()
    let {cart, addToCart } = useCart()
    let { data, isFetching } = useGetProductsQuery()



    return <div>Home
        {

            isFetching ? <h1> La liste des produits disponible </h1> : <div>
                {/*    <button onClick={() => {
                    addToCart("Coca")
                    // createArticle({ title: "Hello", content: "My Content" })
                }}> Créer un produit
                </button> */}
                {/* Articles Count: {data.length} */}
                {/* Cart Count: {cart.length} */}
                {/* <ArticlesList /> */}
                <div className={styles}>
                    <Header/>
                </div>

                <ProductList/>


            </div>
        }

    </div>
}

function ProductList() {

    let {data, isFetching} = useGetProductsQuery()
    let {id} = useParams()

    return data.map((product) => {

        return <div>
                <img src={product.image}/>
                <h3>{product.title}</h3>
                <h3>{product.price} €</h3>
            <Link to={`/products/${product.id}`} > Go to article </Link>

        </div>



    })


}

function ArticlesList() {

    let { data, isFetching } = useGetProductsQuery()

    return data.map((article) => {
        return <h3>{article.title}</h3>
    })

}

