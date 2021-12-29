import React, { Component } from 'react'
import Header from './uiComponent/header';
import { Switch,Route,Redirect } from 'react-router-dom';
import Home from './body/Home';
import Login from './auth/auth';
import Gallery from './body/Gallery';
import { connect } from 'react-redux';
 import { authCheck } from '../redux/actionCreators';

const mapStateToProps = state =>{
    return{
        token : state.token,
    }
};

const mapDispatchToProps = dispatch =>{
    return{
         authCheck : () => dispatch(authCheck())
    }
}

export class mainComponent extends Component {
    componentDidMount(){
        this.props.authCheck();
       
    }
   
    render() {  
        let routes ={};
        if(this.props.token === null){
            routes = (
                <Switch>
                    <Route path='/authentication'  component={Login} />
                   <Redirect to='/authentication' />
                </Switch>
            )
        }else{
           routes =(
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/gallery'  component={Gallery} />
            <Redirect to='/' />
           </Switch>
           )
        }
        return (
            <div>
               <Header />
               {routes}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (mainComponent)
