import {createTypedHooks} from "easy-peasy";
import {Model} from "./models";

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<Model>();
