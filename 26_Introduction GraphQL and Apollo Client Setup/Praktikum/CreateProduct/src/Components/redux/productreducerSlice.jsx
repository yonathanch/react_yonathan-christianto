import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      imageofProduct: "Doe",
      addDescription: "Doe",
    }
  ],
  reducers: {
    addProduct: (state, action) => {
        return [...state, action.payload]; //  spread operator
      },
    deleteProduct: (state, action)=>{
        return state.filter(product => product.id !== action.payload)
    },
  }
});

const rootReducer = combineReducers({
  products: productsSlice.reducer
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default rootReducer;


  