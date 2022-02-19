import {Book} from "../interfaces";
import {action, Action, computed, Computed, thunk, Thunk} from "easy-peasy";
import {Model} from ".";
import axios from "axios";

interface UserState {
    book: Book;
    hasBook: Computed<this, any>
}

interface UserActions {
    setBook: Action<this, Book>;
}

interface UserThunks {
    borrowBookThunk: Thunk<this, number, undefined, Model>; // number is id of book;
    asyncThunk: Thunk<this, number>;
}

export interface UserModel extends UserState, UserActions, UserThunks{}

export const userModel:UserModel = {
    book: {},
    hasBook: computed(state => {
        return Object.keys(state.book).length > 0;
    }),
    //ACTIONS
    setBook: action((state, payload) => {
        state.book = payload;
    }),
    //THUNKS
    borrowBookThunk: thunk((actions, payload, {getStoreState})=>{
        const {books} = getStoreState().booksModel; // it is important! in here that THUNK can access to OTHER STORE...
        const bookFound = books.find((book)=>book.id === payload);
        if(bookFound){
            actions.setBook(bookFound);
        }
    }),
    asyncThunk: thunk(async (actions, payload)=>{
        const response = await axios({
            method: "GET",
            url: "https://dog.ceo/api/breeds/image/random"
        });
        console.log(response);
        if(response.status === 200) {
            setTimeout(()=> actions.borrowBookThunk(payload), 2000);
        }
    }),
}