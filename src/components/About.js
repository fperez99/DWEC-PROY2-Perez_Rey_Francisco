import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import perfil from "../images/IMG-1828.JPG"
import TypeWriterEffect from "react-typewriter-effect"
import cv from "../images/CV actualizado word.pdf"

const About = ({title, dark, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography className={classes.titu} variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={perfil} className={classes.media} title="picture"/>
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect
                        text= "Hola, mi nombre es Francisco Pérez"
                        textStyle={{fontSize: "2rem", fontWeight: "700px", color: "tomato"}}
                        startDelay={100}
                        cursorColor="black"
                        typeSpeed={100}
                        />

                    <TypeWriterEffect
                        text= "Desarrollador de Aplicaciones Multiplataformas y Web"
                        textStyle={{fontSize: "1.2rem", fontWeight: "500px" }}
                        startDelay={4000}
                        cursorColor="black"
                        typeSpeed={100}
                    />

                    <Typography variant="h6" color="textSecondary">
                        Desarrollador de Aplicaciones Multiplataformas, ahora mismo me encuentro cursando el Grado Superior
                        Desarrollo de Aplicaciones Web y en una empresa trabajando como desarrollador de software.
                        Persona entusiasmada por seguir aprendiendo y poder demostrar todo lo aprendido durante mi etaapa formativa
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href= {cv} download>
                            Descargar CV
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    titu:{
        paddingTop:"20px",
    },
    
    section: {
        minHeight: "100vh",
    },
    sectiondark:{
        background: "#000000",
        color: "#fff",
    },

    sectioncontent:{
        maxWidth: "80vw",
        margin: "0 auto",
    },

    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative"
    },

    media: {
        width: "1000px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },

    cardcontent: {
        marginTop: theme.spacing(2),
        "& h6":{
            marginTop: theme.spacing(6),
        }
    },

    pdfbutton: {
        position: "absolute",
        bottom: "3rem",
        right: "4rem",
        backgroundColor: "tomato",
        padding: theme.spacing(3),

        "&:hover":{
            backgroundColor: "#fff",
        },

        "& a":{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
        },

        "& a:hover": {
            color: "tomato",
        }
    },
  }))

export default About