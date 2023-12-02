import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import ArrowRight from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HomeMobileAccordian() {
  return (
    <div class="home-mobile-accordion">
      <Accordion data-aos="fade-up">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography><span class="number">1</span> Engineering</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <h2>Engineering Software Solutions for Now and the Future</h2>
        <p>You need a Solution Architect or Developer. We come in, evaluate your requirements, and then provide solutions to best suit your needs. Looking at budget, timeline, functional and non-functional requirements, we'll choose the optimal technology while simultaneously upskilling your team as we complete the work.</p><br/><br/>
        
        <ul>
          <li>Your Vision, Your Budget: Collaborative Solutions Tailored for Your Needs</li>
            <li>We provide options based on your requirements</li>
            <li>Time-sensitive quick fixes or robust solutions</li>
            <li>Our consultants join your team for in-depth collaboration</li>
            <li>Technologies that best fit your business requirements</li>
        </ul>
        <Button className="icon-right-btn" variant="contained" endIcon={<ArrowRight />} href="/capabilities/engineering">Explore Engineering</Button>
        <img src="/images/home-tabs-bg-img.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-down">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography><span class="number">2</span> Cloud Architecture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Custom Cloud Solutions for Optimal Security, Scalability & Efficiency</h2>
          <p>If you want to reach for the skies, you need to embrace the full power of modern cloud computing. Every organisation is unique, and so a custom cloud platform strategy is required. Our cloud architects work together with you, ensuring a seamless migration to a tailored solution that hits all your performance targets at sonic speed.</p><br/><br/>

          <ul>
            <li>Tailored Cloud Solutions: Secure, Scalable, and Efficient</li>
            <li>Plan and develop a cloud strategy based on your requirements</li>
            <li>Seamless Setup and Knowledge Sharing</li>
            <li>Testing with Virtual Machines for Guaranteed Success</li>
            <li>Resolving Legacy Apps and Empowering Your Goals with APIs and Microservices</li>
          </ul>
          <Button className="icon-right-btn" variant="contained" endIcon={<ArrowRight />} href="/capabilities/cloud-architecture">Explore Cloud Architecture</Button>
          <img src="/images/Cloud-Architecture.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-up">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography><span class="number">3</span> Agile Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Agile is a Methodology, but it's also a Mindset</h2>
          <p>Enterprise and large SME businesses like to see a  lot of production and want to be part of the process. Our two-week sprints enable us to engage and collaborate with you more, which is excellent for the feedback process. Demos for stakeholders are done on a regular basis, so we can mitigate issues before they become problems.</p><br/><br/>

          <ul>
            <li>Agile: More Than a Methodology, It's a Mindset</li>
            <li>Two week sprints for maximum flexibility</li>
            <li>Regular demos to ensure continuous goal alignment</li>
            <li>Works great for quick fixes</li>
            <li>Increased collaboration through daily virtual stand-ups</li>
          </ul>
          <Button className="icon-right-btn" variant="contained" endIcon={<ArrowRight />} href="/capabilities/agile-delivery">Explore Agile Delivery</Button>
          <img src="/images/Agile-Delivery.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-down">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography><span class="number">4</span> Devops Tools & Processes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Automate Deployments to the Cloud Within a Secure Environment</h2>
          <p>Once we've completed development  of your software project, our Microsoft Azure and AWS certified specialists employ fully automated Continuous Integration/Continuous Delivery (CI/CD) processes to deploy and test your platform on the cloud. Our focus is on ensuring your lifecycle is never disrupted, mitigating bottlenecks when it's time to deploy.</p><br/><br/>

          <ul>
            <li>Streamline Cloud Deployments: Automated and Secure</li>
            <li>Fully certified professionals</li>
            <li>Development and Operations Collaborate as One</li>
            <li>Rapid Performance Improvements in a Stable Environment</li>
            <li>Security Protocols Integrated into Your Builds and Releases</li>
          </ul>
          <Button className="icon-right-btn" variant="contained" endIcon={<ArrowRight />} href="/capabilities/devops-tools">DEVOPS Tools & Processes</Button>
          <img src="/images/Devops-Tools.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-up">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography><span class="number">5</span> Digital Strategy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Embracing the Power of the Cloud Requires a Solid Strategy</h2>
          <p>Cloud computing holds massive promise for your business, but to achieve a successful migration to the cloud and to be able to maintain all your digital systems, you need a partner who collaborates, trains, and empowers your team. We'll explore your data as well as the minds behind your operation to define a strategy that identifies and resolves all potential weaknesses and areas of concern.</p><br/><br/>

          <ul>
            <li>Harness the Cloud: Reach Your Potential with a Solid Strategy</li>
            <li>Crafting your cloud migration strategy</li>
            <li>A comprehensive strategy from initial steps to long-term ambitions</li>
            <li>Reduce overheads, enhance scalability, and boost performance</li>
            <li>Train and empower your team for independent system maintenance</li>
          </ul>
          <Button className="icon-right-btn" variant="contained" endIcon={<ArrowRight />} href="/capabilities/digital-strategy">Explore Digital Strategy</Button>
          <img src="/images/Digital-Strategies.png" />
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-down">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography><span class="number">6</span> User Experience & Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>We Enter a Design 'Flow State' to Ensure Your Users Do the Same</h2>
          <p>Our UX/UI systems, website , and app designers go 'into the zone' when designing software, with the aim of empowering its users to ensure an unimpeded 'flow state' when interacting with your platform. Maximum engagement and minimum disruption are achieved by putting ourselves into users' shoes, mitigating the risk of navigation bottlenecks or cognitive dissonance. Simple and easy, users flow through your system like water.</p><br/><br/>

          <ul>
            <li>In the Same Flow: Crafting Designs for Seamless User Experiences</li>
            <li>Delightfully engaging with aesthetically pleasing and intuitive interfaces</li>
            <li>User-centric researching and analytics</li>
            <li>Integrate your brand identity across every touchpoint</li>
            <li>Our product strategy enhances your brand's unique appeal</li>
          </ul>
          <Button className="icon-right-btn" variant="contained" endIcon={<ArrowRight />} href="/capabilities/user-experience">Explore User Experience & Design</Button>
          <img src="/images/User-Experience.png" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}