import {configureStore} from "@reduxjs/toolkit";
import Storeprovider from "./Slices/sliceStore.jsx" ;

const store = configureStore({
    reducer:{
        Store: Storeprovider,
    }
})

export default store;