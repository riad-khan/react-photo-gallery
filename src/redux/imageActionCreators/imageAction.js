import axios from 'axios';
import * as actionTypes from '../actionTypes';


export const imageLoading = isLoading =>{
    return{
        type: actionTypes.IMAGE_LOADING,
        payload : isLoading
    }
};
export const imageFailed = error =>{
    return{
        type : actionTypes.IMAGE_FAILED,
        payload : error

    }
};
export const imageLoaded = (images) =>{
    return{
        type : actionTypes.IMAGE_LOADED,
        payload : images,
    }
};

export const fetchImages =()=>dispatch=>{
    dispatch(imageLoading(true));
    axios.get('http://localhost:3001/images')
    .then(response =>{
         dispatch(imageLoading(false));
         dispatch(imageLoaded(response.data))
       
    })
    .catch(error =>{
            dispatch(imageFailed(error.response.data.error.message));
    })
}