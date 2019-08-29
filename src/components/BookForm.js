import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
        
    }
    const authorSuggestions = []

    const handleTyping = (e) => {
        const value = e.target.value;
        let authorSuggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`ˆ${value}`, 'i');
            authorSuggestions = this.author.sort().filter(v => v.test(regex));
        }
        this.setState(() => ({authorSuggestions})
    }
    const renderAuthorSuggestions = () => {
        const { authorSuggestions } = this.state;
        if (authorSuggestions.lenght === 0) {
            return null;
        } return (
            <ul>
                {authorSuggestions.map(suggestion => <li>suggestion</li>)}
            </ul>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title"value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="author name"value={author}
                onChange={handleTyping} {(e) => setAuthor(e.target.value)} required />
                { this.renderAuthorSuggestions() } 
            <input type="submit" value="add book" />
        </form>
    );
}
 
export default NewBookForm;