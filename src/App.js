import { makeStyles } from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import Myworks from "./components/Myworks";
import Navbar from "./components/Navbar";
import Academics from "./components/Academics";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Navbar/>
     <About title="Sobre mi " id="about" dark={true}/>
     <Academics title="Mis Estudios" id="academics" dark={false}/>
     <Myworks title="Mis trabajos" id="myworks" dark={true}/>
     <Contact title="Contacto" id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme)=> ({
  root: {

  }
}))

export default App;
