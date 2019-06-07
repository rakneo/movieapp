import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import MovieDetailCard from '../components/MovieDetailCard';
import SearchPage from '../components/SearchPage';
import SearchComponent from '../components/SearchComponent';


function AppRouter(){
    return (
        <Router>
            <Navbar/>
            <div>
            <Route exact path='/' component={HomePage}/>
            <Route path='/:searchQuery/s' component={SearchPage}/>
            <Route path='/:imdbID/m' component={MovieDetailCard}/>
            </div>
        </Router>
    )
}

export default AppRouter;