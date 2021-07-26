import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

function Main() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log("Error:",err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <ProductForm/>
            <ProductList products={products} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main