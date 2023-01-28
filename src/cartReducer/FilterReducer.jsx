

const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_CHANGE":
            return{
                ...state,
                sort: action.payload
            }

        break;

        case "RATE_CHANGE":
            return{
                ...state,
                rate: action.payload
            }
            

        break;

        case "CLEAR":
            return{
                ...state,
                rate: null,
                sort:null
            }
            break;

          default:
            return state
}          
}

export default FilterReducer