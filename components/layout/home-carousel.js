import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Slider(props){

    var items = [        
        {
            description: "I am really impressed by the quality of services I received from sonicsoft. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of sonicsoft and I will definitely use your services again.",
            image: "../images/dennis.jpeg",
            name: "Dennis Lau",
            title: "Customer"
        },
        {
            description: "We have been supported by sonicsoft. over several years now with our Facility booking web application. We have little expertise in managing a web application and sonicsoft has always been available to help. They have made program modifications, installed our system on several different servers, developed add-on facilities to enhance our software's scope, and given us many hours of advice and guidance. All in all we would thoroughly recommend sonicsoft as managers, and developers of software",
            image: "../images/wendy.jpg",
            name: "Wendy Cutler",
            title: "Customer"
        }
    ]

    function MySlide(props){
    return (
        <div className="carousel-area">
            <p>{props.item.description}</p><br></br>
            <img src={props.item.image}/>
            <h5>{props.item.name} <span>{props.item.title}</span></h5><br/><br/><br/><br/>
        </div>
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

export default Slider;