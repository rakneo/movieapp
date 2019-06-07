import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import MovieCardItem from './MovieCardItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {data} from '../utils/MoviesModel';

   const Menu = (list, selected) =>
    list.map(el => {
      const {imdbID, Title, Year, Poster, imdbRating} = el;
  
      return <MovieCardItem id={imdbID} title={Title} year={Year} rating={imdbRating} img={Poster} key={imdbID}/>;
    });
  
  
  
  const selected = 'item1';
  
  class MoviesHorizontalList extends Component {
    constructor(props) {
      super(props);
      // call it again if items count changes
      this.menuItems = Menu(data, selected);
    }
  
    state = {
      selected
    };
  
    onSelect = key => {
      this.setState({ selected: key });
    }


    componentWillUnmount(){
      this.setState({})
    }
  
  
    render() {
      const { selected } = this.state;
      // Create menu from items
      const classes = this.props;
      const menu = this.menuItems;
  
      return (
        <div className="App">
           <Grid container 
                direction="row"
                justify="center"
                alignItems="center"
                style={{marginTop:'1em'}}> 
           <Grid item xs={12}>
            <ScrollMenu
              data={menu}
              selected={selected}
              hideArrows={true}
              wheel={false}
              transition={0.4}
              selected={4}
              scrollToSelected={true}
              onSelect={this.onSelect}
            />
          </Grid>
      </Grid>
        </div>
      );
    }
  }

export default MoviesHorizontalList;

