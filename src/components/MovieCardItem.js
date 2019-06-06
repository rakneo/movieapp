import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        width:200,
        height:350,
        position: 'relative',
      },
      media: { 
        height:0,
        paddingTop:'177.78%',
      },
      overlay: {
        width:'100%',  
        position: 'absolute',
        top: '70%',
        left: '0',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)'
     }
})

class MovieCardItem extends Component{


    render(){
        const {id,title,year,rating,img,classes} = this.props;
        return(
            <Card className={classes.card} key={id}>
                <CardMedia
                className={classes.media}
                image={img}
                title={title}
                />
                <CardContent className={classes.overlay}>
                <Typography gutterBottom variant="body2" component="p" style={{color:'white'}}>
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="p"  style={{color:'white'}}>
                    Year: {year}
                </Typography>
                <Typography gutterBottom variant="body1" component="p"  style={{color:'white'}}>
                    Rating: {rating}
                </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(MovieCardItem);