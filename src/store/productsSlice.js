import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data : [],
    status: StatusCode.IDLE,
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        // fetchProducts(state,action){
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder)=>{
        builder.addCase(getProducts.pending, (state)=>{
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled, (state,action)=>{
               state.data = action.payload,
               state.status = StatusCode.IDLE
        }).addCase(getProducts.rejected, (state,action)=>{
            state.status = StatusCode.ERROR
        })
    }
});

export const {fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts= createAsyncThunk("products/get", async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
        
}); 
    