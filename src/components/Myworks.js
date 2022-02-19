import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import proyects from "./proyects";

const Myworks = ({title, dark, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography className={classes.titu} variant="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        proyects.map(({title, image, link}, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia image={image} className={classes.caratula} titulo="caratula"/>
                                        <CardContent>
                                            <Link href={link} color="primary" target0="_blank"></Link>
                                            {title}
                                        </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                </div>
        </div>
    )
}

const useStyles = makeStyles((theme)=> ({
    titu:{
        paddingTop:"40px",
        textAlign:"center"
    },
    
    section: {
        minHeight: "100vh",
    },
    sectiondark:{
        background: "#000000",
        color: "#fff",
    },
    grid: {
        marginTop: theme.spacing(10)
    },
    card: {
        maxWidth: 345,
        minHeight: 275,
        margin: theme.spacing(3),
    },
    caratula: {
        height: 0,
        paddingTop: '56.25%',
    },
    sectioncontent: {
        maxWidth: "90vw",
        margin: "0 auto",
        padding: theme.spacing(5),
    },
  }))

export default Myworks