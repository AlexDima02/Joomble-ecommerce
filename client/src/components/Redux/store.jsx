import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../ShoppingCart/components/CounterSlice';


export default configureStore({
    reducer: {
      counter: CounterSlice
    }
})