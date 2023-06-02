import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    countProducts: [],
    countTotal: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart(state, action){
            
            console.log(action.payload)
            const checkIndex = state.countProducts.findIndex((item) => item.id === action.payload.id);
            
            if(checkIndex >= 0){

                state.countProducts[checkIndex].quantity += 1;
               
            }else{

                const newProduct = {...action.payload, quantity: 1, subTotal: 0};
                state.countProducts.push(newProduct);

            }

        },

        addToCartFromProductPage(state, action){

            const checkIndex = state.countProducts.findIndex((item) => item.id === action.payload.id);

            if(checkIndex >= 0){

                state.countProducts[checkIndex].quantity += action.payload.quantity;
               
            }else{

                const newProduct = {...action.payload, quantity: action.payload.quantity, subTotal: 0};
                state.countProducts.push(newProduct);

            }
            
        },

        removeFromCart(state, action){

            state.countProducts.splice(action.payload, 1);

        },

        calculateTotalAmount(state, action){

            
                
                state.countProducts?.map((item) => {


                    item.subTotal = item.attributes.price * item.quantity;

                });

                
        },

        increment(state, action){

            state.countProducts.map((item) => {
                console.log(item.id === parseInt(action.payload))
                if(item.id === parseInt(action.payload) && item.quantity >= 1){

                    item.quantity++;

                }

                return item
            })

        },

        decrement(state, action){

            
            state.countProducts.map((item) => {
                
                if(item.id === parseInt(action.payload) && item.quantity > 1){

                    item.quantity--;

                }

                return item
            })

        }
    }
})

export const { addToCart, increment, decrement, calculateTotalAmount, removeFromCart, addToCartFromProductPage } = counterSlice.actions;
export const counterManager = state => state.counter;

export default counterSlice.reducer