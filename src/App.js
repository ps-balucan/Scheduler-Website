import { useState , useEffect} from 'react';
import "./App.css"


//importing grid
import {Grid, Box, CssBaseline, Typography, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

//components
import Header from './components/Header.js'
import Content from './components/Content.js'
import CustomCard from './components/CustomCard.js'



const useStyles = makeStyles({
  color: {
    background: '#970709'
    },
  secondary:{
    background: '#FFFFFF',
    flex: 1,
    'flex-grow': 1
    
  },
  paper: {
    textAlign: 'center',
    color: '#B23E41',
    
  },
  card:
  {
    marginTop: 30,
  },
});

function App() {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();
  return (
    <Box style={{height: '100vh'}}>
      <CssBaseline/>
      <Grid container direction="row" justify="center" style={{height: '100%'}}>
        <Grid item container direction="row" className={classes.color} style={{'flex-grow': 0 , height: '30%'}}>
          <Grid item xs={"auto"} sm={2} ></Grid>
          <Grid item xs={12} sm={8} align="center">
            <Header></Header>
            <Content data={setSchedules} isLoading={setIsLoading} ></Content>
          </Grid>
          <Grid item xs={"auto"} sm={2} >  </Grid>
        </Grid>
        <Grid item container direction="row" className={classes.secondary} style={{'flex-grow': 1, height: '70%'}} >
          <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} className={classes.card}>
            <CustomCard schedules={schedules} isLoading={isLoading} >  </CustomCard>
            <Paper className={classes.paper}>
              <h3> Instructions</h3>
            Input the subjects you need to take this semester in the search bar above. The website will output a possible schedule you can take based on the released schedules in the UP Diliman website.
            </Paper>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} ></Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
