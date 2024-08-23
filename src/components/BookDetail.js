import React from 'react';
import { useParams ,Link} from 'react-router-dom';

function BookDetail({ books }) {
  const { bookId } = useParams();
  const book = books.find(book => book.id === parseInt(bookId));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className='book-detail-container'>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <Link to={`/books/${parseInt(bookId)+1}`}>Next Book</Link>
    </div>
  );
}

export default BookDetail;