const initial={
    data:[]
}

export default function authReducer(state=initial,action){

    switch(action.type){

        case "GET_ORDERS" : 
            return {...state,data:action.payload}
        default:
            return state;
    }
}