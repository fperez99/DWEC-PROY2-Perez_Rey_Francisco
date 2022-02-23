import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import DesktopMac from '@material-ui/icons/DesktopMac';
import Work from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  contenedor: {
    paddingTop: "5%",
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline className={classes.contenedor} align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <PhoneIphoneIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Estudios - Desarrollo de Aplicaciones Multiplataformas
            </Typography>
            <Typography>2019-2021</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Prácticas - Hermes Interacive (Puerto de Santa María)
            </Typography>
            <Typography>Abril-Junio 2021</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <DesktopMac/>
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Estudios - Desarrollo de Aplicaciones Web
            </Typography>
            <Typography>2021-Actualidad</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <Work />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Trabajo - Desarrollador de software (Tecnica24)
            </Typography>
            <Typography>Actulidad</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}