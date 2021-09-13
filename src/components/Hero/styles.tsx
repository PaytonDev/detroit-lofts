import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    hero: {
        maxHeight: "100vh",
        overflow: "hidden",
        color: "#fff",
        textAlign:"center"
    },
    heroPic:{
       objectFit: "cover",
       maxWidth: "50vw"
    },
    logo: {
       maxHeight: 500,
       maxWidth: 500
    },
    imgContainer: {
        maxHeight: "100vh"
    },
    button: {
        borderRadius: 1,
        fontFamily: "inherit",
        maginTop: 0,
        '&:hover': {
            background: "#fff",
            color: "#000",
            
        }
    }
})

export default styles