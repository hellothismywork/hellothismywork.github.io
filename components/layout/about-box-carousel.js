import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Container, Grid} from '@mui/material';

function AboutBoxCarousel(props){

    var items = [        
        {
            title: "Understand Project Requirements",
            description: "Whether you need Engineering, Cloud Architecture, Delivery, DevOps Tools & Processes, Digital Strategy, or UX & Design, we'll build a solution to suit your timeline and budget.",
            titleTwo: "Set the Strategy",
            descTwo: "We're not one-size-fits-all in our approach. After analysis, we'll provide different options, look at pros and cons, and then come up with a decision together based on your needs.",
            titleThree: "Bring Together the Right Consultancy Team",
            descThree: "Once we understand your project's parameters, we'll construct a consultant team to match the specialist experience and knowledge of technologies required to complete the plan."
        },
        {
            title: "Match Up Specific Team Members",
            description: "Collaboration doesn't simply entail coming in and doing the work. Our specialists match up with inexperienced team members, so you can learn, including knowledge of technologies.",
            titleTwo: "Build the Processes to Run the Projec",
            descTwo: "Using Agile philosophy for delivery, we'll look at industry best practices, development processes, and the release process to make sure a successful project is delivered.",
            titleThree: "Achieve the Optimal Outcome",
            descThree: "Delivery management and provision of technical guidance, collaborating with your internal team to support and boost their skills and competencies to continue with the project."
        }
    ]

    function MySlide(props){
    return (
        <Grid className='about-carousel' container spacing={4} direction="row" alignItems="center">
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>{props.item.title}</h4>
                <p>{props.item.description}</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>{props.item.titleTwo}</h4>
                <p>{props.item.descTwo}</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>{props.item.titleThree}</h4>
                <p>{props.item.descThree}</p>
              </div>
            </Grid>
        </Grid>
    )
}
    
    return (
        <Carousel>
            {
                items.map( (item, i) => <MySlide key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default AboutBoxCarousel;