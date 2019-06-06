import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './style/style.css';
import MovieCarousal from './components/MovieCarousel';
import MoviesHorizontalList from './components/MoviesHorizontalList';

class App extends Component{

   render(){
        return (
            <div>
                <Navbar/>
                {/* <MovieCarousal/> */}
                <MoviesHorizontalList/>
            </div>
            
        )
   }
   
} 

export default App