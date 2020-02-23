
const initialState = {
    data: { }
}

function  reducer(state=initialState, action)  {
    switch (action.type) {
        case 'ADD_BOOK':
            return state                                        
            break;        
    }
    // return newState
    return state   
}

export default reducer;