import { useState,useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const {createBook} = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter title</label>
        <input
          className="input"
          value={title}
          type="text"
          name="title"
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Create book!
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
