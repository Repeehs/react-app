import React from 'react'

export const CartItem = (props) => {
    const { id, productName, productImage, price} = props.data; 
    
    return (
        <div className='cartItem'>
            <img src={productImage} alt="b"/>
            <div className='description'>
                <p>
                    <b> {productName} </b>
                </p>
                <p>{price} vnd</p>
            </div>
        </div>
    )
}
