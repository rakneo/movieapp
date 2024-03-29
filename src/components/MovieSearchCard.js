import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin:'1em'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width:128,
      height:128
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });


class MovieSearchCard extends Component{

    constructor(props){
        super(props);

    }

    render(){

        const {Poster, Title, Year, Type} = this.props;
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={Poster} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          {Title}
                        </Typography>
                        <Typography gutterBottom>{Year}</Typography>
                        <Typography color="textSecondary">{Type}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
    }
}

export default withStyles(styles)(MovieSearchCard);