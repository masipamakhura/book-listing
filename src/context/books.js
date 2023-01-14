import { createContext,useState } from "react";
import axios from "axios";
const BooksContext = createContext();

export function Provider({children}) {
   
    const [books, setBooks] = useState([]);

    const fetchBooks = async () =>{
       let res = await axios.get("http://localhost:3001/books");
       
       setBooks(res.data)
    }

    const editBook = async (id, title) => {
        let res = await axios.put(`http://localhost:3001/books/${id}`,{
          title:title,
        });
       
         let updatedBook = books.map(book => {
            if(book.id === id){
               return {
                ...book,
                ...res.data
               }
            }
            return book
         });
     
  
      setBooks(updatedBook);
    };


  
    const deleteBookByID = async (id) => {
      await axios.delete(`http://localhost:3001/books/${id}`)
  
      const updatedBook = books.filter((book) => book.id !== id);
   
      setBooks(updatedBook);
    };
  


    const createBook = async (title) => {
      let response = await axios.post("http://localhost:3001/books",{
        title
      })
      let updatedBook = [
        ...books,
        response.data
      ];
      setBooks(updatedBook);
    };
    const valueToShare = {
        books,
        deleteBookByID,
        editBook,
        createBook,
        fetchBooks
    }
    return <BooksContext.Provider value={valueToShare} >
        {children}
    </BooksContext.Provider>
}
export default BooksContext;