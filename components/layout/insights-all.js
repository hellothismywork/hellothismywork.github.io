import React from 'react';
import {Container, Grid} from '@mui/material';
import { Paper, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function InsightsAll() {
    var caseItems = [
        {   
            insightDate: "30 June 2022",
            title: "Communicating Between Microservices",
            image: "/images/insights-img-1.jpg",
            tagOne: "Microservices",
            tagTwo: "Technology",
            caseStudyLink: "../../insights/communicating-between-microservices"
        },
        {
            insightDate: "14 June 2022",
            title: "Architecting Microservices",
            image: "/images/insights-img-2.jpg",
            tagOne: "Architecting",
            tagTwo: "Microservices",
            caseStudyLink: "../../insights/architecting-microservices/"
        },
        {
            insightDate: "30 November 2021",
            title: "Why is UX/UI Design Important",
            image: "/images/insights-img-3.jpg",
            tagOne: "UX UI",
            tagTwo: "Design",
            caseStudyLink: "../../insights/why-is-ux-ui-design-important"
        },
        {
            insightDate: "13 October 2021",
            title: "Why do you need to hire an IT/ Software consulting company for your business?",
            image: "/images/insights-img-4.jpg",
            tagOne: "Consultancy",
            tagTwo: "Development",
            caseStudyLink: "../../insights/why-do-you-need-to-hire-an-it-software-consulting-company-for-your-business"
        }
    ]

    function InsightStructure(properties) {
        return (
            
                <Grid item xs={12} className="case-study-item">
                    <div style={{ backgroundImage: `url(${(properties.item.image)})` }}>
                        <h4>{properties.item.insightDate}</h4>
                        <h3>{properties.item.title}</h3><br></br>
                        {/* <img src={properties.item.image}/> */}
                        <h5>{properties.item.tagOne} | <span>{properties.item.tagTwo}</span></h5>
                        <Button href={properties.item.caseStudyLink} variant="outlined" endIcon={<ArrowForward />}></Button>
                    </div>
                </Grid>
        )
    }

    return (
        caseItems.map( (item, i) => <InsightStructure key={i} item={item} /> )
    )
}

export default InsightsAll;