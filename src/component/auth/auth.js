import { Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { Auth } from '../../redux/actionCreators';
import Spinner from '../Loader/spinner';




const mapDispatchToProps =dispatch =>{
   return{
     Auth : (email,password,mode) =>dispatch(Auth(email,password,mode))
   }
}
const mapStateToProps = state =>{
    return{
        error : state.authError,
        isLoading : state.authLoading,
    }
}

export class auth extends Component {
    state ={
        mode: 'sign-up',
        alertOpen : 'false',
    }


    changeMode=()=>{
        this.setState({
            mode : this.state.mode === "sign-up" ? 'login' : 'sign-up'
        })
    };
    toggleAlert = () =>{
        this.setState({alertOpen:true},()=>{
            window.setTimeout(()=>{
              this.setState({alertOpen:false})
            },2000)
          });
    }

    render() {
            let error = null;
            if(this.props.error !== null){
                error = (
                    <Alert color='danger' isOpen={this.state.alertOpen}>{this.props.error}</Alert>
                )

             
            };
            let form = {};
            if(this.props.isLoading === true){
                form = (<Spinner />)
            }else{
                form = (
                    <Formik 
                    initialValues={{
                        email:'',
                        password: '',
                        confirmPassword:'',
                    }}
                    onSubmit={(values)=>{
                        this.props.Auth(values.email,values.password,this.state.mode)
                    }}

                    validate ={(values) =>{
                        const errors ={};
                        if (!values.email) {
                            errors.email = 'Required';
                          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                          }
                        if(!values.password){
                            errors.password = "password Required";
                        }else if (values.password < 6 ){
                            error.password = "password should be atleast 6 digits"
                        }
                       if(this.state.mode === 'sign-up'){
                        if(!values.confirmPassword){
                            errors.confirmPassword = "confirm Password Required";
                        }else if (values.password !== values.confirmPassword){
                            error.confirmPassword = "password Doesnot matched"
                        }
                       }

                       return errors 
                    }}
               
               >

                   {({values,handleSubmit,handleChange, errors})=>(

                        <form onSubmit={handleSubmit}>
                        <label htmlFor='email'>Email :</label>
                        <input type="email" name='email' value={values.email} onChange={handleChange} className='form-control' />
                        {errors.email && <div id="feedback" className="text-danger">{errors.email}</div>}
                        <label htmlFor='password'>Password :</label>
                        <input type="password" name='password' value={values.password} onChange={handleChange} className='form-control' />
                        {errors.password && <div id="feedback" className="text-danger">{errors.password}</div>}
                        {this.state.mode === 'sign-up'? 
                            <div>
                                 <label htmlFor='email'>Confirm Password :</label>
                                  <input type="password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} className='form-control' />
                                  {errors.confirmPassword && <div id="feedback" className="text-danger">{errors.confirmPassword}</div>}
                            </div>    
                            :null 
                    
                    }


                       <br />
                        <button type='submit' onClick={this.toggleAlert} style={{width:'100%',backgroundColor:'#6219EC',color:'white'}} className='btn btn-lg'>{this.state.mode === 'sign-up' ? 'Sign Up' : 'Login'}</button>
                        <a  className='common-link right mt-3' onClick={this.changeMode}>Switch To {this.state.mode === 'sign-up' ? 'Login' : 'Sign up'}</a>
                        </form>
                        

                   )}

                 
                </Formik>
                )
            }
       
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                   <div className='col-lg-6'>
                       {error}
                       <h3 className='text-center'>{this.state.mode === 'sign-up' ? 'Sign Up' : 'Login'}</h3>
                  
                            {form}
                   </div>
                </div>
               
            </div>
        )
    }
}

export default  connect (mapStateToProps, mapDispatchToProps) (auth)
