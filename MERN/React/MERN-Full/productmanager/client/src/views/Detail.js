import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Detail(props) {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    })
    console.log(product)
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <a href={`/products/${props.id}/edit`}>Edit </a>
                

        </div>
        
    )
}

export default Detail