import { Grid, AppBar, Toolbar} from "@material-ui/core";
import NavLinks from "./NavLinks";
import styles from "./styles";


const NavBar = () => {
    const classes = styles()

    return (
        <AppBar className={classes.navbar}>
            <Toolbar className={classes.container}>
                <Grid container>
                    <NavLinks />

                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar