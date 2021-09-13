import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
    linkDiv : {
        width: 100,
        textAlign: "center",
    },
    link: {
        color: "#000",
        '&:hover': {
            fontWeight: 700,
            textDecoration: "none"
        }
    },
    brand: {
        color: "#000",
        width: 120,
        marginLeft: "auto",
        fontSize: 18,

    }
})

export default styles