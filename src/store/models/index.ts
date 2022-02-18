import {action, Action} from "easy-peasy";

export interface StoreModel {
    name:string;
    course:string;
    setName: Action<this, string>;
}

const model:StoreModel = {
    name: "İbrahim",
    course: "Easy Peasy TypeScript React Course",
    setName: action((state, payload)=>{
        state.name = payload;
    }),
};

export default model;