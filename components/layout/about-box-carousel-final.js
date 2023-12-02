import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Grid} from '@mui/material';

function AboutBoxCarouselFinal(props){
    var items = [        
        {
            title: "Set the strategy",
            description: "We strongly believe that each client’s needs are different. We provide multiple options, examine the pros and cons, and then come up with a strategy together based on your needs."
        },
        {
            title: "Creating the Right Team",
            description: "Once we understand your project's parameters, we construct a consultant team to match the specialist experience and technical knowledge you require to succeed."
      },
      {
            title: "Delivering Quality",
            description: "Our team works together with you to create a quality solution while simultaneously upskilling your team."
        }
        /*,
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
        } */
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
        <Grid className='about-carousel-mobile' container spacing={4} direction="row" alignItems="center">
            <Grid item xs={12}>
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
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true}>
            {
                items.map( (item, i) => <MySlide key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default AboutBoxCarouselFinal;