import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { CssBaseline } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchQuery:'',
      searchRequest:false
    }
    this.searchInputChangeHandler.bind(this);
    this.searchInputOnKeyPressHandler.bind(this);
  }

  

  searchInputChangeHandler=(e)=>{
    const searchQuery = e.target.value;
    this.setState({searchQuery});
  }

  searchInputOnKeyPressHandler=(e)=>{
    if(e.key === 'Enter' && this.state.searchRequest === false && this.state.searchQuery !== ''){
      this.setState({searchRequest:true})
    }
  }

  render() {
    const { classes } = this.props;
    const {searchQuery}=this.state
    if(this.state.searchRequest === true){
      return <Redirect to={"/s/"+searchQuery}/>
  }

    return (
      <div className={classes.root}>
          <CssBaseline/>
        <AppBar position="static">
          <Toolbar>
          <Link to='/' className="brand-name-link">
          
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
             Movie App
            </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onKeyPress={this.searchInputOnKeyPressHandler}
                onChange={this.searchInputChangeHandler}
                value={this.state.searchQuery}
              />
            </div>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
       
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);