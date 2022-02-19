import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Technologies from "./Technologies";

const Academics = ({title, dark, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography className={classes.titu} variant="h3">{title}</Typography>
                <Technologies/>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme)=> ({
    titu: {
        textAlign:"center",
        paddingTop: "30px",
    },
    section: {
        minHeight: "70vh",
    },
    sectiondark:{
        background: "#000000",
        color: "#fff",
    },
  }))

export default Academics