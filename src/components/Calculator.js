import { makeStyles, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import './../styles/Styles.css'

const Calculator = ({title, dark, id}) => {
    const classes = useStyles();
    const [nro1, setNro1] = useState(0);
    const [nro2, setNro2] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [operacion, setOperacion] = useState('Sumar');

    const calcular = () => {
        if (operacion=="Sumar")
            return parseFloat(nro1) + parseFloat(nro2);
        else if (operacion=="Restar")
            return parseFloat(nro1)-parseFloat(nro2);
        else if (operacion=="Multiplicar")
            return parseFloat(nro1)*parseFloat(nro2);
        else if (operacion == "Dividir")
            return parseFloat(nro1)/parseFloat(nro2);
    }

    useEffect(() =>{
        setResultado(calcular())
    }, [nro1,nro2,operacion]);

    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
            
                    
                <label className={classes.margen}>Primer Numero</label>
                <input
                 type="number"
                 value={nro1}
                 onChange={(e) => setNro1(e.target.value)}/>

                <label>Segundo Numero</label>
                <input
                type="number"
                value={nro2}
                onChange={(e) => setNro2(e.target.value)}/>
                
                <select onChange={(e) => setOperacion(e.target.value)}>
                <option>Sumar</option>
                <option>Restar</option>
                <option>Multiplicar</option>
                <option>Dividir</option>
                </select>

                <label>Resultado {resultado}</label>
                <div className="App"></div>
            </div>
        </div>

    )
}

const useStyles = makeStyles((theme)=> ({
    
    section: {
        minHeight: "100vh",
    },
    sectiondark:{
        background: "#000000",
        color: "#fff",
    },
    
    root: {
        marginTop: theme.spacing(8),
        color: "#fff",
        fontSize: "1.2rem",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "Columnn",
        justifyContent: "space-between",
        padding: theme.spacing(8),
        "& button": {
            backgroundColor: "#fff",
        },

        "& button:hover": {
            backgroundColor: purple[500],
            color: "#fff",
        }
    },

    sectioncontent: {
        maxHeight:"600px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

  }))

export default Calculator