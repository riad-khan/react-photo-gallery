import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authSuccess =(token, userId) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        payload :{
            token: token,
            userId : userId,
        }
    }
};

export const AuthFailed = errMsg =>{
    return{
        type:actionTypes.AUTH_FAILED,
        payload : errMsg,
    }
};
export const authLoading = isLoading =>{
    return{
        type:actionTypes.AUTH_LOADING,
        payload :isLoading,
    }
};
export const Auth = (email,password,mode)=>dispatch =>{
    const formData = {
        email : email,
        password : password,
    };
    const appKey = 'AIzaSyDbAQcUgENvY_XTl2F_0tr7f8f0FNdq2EA';
    let appUrl = null;
    if(mode === 'sign-up'){
        appUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    }else{
        appUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    };
    axios.post(appUrl + appKey , formData)
    .then(Response =>{
        localStorage.setItem('token',Response.data.idToken);
        localStorage.setItem('userId',Response.data.localId)
        dispatch(authSuccess(Response.data.idToken , Response.data.localId))
    })
    .catch(errMsg => console.log(errMsg))
};
export const authCheck = () => dispatch =>{
    const token = localStorage.getItem('token');
    if(!token){

    }else{
        const userId = localStorage.getItem('userId')
        dispatch(authSuccess(token , userId));
    }
}