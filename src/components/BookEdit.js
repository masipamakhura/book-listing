import { useState,useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book,onSubmit}){

     const [title,setTitle] = useState(book.title);
     const {editBook} = useContext(BooksContext)

     const handleChange =  event =>{
        setTitle(event.target.value);
        
     }


     const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit();
        editBook(book.id,title)
     }
    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" onChange={handleChange} value={title} />
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;