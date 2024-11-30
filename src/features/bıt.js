import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
bitcoinAr:null,
loading:false,
error:null,

}


export const fetchCoin=createAsyncThunk("fetchCoin/coin",async()=>{
const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
if(!response.ok){
throw new Error("Network error")

}
return response.json()

})

export const bitSlice=createSlice({
name:"bitcoıncurrent",
initialState,
reducers:{   
},
extraReducers:(builder)=>{
builder.addCase(fetchCoin.pending,(state)=>{
state.loading = true
state.error=null
}),
builder.addCase(fetchCoin.fulfilled,(state,action)=>{
state.loading=false
state.bitcoinAr=action.payload.bpi.USD.rate
console.log(state.bitcoinAr)
state.error=null
}),
builder.addCase(fetchCoin.rejected,(state,action)=>{
state.loading=false
state.error=action.error.message;
})




}




})

export const {} = bitSlice.actions
export default bitSlice.reducer