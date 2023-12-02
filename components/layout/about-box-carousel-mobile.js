import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Container, Grid} from '@mui/material';

function AboutBoxCarouselMobile(props){

    var items = [        
        {
            title: "Understand Project Requirements",
            description: "Whether you need Engineering, Cloud Architecture, Delivery, DevOps Tools & Processes, Digital Strategy, or UX & Design, we'll build a solution to suit your timeline and budget."
        },
        {
            title: "Set the Strategy",
            description: "We're not one-size-fits-all in our approach. After analysis, we'll provide different options, look at pros and cons, and then come up with a decision together based on your needs."
      },
      {
            title: "Bring Together the Right Consultancy Team",
            description: "Once we understand your project's parameters, we'll construct a consultant team to match the specialist experience and knowledge of technologies required to complete the plan."
        },
        {
            title: "Match Up Specific Team Members",
            description: "Collaboration doesn't simply entail coming in and doing the work. Our specialists match up with inexperienced team members, so you can learn, including knowledge of technologies."
          },
          {
            title: "Build the Processes to Run the Projec",
            description: "Using Agile philosophy for delivery, we'll look at industry best practices, development processes, and the release process to make sure a successful project is delivered."
          },
          {
            title: "Achieve the Optimal Outcome",
            description: "Delivery management and provision of technical guidance, collaborating with your internal team to support and boost their skills and competencies to continue with the project."
        }
    ]

    function MySlide(props){
    return (
        <Grid className='about-carousel-mobile' container spacing={4} direction="row" alignItems="center">
            <Grid item xs={12} sm={6}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>{props.item.title}</h4>
                <p>{props.item.description}</p>
              </div>
            </Grid>
        </Grid>
    )
}
    
    return (
        <Carousel itemClass="carousel-item-padding-40-px">
            {
                items.map( (item, i) => <MySlide key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default AboutBoxCarouselMobile;