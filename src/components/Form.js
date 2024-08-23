import React, { useState } from 'react'

const Form = ({ addBook, categories }) => {
    const initialValues = { title: "", author: "", category: categories[0] }
    const [form, setForm] = useState(initialValues);

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.title.trim() && form.author.trim() && form.category.trim()){
            addBook(form)
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name="title"
                value={form.title}
                onChange={onChangeForm} 
                placeholder='Enter book title'
            ></input>
            <br></br>
            <input
                type='text'
                name="author"
                value={form.author}
                onChange={onChangeForm}
                placeholder='Enter book author'
            ></input>
            <br></br>
            <select
                name="category"
                value={form.category}
                onChange={onChangeForm}>
                {categories.map((category, index) => (
                    <option key={index} value={category} >{category}</option>
                ))}
            </select>
            <br></br>
            <button type='submit'>Add</button>
        </form>
    )
}

export default Form