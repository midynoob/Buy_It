import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem, onSuccessBuy } from '../../actions/user_actions';
import CartItems from './CartItems';
import Paypal from './Paypal';

function CartPage(props) {
    const dispatch = useDispatch();

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        let cartItems = [];
        if(props.user.userData && props.user.userData.cart) {
            if(props.user.userData.cart.length > 0 ) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id);
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
            

        }
    }, [props.user.userData])

    useEffect(() => {
        if(props.user.cartDetail && props.user.cartDetail.length > 0) {
            calculateTotal(props.user.cartDetail)
        }
    }, [props.user.cartDetail])

    const calculateTotal = (cartDetail) => {
        let total = 0;


        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })
        setTotal(total)
        setShowTotal(true)

    }


    const removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then((response) => {
            if (response.payload.cartDetail.length <= 0) {
                setShowTotal(false)
            } else {
                calculateTotal(response.payload.cartDetail)
            }
        })
    }

    const transactionSuccess = (data) => {
        let variable = {
            cartDetail: props.user.cartDetail, 
            paymentData: data
        }
        Axios.post('/api/users/successBuy', variable)
        .then(response => {
            if(response.data.success) {
                setShowSuccess(true)
                setShowTotal(false)
                dispatch(onSuccessBuy({cart: response.data.cart, cartDetail:response.data.cartDetail}))
            }else {
                alert("Failed to buy it")
            }
        })
    }
    const transactionError =() => {
        console.log("paypal Error")
    }
    const transactionCancled= () => {
        console.log("transcation cancled")
    }

    return (
        <div>
            CartPage
            <CartItems products={props.user.cartDetail} removeItem={removeFromCart}/>
            <br />
            <br />
            <br />
            {ShowTotal && 
                <div>
                    Total amoutn: {Total} 
                    
                </div>
                
            } 
            {ShowTotal &&
                <Paypal 
                toPay={Total}
                onSuccess={transactionSuccess}
                transactionError={transactionError}
                transactionCancled={transactionCancled}
            />
            }
            
            
        </div>
    );
}

export default CartPage;