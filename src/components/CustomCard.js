import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid , Container} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 1000,
    marginBottom : 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    justifyContent: "center"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CustomCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    props.schedules.map((i) => (
      <Container>
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
      </Container>
    ))
    

  );
}