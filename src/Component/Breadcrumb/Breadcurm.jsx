import React from 'react';
import "./Breadcurm.css"
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
    const { product } = props;
  
    if (!product) {
        return null; // Return null if no product is passed, to avoid rendering an incomplete breadcrumb
    }

    return (
        <div className='breadcrumb'>
            Home <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}    
        </div>
    );
}

export default Breadcrumb;
