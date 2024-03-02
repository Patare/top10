import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    headline: {
        position: 'absolute',
        top: 'calc(50% + 30px)', // Adjusted to accommodate arrow buttons (40px height) and a slight margin
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '2.4rem', // Set font size to 2.5rem
        fontWeight: 'bold', // Set font weight to bold
        color: '#333', // Set text color
        zIndex: 1, // Ensure headline is above the image
    },
    sliderContainer: {
        width: '90%', // Set the width to 60% to have a 20% margin on each side
        height: '300%',
        margin: '0 auto', // Center the container horizontally
        borderRadius: '10px',
        overflow: 'hidden',
    },
    slideContent: {
        position: 'relative',
        textAlign: 'center',
        color: '#fff',
        zIndex: 1,
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    // Customize arrow buttons
    arrowButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer', zIndex: 2,
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
    },
}));

const Silde = () => {
    const classes = useStyles();

    // Custom next arrow component
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <Box className={classes.arrowButton} style={{ right: '10px' }} onClick={onClick}>
                <ArrowForwardIcon />
            </Box>
        );
    };

    // Custom previous arrow component
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <Box className={classes.arrowButton} style={{ left: '10px' }} onClick={onClick}>
                <ArrowBackIcon />
            </Box>
        );
    };

    const slides = [
        { name: 'Slide 1' },
        { name: 'Slide 2' },
        { name: 'Slide 3' },
        { name: 'Slide 4' },
        { name: 'Slide 5' },
        { name: 'Slide 6' },
        { name: 'Slide 7' },
        { name: 'Slide 8' },
        { name: 'Slide 9' },
        { name: 'Slide 10' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Box className={classes.heroContainer}>
            <Box className={classes.sliderContainer}>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <Box key={index} className={classes.slideContent}>
                            <Button variant="contained" color="primary">{slide.name}</Button>
                        </Box>
                    ))}
                </Slider>
            </Box>
            <Box>
                {/* <Typography variant="h1" className={classes.headline}>
                    Coupons and Deals From Stores You Love
                </Typography>
                */}
            </Box>  
        </Box>

    );
};

export default Silde;