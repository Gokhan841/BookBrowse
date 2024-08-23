import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link to={`/categories/${category.toLowerCase()}`} className="category-link">
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default Categories;
