import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from  '../layout/home'
import Login from '../layout/login'
import SignIn from '../layout/signin'

const BrowserRouter = () => {
    return (  
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registro" component={SignIn} />
            </Switch>
        </BrowserRouter>   
        )
}

export default BrowserRouter