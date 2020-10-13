import React from 'react';

function CartItems(props) {

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    {product.title}
                </td>
                <td>
                    {product.quantity}
                </td>
                <td>
                    {product.price}
                </td>
                <td>
                    <button onClick={() => props.removeItem(product._id)}>Remove</button>
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    );
}

export default CartItems;