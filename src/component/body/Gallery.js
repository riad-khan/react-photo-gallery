import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom';
import { CardColumns } from 'reactstrap';
import { fetchImages } from '../../redux/imageActionCreators/imageAction';
import GalleryItem from './galleryItem';






const mapDispatchToProps = dispatch =>{
    return{
        fetchImage : ()=>dispatch(fetchImages())
    }
};
const mapStateToProps = state =>{
    return{
        images : state.images
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
        const images  = this.props.images.map(item =>{
            return (<GalleryItem images={item} key={item.id} handleSelectImage = {this.handleSelectImage}  />)
        })
        return (
            <div className='container'>
                <div className='row'>
               

                   <CardColumns>
                   {images}
                   </CardColumns>
                    
                   
           
                </div>
               
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Gallery)
