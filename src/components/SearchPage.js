import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MovieSearchCard from './MovieSearchCard';

class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery:this.props.match.params.searchQuery,
            responseRecieved:false,
            isLoaded:false,
            items:[]
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
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );
    }

    render(){

        const {items} = this.state;
        return(
        <Grid container className={""}>
            <Grid item xs={12}>
                <Grid
                    container
                    spacing={16}
                    alignItems="center"
                    direction='row'
                    justify="center"
                >
                    {items.map(item=>{
                        const {Title, Year, imdbID, Type, Poster} = item;
                        return <MovieSearchCard Title={Title} Year={Year} Type={Type} Poster={Poster} key={imdbID}/>
                    })}
                </Grid>
            </Grid>
        </Grid>
        );
    }
}

export default SearchPage;
