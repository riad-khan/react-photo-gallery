import * as actionTypes from './actionTypes'
const initialState = {
    token :null,
    userId :null,
    authError :null,
    authLoading :null,
}   

//Authentication Success//

export const reducer =(state = initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS :
            return{
                ...state,
                token: action.payload.token,
                userId :action.payload.userId,
            }
            default :
                    return state
    }

};