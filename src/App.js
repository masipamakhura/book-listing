import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBook = (id, title) => {
    let updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });

    setBooks(updatedBook);
  };
  const deleteBookByID = (id) => {
    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  };
  const createBook = (title) => {
    let updatedBook = [
      ...books,
      {
        id: Math.round(Math.random() * 100000),
        title,
      },
    ];
    setBooks(updatedBook);
  };

  return (
    <div className="app">
        <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
