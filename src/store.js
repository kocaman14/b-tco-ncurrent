import { configureStore } from "@reduxjs/toolkit";
import bitReducer  from "./features/bıt";

export const store=configureStore({
 reducer:{
 bit:bitReducer
 }   
})