import React, {useState} from 'react';
import {useStoreActions, useStoreState} from "./store/hooks";

function App() {
    const {books} = useStoreState(store => store.booksModel);
    const {hasBook, book} = useStoreState(store => store.userModel);
    const {borrowBookThunk, asyncThunk} = useStoreActions(actions => actions.userModel);

    const [bookId, setBookId] = useState(0);

    const handleOnBorrowBook = () => {
        //borrowBookThunk(bookId);
        asyncThunk(bookId);
    }

    return (
        <div className="App">
            <h1>Lib App</h1>
            <h4>My Books</h4>
            {books.map(book=>(
                <p key={book.id}>{book.title}</p>
            ))}

            <h4>Your Borrowed Ones</h4>
            {hasBook && (
                <div>Borrowed Book: {book.title}</div>
            )}
            {!hasBook && <div>No borrowed books</div>}

            <div>
                <input
                    type="number"
                    value={bookId}
                    onChange={(e)=>setBookId(parseInt(e.target.value))}
                    placeholder="Choose id of book to borrow"
                />
                <button onClick={()=>handleOnBorrowBook()}>Submit</button>
            </div>


        </div>
    );
}

export default App;
