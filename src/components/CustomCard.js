import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid , Container, CircularProgress, Box} from '@material-ui/core'
import LoadingCircle from './LoadingCircle';

const useStyles = makeStyles({
  // root: {
  //   minWidth: 200,
  //   margin:"auto",
  //   marginBottom : 5,
  // },
  bullet: {
    // display: 'inline-block',
    // margin: '0 2px',
    // transform: 'scale(0.8)',
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  // title: {
  //   fontSize: 14,
  //   justifyContent: "center"
  // },
  pos: {

  },
});

export default function CustomCard(props) {
  const classes = useStyles();
  

  return (
    // props.isLoading? (
    //   <CircularProgress>
    // ): 
    <Box >
      {
      props.isLoading? 
          (<Card variant="outlined" >
            <CardContent className={classes.bullet}>
              <CircularProgress color="inherit" > </CircularProgress>  
              
            </CardContent>
          </Card>
          ):
       props.schedules.map((i) => (
        
        <Card variant="outlined" className={classes.root}>
          <CardContent>
            <Typography variant="body2" component="p">
            {i}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">SHOW IN CALENDAR</Button>
          </CardActions>
        </Card>
      
       ))
    }
      {/* <Card variant="outlined">
        <CardContent className={classes.bullet}>
          <CircularProgress color="inherit" marginLeft> </CircularProgress>  
        </CardContent>
      </Card> */}
    </Box>

    

  );
}