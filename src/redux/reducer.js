import * as actionTypes from './actionTypes'
const initialState = {
    token :null,
    userId :null,
    authError :null,
    authLoading :null,
    images:[
    {title :null,
    url : null,
    description :null,
    id : null,}
    ],
    imageLoading:null,
    imageError : null,
}   

//Authentication Success//

export const reducer =(state = initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS :
            return{
                ...state,
                token: action.payload.token,
                userId :action.payload.userId,
                authError : '',
                authLoading : action.payload,
            }
        case actionTypes.AUTH_FAILED : 
            
            return{
                ...state,
                authLoading : action.payload,
                authError : action.payload
            }
        case actionTypes.AUTH_LOADING:
            return{
                ...state,
                authLoading: action.payload,
            } 
        case actionTypes.IMAGE_LOADED: 
            return{
               ...state,
               images : action.payload,
               imageLoading : action.payload
            }

        case actionTypes.IMAGE_LOADING:
            return{
                ...state,
                imageLoading : action.payload
            }
        case actionTypes.IMAGE_FAILED :
            let errMsg = null;
            if(action.payload === 404){
                errMsg = "Content Not Found"
            }
            return{
                ...state,
                imageError : errMsg,
                imageLoading : action.payload


            }    
            default :
                    return state
    }

};