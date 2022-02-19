import {Book} from "../interfaces";

interface BooksState {
    books: Book[];
}

export interface BooksModel extends BooksState{}

export const booksModel:BooksModel =  {
    books: [
        {
            id:1,
             title: "Hunger Games"
        },
        {
            id:2,
            title: "Harry Potter"
        },
        {
            id:3,
            title: "Lord of the Rings"
        },
    ]
}

// https://youtu.be/2HGwD0qWVuc?t=220 burada kaldık