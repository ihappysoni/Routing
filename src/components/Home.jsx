import React from 'react'
import { Link } from 'react-router-dom';
import Parts from './Parts';
import "./Style.css";
const Home = () => {
    return (
        <>
            <nav>
                <Link to="/"><h3>Home</h3></Link>
                <ul className='links'>
                    <Link to="student"><li>Student</li></Link>
                    <Link to="contact"><li>Contact Us</li></Link>
                </ul>
            </nav>
            <Parts />
            
        </>
    )

}

export default Home