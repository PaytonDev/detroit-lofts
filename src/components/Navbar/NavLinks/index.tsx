import { Grid, Link } from "@material-ui/core";
import styles from "./styles";

const links = [
    {
        name:"Home",
        url:"#"
    },
    {
        name:"Floorplans",
        url:"#"
    },
    {
        name:"About Us",
        url:"#"
    },
    {
        name:"Contact",
        url:"#"
    },
    {
        name:"Pay Rent",
        url:"#"
    },
]

const NavLinks = () => {
    const classes = styles()


    return (
        <Grid container>
            {links.map((link, idx) => 
                <Grid item  className={classes.linkDiv} key={idx}>
                    <Link href={link.url} className={classes.link}>{link.name}</Link>
                </Grid>
            )}
                <Grid item className={classes.brand}>
                    Detroit Lofts
                </Grid>
        </Grid>
    )
}

export default NavLinks