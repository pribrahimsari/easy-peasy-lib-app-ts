import {createTypedHooks} from "easy-peasy";
import {StoreModel} from "./models";

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<StoreModel>();
