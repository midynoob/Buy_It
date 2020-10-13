import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addToCart } from '../../actions/user_actions';
import { useDispatch } from 'react-redux';


function DetailProduct(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
    }, [])



    const addToCarthandler = () => {
        dispatch(addToCart(productId))
    }


    return (
        <div>
            {Product.title}
            <br />
            <button
                onClick={addToCarthandler}
            >add to cart</button>
        </div>
    );
}

export default DetailProduct;