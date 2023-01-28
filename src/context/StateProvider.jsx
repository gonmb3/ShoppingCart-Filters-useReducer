import { createContext, useEffect, useState, useContext, useReducer} from "react"
import {  Reducer, initialState } from '../cartReducer/Reducer';
import FilterReducer from '../cartReducer/FilterReducer';

const StateContext = createContext();


const StateProvider = ({children}) => {
   //usereducer // CART 
    const [state, dispatch] = useReducer(Reducer, initialState);

     //usereducer // FILTERS
     const [filter, dispFilter] = useReducer(FilterReducer, {
        sort:null,
        rate:null,

     }) 

    console.log(state)

    return(
        <StateContext.Provider
        value={{
            state,
            dispatch ,
            filter,
            dispFilter
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider}

export default StateContext


export const useStateContext = () => {
    return useContext(StateContext)
}

