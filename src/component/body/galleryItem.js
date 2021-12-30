import React from 'react'
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle} from "reactstrap"
const GalleryItem = props => {
    return (
        <div>
            <Card style={{margin:"10px"}} className='img-border'>
                <CardBody style={{cursor: "pointer"}} onClick={()=>props.handleSelectImage(props.images)} >
                    <CardImg   style={{opacity : 0.5}} alt={props.images.title} src={props.images.url}></CardImg>
                    <CardImgOverlay>
                        <CardTitle  >{props.images.title}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default GalleryItem
