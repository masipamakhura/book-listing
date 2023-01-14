import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";



function BookList() {
  const {books} = useContext(BooksContext);
  
  
  const renderedBook = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));
  return <div className="book-list">
   
    {renderedBook}
    </div>;
}

export default BookList;
