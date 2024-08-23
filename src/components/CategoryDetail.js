import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryDetail({ books }) {
    const { categoryName } = useParams();
    const filteredBooks = books.filter(book => book.category.toLowerCase() === categoryName);

    return (
        <div className='category-detail'>
            <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category Details</h2>
            <p>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                esktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>{book.title}-{book.author}</li>
                ))}
            </ul>

        </div>
    )
}

export default CategoryDetail