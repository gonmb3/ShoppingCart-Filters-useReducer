

export const initialState = {
    cart:[],
    search:""
}


export const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
                                     //add to cart
            const itemExist = state.cart.find(i => i.id === action.payload.id)
            if(itemExist){
                return{
                    ...state,              
                        cart:state.cart.map(i => i.id === action.payload.id ? {...i , qty: i.qty +1} : i ),                                
                }
                
            }else{
               return{
                ...state,
                cart: [...state.cart, {...action.payload, qty: 1}]
               }
            } 
            break;  
                                       //delete from cart  
          case "DELETE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(i => i.id !== action.payload.id)
            } 
            break;
                        //search product
            case "SEARCH":
                return {
                    ...state,
                    search:action.payload

                }
                break;        

          default:
            return state
          

    }
}