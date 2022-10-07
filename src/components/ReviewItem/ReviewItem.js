import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './ReviewItem.css';
const ReviewItem = ({ product }) => {
    const { name, price, quantity, shipping, img } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div class="review-details-container">
                <div class="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div class="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;