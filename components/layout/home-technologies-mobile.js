import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Container, Grid} from '@mui/material';

function HomeTechnologyMobile(props){

    var items = [        
        {
            title: "Backend",
            imgOne: "/images/1-ms-net.jpg",
            imgTwo: "/images/2-java.jpg",
            imgThree: "/images/3-php.jpg",
        },
        {
            title: "Frontend",
            imgOne: "/images/4-react.jpg",
            imgTwo: "/images/5-angular.jpg",
            imgThree: "/images/6-vue.jpg",
        },
        {
            title: "Mobile",
            imgOne: "/images/7-ios.jpg",
            imgTwo: "/images/8-android.jpg",
            imgThree: "/images/9-flutter.jpg",
        },
        {
            title: "Cloud Development",
            imgOne: "/images/10-azure.jpg",
            imgTwo: "/images/11-aws.jpg",
            imgThree: "/images/12-Google-cloud.jpg",
        }
    ]

    function MySlide(props){
    return (
        <Grid container direction="row" alignItems="center" sx={{ display: { sm: 'none' } }}>
            <Grid item xs={12}>
                <h3>{props.item.title}</h3>
            </Grid>
            <Grid item xs={4} className="case-study-item">
                <img src={props.item.imgOne} />
            </Grid>
            <Grid item xs={4} className="case-study-item">
                <img src={props.item.imgTwo} />
            </Grid>
            <Grid item xs={4} className="case-study-item">
                <img src={props.item.imgThree} />
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

export default HomeTechnologyMobile;