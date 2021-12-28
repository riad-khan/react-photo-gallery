import { Formik } from 'formik';
import React, { Component } from 'react';


export class auth extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                   <div className='col-lg-6'>
                       <h3 className='text-center'>Login</h3>
                   <Formik 
                        initialValues={{
                            email:'',
                            password: '',
                            confirmPassword:'',
                        }}
                        onSubmit={(values)=>{
                            console.log(values)
                        }}
                   
                   >

                       {({values,handleSubmit,handleChange})=>(

                            <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>Email :</label>
                            <input type="email" name='email' value={values.email} onChange={handleChange} className='form-control' />
                            <label htmlFor='password'>Password :</label>
                            <input type="password" name='password' value={values.password} onChange={handleChange} className='form-control' />
                            <label htmlFor='email'>Confirm Password :</label>
                            <input type="password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} className='form-control' /><br />
                            <button type='submit' style={{width:'100%',backgroundColor:'#6219EC',color:'white'}} className='btn btn-lg'>Login</button>
                            </form>

                       )}

                     
                    </Formik>
                   </div>
                </div>
               
            </div>
        )
    }
}

export default auth
