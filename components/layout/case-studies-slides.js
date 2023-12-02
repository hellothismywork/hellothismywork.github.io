import React from 'react';
//import Carousel from 'react-material-ui-carousel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Grid} from '@mui/material';
import { Paper, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function CaseStudiesSlide(props){

    var items = [        
        {
            title: "Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "../../casestudies/case-study-details"
        },
        {
            title: "Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img-2.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "#"
        },
        {
            title: "Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img-3.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "#"
        },
        {
            title: "Case Study Heading Statement Proin aliquam lectus at feugiaz",
            image: "/images/case-study-img-4.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "#"
        }
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    function MySlide(props){
    return (
            <Grid container className="carousel-area">
            <Grid item xs={12} sm={12} className="case-study-item">
                <div style={{ backgroundImage: `url(${(props.item.image)})` }}>
                    <h3>{props.item.title}</h3><br></br>
                    {/* <img src={props.item.image}/> */}
                    <h5>{props.item.tagOne} <span>{props.item.tagTwo}</span></h5>
                    <Button href={props.item.caseStudyLink} variant="outlined" endIcon={<ArrowForward />}></Button>
                </div>
            </Grid>
            {/* <Grid item xs={12} sm={6} className="case-study-item">
                <div style={{ backgroundImage: `url(${(props.item.image)})` }}>
                    <h3>{props.item.title}</h3><br></br>
                    <h5>{props.item.tagOne} <span>{props.item.tagTwo}</span></h5>
                    <Button href={props.item.caseStudyLink} variant="outlined" endIcon={<ArrowForward />}></Button>
                </div>
            </Grid> */}
            </Grid>
    )
}
    
    return (        
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true}>
            {
                items.map( (item, i) => <MySlide key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CaseStudiesSlide;