import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import Divider from '@material-ui/core/Divider';
import {data} from '../utils/MoviesModel';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin:'2em'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  card: {
    width:200,
    height:350,
    position: 'relative',
  },
  media: { 
    height:0,
    paddingTop:'177.78%',
  },
});


class MovieDetailCard extends Component{
    render(){
        const {classes} = this.props;
        const id =  this.props.match.params.imdbID;

        const md = data.find((item)=>{
          return item.imdbID === id;
        });


        return(
            <div className={classes.root}>
                <Grid container spacing={24} justify="center">
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                        <Grid container className={classes.root} spacing={16}>
                            <Grid item xs={12}>
                              <Grid container spacing={16}>
                                <Grid item>
                                  <Card className={classes.card} elevation={5}>
                                    <CardMedia
                                    className={classes.media}
                                    image={md.Poster}
                                    title={md.Title}
                                    />
                                  </Card>
                                </Grid>
                                <Grid item>
                                  <Grid container spacing={24} cols={2} justify="flex-end">
                                    <Grid item>
                                      <Typography variant="h5" component="p">
                                        {md.Title} ({md.Year})
                                      </Typography>
                                      <Typography variant="body1" component="p">
                                       {md.Rated} | {md.Runtime} | {md.Genre} | {md.Released} ({md.Country})
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                    {(md.imdbRating === "N/A")?<Typography gutterBottom variant="body1" component="p"  style={{color:'white',fontSize:'0.75rem'}}>
                                    N/A
                                      </Typography>:
                                      <div>
                                      <StarRatings
                                      rating={md.imdbRating/10}
                                      starDimension="60px"
                                      starRatedColor="yellow"
                                      numberOfStars={1}
                                      name='rating'/>
                                      {md.imdbRating}/10
                                    </div>
                                    }
                                    </Grid>
                                  </Grid>
                                  <Divider variant="middle" />
                                  <Grid item >
                                  <div className="storyline-div">
                                      <Typography variant='h5' component="p">
                                        Storyline
                                      </Typography>
                                      <Typography variant="body2" component="p">
                                      {md.Plot}
                                      </Typography>
                                      <Divider/>
                                      <Typography variant="body1" component="p">
                                          Director: {md.Director}
                                      </Typography>
                                      <Typography variant="body1" component="p">
                                          Writer: {md.Writer}
                                      </Typography>
                                      <Typography variant="body1" component="p">
                                        Actors: {md.Actors}
                                      </Typography>
                                  </div>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(MovieDetailCard);