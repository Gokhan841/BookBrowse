import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const List = ({ books, categories }) => {
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const navigate = useNavigate()
  const filteredItems = books.filter((book) => {
    const matchesSearch = book.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) ||
      book.author.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase());
    const matchesCategory = selectedCategory === "" || book.category === selectedCategory;

    return matchesSearch && matchesCategory; // Hem arama terimi hem de kategoriye göre filtreleme
  });

  const handleNavigation = (index) => {
    navigate(`/books/${filteredItems[(index + 1) % filteredItems.length].id}`);
  };

  return (
    <div className="list-container">
      <input
        className="search-input"
        type="text"
        name="searchItem"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      ></input>
      <select
        className="category-select"
        value={selectedCategory} // Seçilen kategoriyi kontrol eder
        onChange={(e) => setSelectedCategory(e.target.value)} // Kategori değişimi
      >
        <option value="" disabled hidden>Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      {
        <ul className="book-list">
          {filteredItems.map((item, index) => (
            <li
              className="book-item"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleNavigation(index)}
            >
              <span className="book-title">{item.title}</span>
              <span className="book-author">-{item.author}</span>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default List;



