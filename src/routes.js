import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Form from './components/Form/Form'
import Post from './components/Post/Post'
import Dashboard from './components/Dashboard/Dashboard'

export default function Routes(props){
    return(
        <Switch>
            <Route path= '/' exact component={Auth}/>
            <Route path= '/dashboard' component={Dashboard}/>
            <Route path= '/post/:postid' component={Post}/>
            <Route path= '/new' component={Form}/>
        </Switch>
    )
}