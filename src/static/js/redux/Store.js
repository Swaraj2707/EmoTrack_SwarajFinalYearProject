
import {
    createStore,
    applyMiddleware
} from 'redux';
import {thunk} from "redux-thunk"; // Import thunk directly

import RootReducer from "./RootReducer";

const Store = createStore(RootReducer, applyMiddleware(thunk)); // Use createStore instead of legacy_createStore

export default Store;


//updated on 26 may 24

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'; // Import redux-thunk correctly

// import RootReducer from './RootReducer';

// const store = configureStore({
//   reducer: RootReducer,
//   middleware: [...getDefaultMiddleware(), thunk], // Include redux-thunk middleware
// });

// export default store;




