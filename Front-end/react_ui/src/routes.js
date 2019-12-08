import React from 'react';
import { Route } from 'react-router-dom'
import Trending from './Containers/Trending';
import SearchResult from './Containers/SearchResult'
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import WatchlistView from "./Containers/WatchlistView";

import UserView from "./Containers/UserView";
const BaseRouter = () => (

    <div>
        <Route exact path='/' component={Trending} />
        <Route exact path='/searchResult/:searchQuery' 
                // to pass props to the component
                render={(routeProps) => (
                <SearchResult header="Search Result" {...routeProps} />)}
        />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/signup/" component={Signup} />
        <Route exact path="/watchlist/" component={WatchlistView} />
        
        <Route exact path="/user/" component={UserView} />
    </div>


);

export default BaseRouter;