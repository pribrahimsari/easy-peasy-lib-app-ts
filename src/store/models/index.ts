import {action, Action, thunk, Thunk} from "easy-peasy";

interface UpdateDataPayload {
    name: string;
    course: string;
}

export interface StoreModelState {
    name:string;
    course:string;
}

export interface StoreModelActions {
    setName: Action<this, string>;
    setCourse: Action<this, string>;
}

export interface StoreModelThunks {
    updateDataThunk: Thunk<this, UpdateDataPayload>
}

export interface StoreModel extends StoreModelState, StoreModelActions, StoreModelThunks {};

const model: StoreModel = {
    name: "İbrahim",
    course: "Easy Peasy TypeScript React Course",
    setName: action((state, payload)=>{
        state.name = payload;
    }),
    setCourse: action((state, payload) => {
        state.course = payload;
    }),
    updateDataThunk: thunk(async (actions, payload) => {
        actions.setName(payload.name);
        actions.setCourse(payload.course);
    })
};

export default model;