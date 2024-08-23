import React from 'react';

const Home = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to Book Explorer!</h1>
            <p>
                Discover, explore, and manage your favorite books effortlessly. Our application allows you to add new books, browse through different categories, and search for titles or authors with ease. Whether you're a fan of fiction, science, history, or non-fiction, Book Explorer is designed to make your reading journey more organized and enjoyable.
            </p>
            <p>
                Navigate through the app to explore our features:
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li>📚 <strong>Add New Books:</strong> Easily add your favorite books by providing the title, author, and selecting the appropriate category.</li>
                <li>📂 <strong>Browse Categories:</strong> Dive into different genres and find the perfect book that suits your interest.</li>
                <li>🔍 <strong>Search Functionality:</strong> Instantly find books by searching for specific titles or authors.</li>
            </ul>
            <p>Start your reading adventure with Book Explorer today!</p>
        </div>
    );
}

export default Home;
