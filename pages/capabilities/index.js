import Head from 'next/head';
import {Container, Grid, Box, Button} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import CaseStudiesSlide from '../../components/layout/case-studies-slides';
import AOS from 'aos';
import 'aos/dist/aos.css';
const capabilities = () => {
  return (
    <>
      <Head>
        <title>Our Capabilities</title>
        <meta name="keywords" content='Description of Capabilities'/>
      </Head>      
      <div className='capabilities-page'> 
        <section className="block-one main-banner scale-up-hor-center">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6} data-aos="zoom-in">
                <h1>Our Capabilities</h1>
                <Box sx={{mb:5}}><h4>Delivering optimal software solutions is about working with the best people and the best technologies. Our experts excel in their fields and in connecting and collaborating with you.</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={8}>
                <Box><h4>Elevate your organisation's digital transformation journey.</h4></Box>
                {/* <Box><h4>No matter what type of digital transformation your organisation requires to excel and become a leader in your industry's cloud native future, our team will strategically plan, develop, and deploy your project on time and to a high-quality standard.</h4></Box> */}
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-three capability-blocks">
          <Container>
            <Grid container spacing={2} sx={{pb:10}} alignItems="center" data-aos="fade-left">
              <Grid item xs={12} md={6} >
                <h2>Engineering</h2>
                <Box sx={{mb:5}}>
                  <p>Our Solution Architects and Developers analyse your requirements and provide options for time-sensitive solutions or long-term projects collaborating with you to match your budget and timeline.</p>
                </Box>
                <div className='button-block'>
                  <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/capabilities/engineering">Explore Engineering</Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className="w-100" src='/images/Engineering-full.png' data-aos="fade-up"/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{pb:10}} direction={{md:"row-reverse"}} alignItems="center" data-aos="fade-right">
              <Grid item xs={12} md={6}>
                <h2>Cloud Architecture</h2>
                <Box sx={{mb:5}}>
                  <p>In a fiercely competitive industry, shedding outdated software and systems is crucial. Embrace scalability, growth, and innovation to thrive in a cloud-native future. By prioritising performance, security, and efficiency, you secure your success and stand out from the competition.</p>
                </Box>
                <div className='button-block'>
                  <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/capabilities/cloud-architecture">Explore Cloud Architecture</Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className="w-100" src='/images/Cloud-Architecture-full.png' data-aos="fade-down"/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{pb:10}} alignItems="center" data-aos="fade-left">
              <Grid item xs={12} md={6}>
                <h2>Agile Delivery</h2>
                <Box sx={{mb:5}}><p>Our approach to collaboration, feedback reviews, and shared knowledge empowers our team. Continuous improvement and transparent progress updates drive high-speed output, while enabling us to adjust scope and find solutions as challenges arise.</p>
                </Box>
                <div className='button-block'>
                  <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/capabilities/agile-delivery">Explore Agile Delivery</Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className="w-100" src='/images/Agile-Delivery-full.png' data-aos="fade-up"/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{pb:10}} direction={{md:"row-reverse"}} alignItems="center" data-aos="fade-right">
              <Grid item xs={12} md={6}>
                <h2>DevOps Tools & Processes</h2>
                <Box sx={{mb:5}}><p>With our fully automated Continuous Integration/Continuous Delivery (CI/CD) processes your platform will be swiftly and securely transitioned to the cloud. Wave goodbye to disruptions and embrace enhanced efficiencies.</p></Box>
                <div className='button-block'>
                  <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/capabilities/devops-tools">Explore Devops Tools & Processes</Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className="w-100" src='/images/Devops-Tools-full.png' data-aos="fade-down"/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{pb:10}} alignItems="center" data-aos="fade-left">
              <Grid item xs={12} md={6}>
                <h2>Digital Strategy</h2>
                <Box sx={{mb:5}}><p>Transitioning to the cloud demands a robust strategy. Our software experts possess the essential soft skills to train and upskill your team. By working together with your team and understanding your organisation, we uncover potential weaknesses and address concerns, ensuring a seamless digital transformation.</p></Box>
                <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/capabilities/digital-strategy">Explore Digital Strategy</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className="w-100" src='/images/Digital-Strategies-full.png' data-aos="fade-up"/>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{pb:10}} direction={{md:"row-reverse"}} alignItems="center" data-aos="fade-right">
              <Grid item xs={12} md={6}>
                <h2>User Experience & Design</h2>
                <Box sx={{mb:5}}><p>In an era of fleeting attention and diverse methods of information access, we conduct research to ensure your platform is intuitive and accessible to all users. We eliminate navigation hurdles and cognitive dissonance, giving a seamless experience to your users.</p></Box>
                <div className='button-block'>
                  <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/capabilities/user-experience">Explore User Experience & Design</Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img className="w-100" src='/images/User-Experience-full.png' data-aos="fade-down"/>
              </Grid>
            </Grid>
          </Container>
        </section>
       {/* <section className="block-four case-studies-slide">
          <Container>
            <Grid container spacing={4} direction="row" justifyContent="center">
              <Grid item xs={12}>
                <h2>Case Studies</h2>
              </Grid>
              <Grid item xs={12}>
                <CaseStudiesSlide/>
              </Grid>
            </Grid>
          </Container>
  </section>  */}
        <section className="block-seven contact-section" data-aos="fade-up">
          <Container>
            <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
              <Grid item xs={12} md={6} align="center">
                {/* <h2>Now You Know We're Capable, Get in Touch!</h2> */}
                <h2>Embark on Your Next Project or Partner with Our Expert Consultants</h2>
                <p>Start your new project today or find the right software consultant to solve the challenges you're currently facing but can't overcome alone. SonicSoft is here to help your team achieve sonically fast, efficient software solutions.</p> <br/><br/>
<Button className="icon-right-btn long-btn" variant="contained" endIcon={<ArrowForward />} href="/contactus">Schedule A Consultation</Button>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>      
    </>
  )
}

export default capabilities
