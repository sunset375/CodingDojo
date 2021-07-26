import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

function ProductList(props) {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }


    return(
        <div>
            <h1>Products</h1>
            {props.products.map((product, index)=>{
                return <div><Link key={index} to={"/products/"+product._id}>{product.title}, ${product.price}, {product.description}</Link>
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </div>
            })}
        </div>
    )
}


export default ProductList