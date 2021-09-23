import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid , Container, CircularProgress, Box} from '@material-ui/core'
import LoadingCircle from './LoadingCircle';


import Modal from '@material-ui/core/Modal'
import { useState , useEffect} from 'react';
import Calendar from './Modal/Calendar';

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
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    backgroundColor: "#FFF",
  },
});

export default function CustomCard(props) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
    console.log("modal toggled")
  }
  

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
            <Button size="small" onClick={toggleModal}>SHOW IN CALENDAR</Button>
            <Modal open={modal} onClose={toggleModal} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"> 
              <Grid container direction="row" >
                <Grid item container direction="column" xs={"auto"} sm={2}> </Grid>
                <Grid item container direction="column" xs={12} sm={8} className={classes.modal}> 
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Schedule
                  </Typography>
                  
                  <Calendar schedules={props.schedules}></Calendar>
                  
                  <Button onClick={toggleModal} > Close</Button>
                </Grid>
                <Grid item container direction="column" xs={"auto"} sm={2}> </Grid>
              </Grid>
            </Modal>
          </CardActions>
        </Card>
      
       ))
    }
    </Box>

    

  );
}