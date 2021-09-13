import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid'
import slide1 from '../../assets/Carousel/carouselslide1.jpg'
import slide2 from '../../assets/Carousel/carouselslide2.jpg'
import styles from './styles'

const Gallery = () => {
    const classes = styles()
    const items = [
        {
            name: "Located in the Heart of Tulsa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est minus illo exercitationem? Maiores fugiat et consequuntur modi esse odit officiis quidem distinctio nisi consequatur.",
            url: slide1
        },
        {
            name: "A Beautiful Urban Experience",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam maxime fugiat assumenda debitis harum quam! Nulla magnam consequuntur, ipsam officia doloribus libero voluptas, temporibus eum, quos incidunt quae aliquam",
            url: slide2
        }
    ]

    return (
        <Grid container className={classes.container} justifyContent='center' >
                <h1>About Us</h1>
            <Carousel className={classes.carousel} indicators={false} interval={6000}>
                {
                    items.map( (item, i) => 
                    <Grid container alignContent="center" >
                        <Grid item xs={6} className={classes.imgContainer}>
                            <img src={item.url} alt={`slide${i}`} className={classes.img}/>
                        </Grid>
                        <Grid container item key={i} xs={6} justifyContent="center" alignContent="center">
                            <Grid item >
                                <h2>{item.name}</h2>
                                <p className={classes.desc}>{item.description}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    )
                }
            </Carousel>
        </Grid>
    )
}

export default Gallery