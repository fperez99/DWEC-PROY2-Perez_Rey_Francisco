import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React, { useState } from "react";
import logo from "../images/Logo.png"
import {Link, animateScroll as scroll} from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import { Block } from "@material-ui/icons";

const link = [
    {
        id: "about",
        text: "Sobre mi",
        
    },
    {
        id: "academics",
        text: "Mis Estudios",
       
    },
    {
        id: "myworks",
        text: "Proyectos",
        
    },

    {
        id: "contact",
        text: "Contacto",
        
    },
]


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return(
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar }>
                <img src={logo} className={mergeClasses.logo} alt="Logo" height="70"/>
                <List className={classes.menu}>
                    {
                        link.map(({id, text}, index) => (
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>
                            {text}</Link>
                        ))
                    }
                </List>
            </Toolbar>
        </AppBar>
        
        </>
    )
}

const useStyles = makeStyles((theme)=> ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },

    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    logo: {
        height: "1.5rem",
        objectFit: "contain",
        "&:hover":{
            cursor: "pointer"
        }
    },

    menu: {
        [theme.breakpoints.down("xs")]:{
            display: "none"
        },
        "& a" :{
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover":{
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato",
        }
    },

   
  }))

export default Navbar