import './App.css';
import axios from 'axios';
import List from './components/List';
import Form from './components/Form';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryDetail from './components/CategoryDetail';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';
import { useState, useEffect } from 'react';
import { fetchBooks } from './api';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [books, setBooks] = useState([]);
  const categories = ['Fiction', 'Non-Fiction', 'Science', 'History'];
  useEffect(() => {
    const getBooks = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };
    getBooks();
  }, []);
  const addBook = (book) => {
    setBooks([...books, book])
  }

  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories categories={categories} />} >
          <Route path=':categoryName' element={<CategoryDetail books={books} />}></Route>
        </Route>
        <Route path='/add-book' element={<Form categories={categories} addBook={addBook}></Form>} ></Route>
        <Route path='/list-books' element={<List books={books} categories={categories}></List>} ></Route>
        <Route path="/books/:bookId" element={<BookDetail books={books} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
