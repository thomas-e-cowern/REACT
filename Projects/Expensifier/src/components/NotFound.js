import React from 'react';
import { Link } from 'react-router-dom';

const notFoundPage = () => (
    <div>
        404! - <Link to='/'>Go to Home Page</Link>
    </div>
);

export default notFoundPage;