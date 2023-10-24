import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//action

export const getData = createAsyncThunk("order", async (args, {rejectWithValue})=>{
    try {
        const result = await fetch("https://6532c5f0d80bd20280f607a6.mockapi.io/orderdetails");
        const response = await result.json();
        return response;
    } catch (error) {
        return rejectWithValue("Oops an error occured during fetching order details");
    }
})

export const orderSlice = createSlice({
    name : "Order Details",
    initialState : {
        orderDetails : [],
        loading : false,
        error : null
    },
    extraReducers : {
        [getData.pending] : (state)=>{
state.loading = true;
        },
        [getData.fulfilled] : (state, action)=>{
            state.loading = false;
            state.orderDetails = action.payload;
        },
        [getData.rejected] : (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default orderSlice.reducer;