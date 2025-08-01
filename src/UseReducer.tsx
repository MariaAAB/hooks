import React, { useReducer } from 'react';

interface Cart {
    products:string[],
    shipping_value?:number
}
type CardActionTYpe = {
    type:'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}
const UseReducer = () => {
    const cart = useReducer(
        (state:Cart,action:CardActionTYpe) =>{
            switch(action.type) {
                case "ADD_PRODUCT":
                    return{
                        ...state,
                        products:[...state.products,"Novo Produto"]
                    }
                default:
                    return state;
            }
        },
        {
            products:[],
            shipping_value:0,
        },
    )
  return (
    <div>
      
    </div>
  )
};

export default UseReducer;
