import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>Portfolio Page</h1>
        <p>This is my Portfolio items:</p>
        <Link to='/Items/1'>Item One </Link>
        <Link to='/Items/2'>Item Two </Link>
        <Link to='/Items/3'>Item Three </Link>
    </div>
);

export default Portfolio;