import { makeStyles } from "@material-ui/core";
import About from "./../src/components/About";
import Contact from "./../src/components/Contact";
import Myworks from "./../src/components/Myworks";
import Academics from "./../src/components/Academics";
import Header from "./../src/components/Header";
import Footer from "./../src/components/Footer";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Header/>
     <About title="Sobre mi " id="about" dark={true}/>
     <Academics title="Mis Estudios" id="academics" dark={true}/>
     <Myworks title="Mis trabajos" id="myworks" dark={true}/>
     <Contact title="Contacto" id="contact" dark={true}/>
     <Footer/>
    </div>
  );
}

const useStyles = makeStyles((theme)=> ({
  root: {

  }
}))

export default App;
