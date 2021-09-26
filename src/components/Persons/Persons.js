import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    // state of all person
    const [persons, setPersons] = useState([]);
    // state of cart
    const [cart, setCart] = useState([])
    // load all person from DB 
    useEffect(()=>{
        fetch('persons.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])

    // single person add to cart handler
    const handlerAddToCart = person => {
        const newCart = [...cart , person]
        setCart(newCart)
    };
    
    return (
        <div className="persons-div">
            <div className="persons-container">
                {
                    persons.map(person => <Person 
                        key={person.id}
                        person={person}
                        handlerAddToCart={handlerAddToCart}
                    ></Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Persons;