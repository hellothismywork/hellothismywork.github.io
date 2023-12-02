import React from 'react';
import {Container, Grid} from '@mui/material';
import { Paper, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

function CaseStudiesAll() {
    var caseItems = [
        {
            title: "Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "../../casestudies/case-study-details"
        },
        {
            title: "2 Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img-2.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "#"
        },
        {
            title: "3 Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img-3.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "#"
        },
        {
            title: "4 Case Study Heading Statement Proin aliquam lectus at feugiat",
            image: "/images/case-study-img-4.jpg",
            tagOne: "Cloud Architecture",
            tagTwo: "Engineering",
            caseStudyLink: "#"
        }
    ]

    function CaseStudyStructure(properties) {
        return (
            
                <Grid item xs={12} sm={6} className="case-study-item">
                    <div style={{ backgroundImage: `url(${(properties.item.image)})` }}>
                        <h3>{properties.item.title}</h3><br></br>
                        {/* <img src={properties.item.image}/> */}
                        <h5>{properties.item.tagOne} <span>{properties.item.tagTwo}</span></h5>
                        <Button href={properties.item.caseStudyLink} variant="outlined" endIcon={<ArrowForward />}></Button>
                    </div>
                </Grid>
        )
    }

    return (
        caseItems.map( (item, i) => <CaseStudyStructure key={i} item={item} /> )
    )
}

export default CaseStudiesAll;