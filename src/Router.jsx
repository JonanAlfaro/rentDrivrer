import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from  './layout/home'
import Login from './layout/login'
import SignUp from './layout/signup'

const Router = () => {
    return (  
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/signin" component={SignUp} />
            </Switch>
        </BrowserRouter>   
        )
}

export default Router