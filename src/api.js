import axios from 'axios';

export const fetchBooks = async () => {
    try {
        const response = await axios.get('/data/books.json');
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};