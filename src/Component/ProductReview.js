import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js";
import "../css/ProductReviews.css";

const ProductReview = ({product_reviews}) => {
    return (
        <div className="ProductReviews">
           
        {product_reviews.map((item,index)=>(

<ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />


        ))}
             
        </div>
    )
}

export default ProductReview;