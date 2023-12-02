import React from 'react';
import {Container, Grid} from '@mui/material';
import { ArrowForward, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
//import { Paper, Button } from '@mui/material';

function InsightsSidebar() {

        return (
            
            <Grid item xs={12} sm={3} className='sidebar'>
            <h3>By Seminda Rajapaksha</h3>
            <br />
            <h3>&#8594; Posts</h3>
                <h3><a href="/insights/communicating-between-microservices">Communicating Between..</a></h3>
                <h3><a href="/insights/architecting-microservices/">Architecting Microservices</a></h3>
                <h3><a href="/insights/why-is-ux-ui-design-important">Why is UX/UI Design Important</a></h3>
                <h3><a href="/insights/why-do-you-need-to-hire-an-it-software-consulting-company-for-your-business">Why do you need to hire..</a></h3>
            {/* '<h3 className='categories'>Categories</h3>
            <h4><a href="#">Microservices</a></h4>
            <h4><a href="#">Business</a></h4>' */}
<br /><br />
            <h3>Follow Us</h3>
            <a href='https://www.facebook.com/sonicsoftau' target='blank'><Facebook /></a> <a href='https://www.linkedin.com/company/sonicsoft' target='blank'><LinkedIn /></a>
          </Grid>
        )

    // return (
    //     caseItems.map( (item, i) => <InsightStructure key={i} item={item} /> )
    // )
}

export default InsightsSidebar;