import { useState } from "react";

function BookCreate({onCreate}){

    const [title,setTitle] = useState('');

    const handleChange = event =>{
        setTitle(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Enter title</label>
            <input className="input" value={title} type="text" name="title" onChange={handleChange}  />
            <button className="button" type="submit">Create book!</button>
        </form>
    </div>
}

export default BookCreate;