import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

const BlogCard = () => {
    const [blogShow, setBlogShow] = useState(false) 
    return ( 
        <Fragment>
            <div className="card mt-2" style={{width: "19.5rem"}}>
                <img src="images/blog-1.jpg" className="card-img-top" alt="brand" />
                <div className="card-body">
                    <p>11 JUNE 2022</p>
                    <h5 className="card-title">A Beautiful Sunday Morning Renaissance</h5>
                    <p className="card-text">
                        You&#39;re Only As Good As Last Collection, Which is An Enormous Pressure. I Think There Is Something About. <span className={`${blogShow ? "readMore": "noreadMore"}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cupiditate! Nobis dolor necessitatibus voluptatum, eum    cumque consequatur sint molestias autem repudiandae accusantium, qui unde officiis vel? Dicta voluptas ullam alias.
                        </span>
                    </p>
                    <Link 
                        to="#" className="btn button" 
                        onClick={() => blogShow ? setBlogShow(false): setBlogShow(true)}
                    >READ MORE</Link>
                </div>
            </div>
        </Fragment>
    );
}
export default BlogCard;