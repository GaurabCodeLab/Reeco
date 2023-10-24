import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/orderSlice';

const store = configureStore({
    reducer : {
        orderData : rootReducer
    }
})

export default store;
