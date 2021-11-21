import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'


const Routes = ({data}) => {
    console.log(data)
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/customers" component={Customers} />
            {/* Add all the required routes here .... */}
        </Switch>
    )
}

export default Routes
