import { Grid, Button } from "@material-ui/core";
import heroImg from "./hero-img.jpg"
import logo from "../../assets/Logo/The_Detroit_Lofts.png"
import styles from "./styles";



const Hero = () => {
    const classes = styles()
    return (
        <Grid container className={classes.hero}>
            <Grid container item xs={6} justifyContent="center" alignContent="center">
                <Grid item xs={12}>
                    <img src={logo} alt="Detroit Lofts Logo" className={classes.logo}/> 
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="inherit" size="large" className={classes.button}>
                        Book A Tour With Us Today
                    </Button>
                </Grid>
            </Grid>
            <Grid container item xs={6} className={classes.imgContainer}>
               <img src={heroImg} alt="Apartment" className={classes.heroPic}/> 
            </Grid>
        </Grid>
    )
}

export default Hero
