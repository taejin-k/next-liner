import {
  combineReducers,
  configureStore,
  PayloadAction,
} from "@reduxjs/toolkit";
import keywordReducer from "./slices/keywordSlice";
import modalReducer from "./slices/modalSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  modal: modalReducer,
  keyword: keywordReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
