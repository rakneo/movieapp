import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import MovieCardItem from './MovieCardItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {data} from '../utils/MoviesModel';

const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
  ];

  const styles = theme =>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
  });
  
  // One item component
  // selected prop will be passed
  const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };
  
  // All items component
  // Important! add unique key
   const Menu = (list, selected) =>
    list.map(el => {
      const {imdbID, Title, Year, Poster, imdbRating} = el;
  
      return <MovieCardItem id={imdbID} title={Title} year={Year} rating={imdbRating} img={Poster}/>;
    });
  
  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  
  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
  
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
              transition={0.2}
              innerWrapperClass="inner-wrapper"
              selected={4}
              scrollToSelected={true}
              onSelect={this.onSelect}
            />
          </Grid>
      </Grid>

    {/* <GridList className={classes.gridList} cols={2.5}>
        {data.map(movie => {
             const {imdbID, Title, Year, Poster, imdbRating} = movie;
  
             return <MovieCardItem id={imdbID} title={Title} year={Year} rating={imdbRating} img={Poster}/>;
        })}
      </GridList> */}
        </div>
      );
    }
  }

export default withStyles(styles)(MoviesHorizontalList);

