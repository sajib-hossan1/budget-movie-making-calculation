import React from 'react';

// fontawesome packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import './Person.css'


const Person = (props) => {
    // person data destructuring
    const {name,img,role,age,country,salary} = props.person;
    
    // fontawesome icons
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />
    return (
        <div>
            <div className="person-card">
                <div className="person-img">
                    <img src={img} alt="" />
                </div>
                <h2>Name : {name}</h2>
                <h2>Role : {role}</h2>
                <h2>Age : {age}</h2>
                <h2>Country : {country}</h2>
                <h2>Salary : {salary}$</h2>
                <button onClick={() => props.handlerAddToCart(props.person)} className="cart-btn">{cartIcon} Add to cart</button>
                <div className="person-social-icon">
                    <a href="/facebook" className="fb-icon">{fbIcon}</a>
                    <a href="/twitter" className="twitter-icon">{twitterIcon}</a>
                </div>
            </div>
        </div>
    );
};

export default Person;