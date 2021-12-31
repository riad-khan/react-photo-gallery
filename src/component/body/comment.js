import axios from 'axios';

import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class comment extends Component {
    constructor(props){
        super(props);
        this.state={
            formData :{
                name:'',
                comment : '',
                imageId : null
            }
        }
    }
    onChangeHandler = (event) =>{
       this.setState({
           formData:{
               ...this.state.formData,
               [event.target.name] : event.target.value,
               imageId : this.props.imageId

           }
       })
    };
    onSubmitHandler = ()=>{
        const data = this.state.formData;
        axios.post('http://localhost:3001/comments',data)
        .then(response =>console.log(response))
        .catch(error =>console.log(error.response))
    };
    render() {
       
        return (
            <div className='container col-lg-12'>
                <h3 className='text-center'>Add Comments:</h3>
                <div >
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Your name</label>
                                <input type="text" className="form-control" value={this.state.formData.name} onChange={this.onChangeHandler}  name='name'  placeholder="Enter your name" />
                             </div>
                             <div className="form-group">
                                <label htmlFor="exampleInputEmail1">your Comments</label>
                               <textarea className='form-control' name='comment'onChange={this.onChangeHandler} value={this.state.formData.comment}></textarea>
                            
                             </div>
                             <Button  style={{backgroundColor:'#6219EC', color:'white'}}  className='btn btn-lg' onClick={this.onSubmitHandler}>Comment</Button>
                        </form>
                </div>
            </div>
        )
    }
}

export default comment

