import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Component/Breadcrumb/Breadcurm";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import "./CSS/protect.css"
import Description from "../Component/Description/Description";
import RelatedProduct from "../Component/Related Product/RelatedProduct";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="protect">
            <Breadcrumb product={product} />
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProduct/>
        </div>
    );
};

export default Product;
