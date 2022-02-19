import {booksModel,BooksModel} from "./books.model";
import {userModel,UserModel} from "./user.model";

export interface Model {
    userModel: UserModel;
    booksModel: BooksModel;
}

export const model:Model = {
    userModel: userModel,
    booksModel: booksModel
}