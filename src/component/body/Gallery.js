import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Alert, CardColumns } from 'reactstrap';
import { fetchImages } from '../../redux/imageActionCreators/imageAction';
import GalleryItem from './galleryItem';
import Spinner from '../Loader/spinner';
import '../Loader/loader.css';






const mapDispatchToProps = dispatch =>{
    return{
        fetchImage : ()=>dispatch(fetchImages())
    }
};
const mapStateToProps = state =>{
    return{
        images : state.images,
        imageLoading : state.imageLoading,
        imageError : state.imageError
    }
}

export class Gallery extends Component {
    state ={
        selectImage : null ,
        
    }
    componentDidMount(){
        this.props.fetchImage();
       
    }
  

    handleSelectImage=images=>{
        // this.setState({
        //     selectImage : images
        // })

        this.props.history.push('/details',{image : images})
    
    }
    render() {
            console.log(this.props.imageError)
            let images = null;
            let errorMsg = null;
           
            if(this.props.imageError !== null){
                errorMsg = (
                <Alert className='col-lg-6 justify-content-center' color='danger'>{this.props.imageError}</Alert>
                   
                )
            }
            let spinner  = null;
            if(this.props.imageLoading === true){
                spinner = (<Spinner />)
            }else{
                 images  = this.props.images.map(item =>{
                    return (<GalleryItem images={item} key={item.id} handleSelectImage = {this.handleSelectImage}  />)
                })
            }
       
        return (
            <div className='container'>
                <div className='row'>
                {spinner}

                {errorMsg !== null ? errorMsg :

                    <CardColumns>
                    {images}
                    </CardColumns>
                
                }
                  
                
                   
           
                </div>
               
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Gallery)
