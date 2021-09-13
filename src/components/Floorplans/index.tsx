import Box from "@material-ui/core/Box";
import Grid  from "@material-ui/core/Grid";
import fp1 from "../../assets/Floorplans/fp1.jpg"
import styles from "./styles";

const plans = [
    {
        name: "Jefferson",
        imgURL: fp1,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, adipisci. "

    },
    {
        name: "Thomas",
        imgURL: fp1,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, adipisci."

    },
    {
        name: "Smith",
        imgURL: fp1,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, adipisci."

    },
    {
        name: "Brandon",
        imgURL: fp1,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, adipisci."

    },
]


const Floorplans = () => {
    const classes = styles()

    return (
        <Grid container className={classes.container} justifyContent="center">
            <Grid item>
                <h1>Floorplans</h1>
            </Grid>
            <Grid container md={12} justifyContent="space-around">
                {plans.map((plan) => 
                    <Grid item lg={3}>
                        <img src={plan.imgURL} alt="floorplan" className={classes.img}/>
                        <p className={classes.name}>{plan.name}</p>
                        <p>{plan.description}</p>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default Floorplans