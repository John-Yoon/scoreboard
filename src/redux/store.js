import {createStore} from "redux";
import {allReducers} from "./reducers";

export const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // reducer: 데이터 변경/관리하는 함수...
// console.log(store);
// console.log(store.getState());