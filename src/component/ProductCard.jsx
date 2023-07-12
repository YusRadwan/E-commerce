/* eslint-disable no-unused-vars */
import { Fragment, React } from "react"
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {FaHeart} from "react-icons/fa"


const ProductCard = () => {
    return (
        <Fragment>
            <Link className="product card mt-2" style={{width: "15.5rem"}}>
                {/* <img src="images/wish.svg" className="wish" alt="Wish" /> */}
                <FaHeart className="wish"/>
                <div className="product-icon d-flex">
                    <img src="images/prodcompare.svg" alt="Cart" />
                    <img src="images/view.svg" alt="View" />
                    <img src="images/add-cart.svg" alt="Cart" />
                </div>
                <div className="product-img-div">
                    <img 
                        src="images/watch.jpg" 
                        className="product-img-1 card-img-top" 
                        alt="Product" />
                    <img 
                        src="images/watch-1.png" 
                        className="product-img-2 card-img-top" 
                        alt="Product" />
                </div>
                <div className="card-body">
                    <p>11 JUNE 2022</p>
                    <h5 className="card-title">Kids Headphones Bulk 10 Pack Multi Colored</h5>
                    <ReactStars count={5} value={"2"} size={20} activeColor="#febd69"/>
                    <Link to={"#"} className="price">$100.00</Link>
                </div>
            </Link>
        </Fragment>
    )
}
export default ProductCard;