import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import {useStateContext} from '../context/StateContext';
import {runFireworks} from '../lib/utils';

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect = (()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();


    },[]);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>Thank you for your order!</h2>
                <p className="email-msg">Check your email inbox for order receipt</p>
                <p className="description">
                    If your have any questions, please contact us via email
                    <a href="mailto:order@example.com" className="email">order@example.com</a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}