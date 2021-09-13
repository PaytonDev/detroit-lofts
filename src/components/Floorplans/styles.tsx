import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
    container: {
        textAlign: "center",
        margin: "10vh 0",
        color: "#fff",
        height: "70vh"
    },
    header: {
        margin: "10px 0"
    },
    img: {
        maxHeight: 300,
        transition: "all .5s ease-in-out",
        '&:hover': {
            maxHeight: 310,
        }
    },
    name: {
        
    } 
})

export default styles