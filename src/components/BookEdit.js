import { useState } from "react";

function BookEdit({book,onEdit,hadleShowEdit}){

     const [title,setTitle] = useState(book.title);

     const handleChange =  event =>{
        setTitle(event.target.value);
        
     }
     const handleSubmit = (event) =>{
        event.preventDefault();
        onEdit(book.id,title);
        hadleShowEdit()
     }
    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" onChange={handleChange} value={title} />
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;