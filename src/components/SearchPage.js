import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });
  

class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery:this.props.match.params.searchQuery,
            responseRecieved:false,
            items:null,
            isLoaded:false
        }
    }

    componentDidMount(){
        const {searchQuery} = this.state;
        fetch(`http://www.omdbapi.com/?apikey=8c452f6e&s=${searchQuery}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                  isLoaded: true,
                  items: result.Search
                });
                
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );
    }

    render(){
        return(
        <Grid container className={""}>
            <Grid item xs={12}>
                <Grid
                    container
                    spacing={16}
                    alignItems="center"
                    direction='column'
                    justify="center"
                >
                

                Hello World
                </Grid>
            </Grid>
        </Grid>
        );
    }
}

export default SearchPage;
