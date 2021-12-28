import React, { Component } from 'react'
import Header from './uiComponent/header';
import { Switch,Route,Redirect } from 'react-router-dom';
import Home from './body/Home';
import Login from './auth/auth';
import Gallery from './body/Gallery';




export class mainComponent extends Component {
    render() {
        return (
            <div>
               <Header />
               <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login'  component={Login} />
                    <Route path='/gallery'  component={Gallery} />
                </Switch>
            </div>
        )
    }
}

export default mainComponent
