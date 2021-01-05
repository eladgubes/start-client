import React from 'react';
import { Link } from 'react-router-dom';



export function ItemCard(props) {
    const { item } = props

    return (
        <Link to={`itemDetails/${item._id}`}>
            <div className="card-container">
                <div className="card-image flex">
                    <img src={item.mainImage} alt="" />
                </div>
                <div className="card-description">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
                <div className="card-details flex space-around">
                    <div className="lotty-info">
                        <p>120/300</p>
                    </div>
                    <div className="price">
                        <div className="price-circle purple">
                            <h3>{item.price} ש"ח</h3>
                        </div>
                        {/* <button><Link to={`itemDetails/${item._id}`}>details</Link></button> */}
                    </div>

                </div>



            </div>
        </Link>
    );
}