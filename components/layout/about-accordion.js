import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>We provide you with options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our team is experienced in working on projects from the point of inception, or coming in as experts to help bring a failing project across the finish line. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Our collaborative approach</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          With 15+ years of experience we bring a wide range of skills and technical knowledge to your project. Our specialists work together with your team, upskilling them to help run your business better. 
          </Typography>
          {/* <Typography>
          At the same time, collaboration means we request and are open to feedback from you the client, and other consultants, so we can constantly improve and fine-tune our own processes.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Custom-made solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We analyse the needs of each customer to build the perfect solution to match the problem being solved. From quick fixes that help you overcome an immediate business blocker, to higher investment long term solutions to avoid those blockers in the future. 
           </Typography>
           {/* <Typography>Once we join your team, our consultants share from their knowledge and experience, so your team members can steer the proverbial boat once we've completed our mission. We enjoy empowering our collaborators, as opposed to making it necessary for us to come back again.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Custom-made teams</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Capitalising on our access to a broad range of experienced consultants we put together the perfect team to match your needs. Our ability to create a team to tackle even the toughest projects, efficiently, and economically, is one of the biggest strengths we bring to the table.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>We take your data seriously</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We understand the value of your data. We employ stringent encryption and protection measures to ensure data security in the design of the solution and during its development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>We take access to your data seriously</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When working with your data, we don't take our access lightly. It's our responsibility not to misuse it, and we're grateful for your trust. This is what we mean by becoming a part of your team; we're not being figurative here. We'll implement best practices to protect your data, including encryption and other forms of insurance to ensure its security is paramount.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}