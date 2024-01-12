import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
        const response = await axios.get("https://dummyjson.com/products")
        sessionStorage.setItem("allProducts",JSON.stringify(response.data.products))
        return response.data.products
    })

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts:[],
        allProducetsDummy:[],
        loading: false,
        error: "",
        productPerPage : 10,
        CurrentPage : 1
    },
    reducers: {
searchByProducts :(state,action)=>{
    state.allProducts = state.allProducetsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
},
navigateToNextPage:(state)=>{
    state.CurrentPage++
},
navigateToPrePage:(state)=>{
    state.CurrentPage--
}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled,(state, action) => {
            state.loading = false
            state.allProducts = action.payload
            state.allProducetsDummy = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state) => {
            state.loading = false
            state.allProducts = []
            state.error = "API call failded...Please try after some time!!!"
        })
    }

})
export const {searchByProducts,navigateToNextPage,navigateToPrePage}=productSlice.actions
export default productSlice.reducer