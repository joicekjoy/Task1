import { combineReducers } from "redux";


//Reducers
import authReducer from '../modules/auth/reducer';

const reducer = combineReducers({
    user:authReducer
})
export default reducer;