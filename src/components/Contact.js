import { Button, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.titleandchoices}>
                    <Typography variant= "h5">CONTACTAR CONMIGO</Typography>
                    </div>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField label="Tu nombre"/>
                        <TextField label="Tu correo"/>
                        <TextField label="Mensaje"/>
                    </form>
                    <Button variant="contained">Enviar</Button>
                </Paper>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme)=> ({
    section: {
        minHeight: "100vh",
    },
    sectiondark:{
        background: "#333",
        color: "#fff",
    },

    root: {
        marginTop: theme.spacing(4),
        background: "tomato",
        color: "#fff",
        fontSize: "1.2rem",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "Columnn",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button": {
            backgroundColor: "#fff",
        },

        "& button:hover": {
            backgroundColor: purple[500],
            color: "#fff",
        }
    },

    sectioncontent: {
        maxWidth: "80vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    titleandchoices: {
        "& h5" :{
            marginTop: theme.spacing(4),
        }
    }
  }))

export default Contact