import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const hadleShowEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit book={book} onEdit={onEdit} hadleShowEdit={hadleShowEdit} />
    );
  }

  return (
    <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      <div> {content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete{" "}
        </button>
      </div>
    </div>
  );
}

export default BookShow;
