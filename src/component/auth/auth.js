import { Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Auth } from '../../redux/actionCreators';


const mapDispatchToProps =dispatch =>{
   return{
     Auth : (email,password,mode) =>dispatch(Auth(email,password,mode))
   }
}
const mapStateToProps = state =>{
    return{
        state
    }
}

export class auth extends Component {
    state ={
        mode: 'sign-up',
    }


    changeMode=()=>{
        this.setState({
            mode : this.state.mode === "sign-up" ? 'login' : 'sign-up'
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                   <div className='col-lg-6'>
                       <h3 className='text-center'>{this.state.mode === 'sign-up' ? 'Sign Up' : 'Login'}</h3>
                   <Formik 
                        initialValues={{
                            email:'',
                            password: '',
                            confirmPassword:'',
                        }}
                        onSubmit={(values)=>{
                            this.props.Auth(values.email,values.password,this.state.mode)
                        }}
                   
                   >

                       {({values,handleSubmit,handleChange})=>(

                            <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>Email :</label>
                            <input type="email" name='email' value={values.email} onChange={handleChange} className='form-control' />
                            <label htmlFor='password'>Password :</label>
                            <input type="password" name='password' value={values.password} onChange={handleChange} className='form-control' />

                            {this.state.mode === 'sign-up'? 
                                <div>
                                     <label htmlFor='email'>Confirm Password :</label>
                                      <input type="password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} className='form-control' />
                                </div>    
                                :null 
                        
                        }


                           <br />
                            <button type='submit' style={{width:'100%',backgroundColor:'#6219EC',color:'white'}} className='btn btn-lg'>{this.state.mode === 'sign-up' ? 'Sign Up' : 'Login'}</button>
                            <a  className='common-link right mt-3' onClick={this.changeMode}>Switch To {this.state.mode === 'sign-up' ? 'Login' : 'Sign up'}</a>
                            </form>
                            

                       )}

                     
                    </Formik>
                            
                   </div>
                </div>
               
            </div>
        )
    }
}

export default  connect (mapStateToProps, mapDispatchToProps) (auth)
