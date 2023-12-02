import Head from 'next/head'
import {Container, Grid, Box} from '@mui/material';
import {LocalPostOffice, LocalPhone, LocationOn} from '@mui/icons-material';
import ContactForm from '../../components/layout/homeContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="keywords" content='Description of Contact Us'/>
      </Head>
      <div className='contact-us-page'>        
        <section className="block-one main-banner scale-up-hor-center">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6} data-aos="zoom-in">
                <h1>Need a Consultation?</h1>
                <Box sx={{mb:5}}><h4>Our team understands that every idea or solution should be approached in a unique way. 
Your success is considered to be our success.</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two get-in-touch">
          <Container>
            <Grid container spacing={2} direction="row" data-aos="zoom-in">
              <Grid item xs={12}>
                <h2>Get In Touch</h2>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className='footer-info'>
                  <div><LocalPhone /></div><h5>Call Us<span>(+61) 3 9119 3003</span></h5>
                </div>
              </Grid><Grid item xs={12} md={3}>
                <div className='footer-info'>
                  <div><LocalPostOffice /></div><h5>Email<span>touchbase@sonicsoft.com.au</span></h5>
                </div>
              </Grid><Grid item xs={12} md={3}>
                <div className='footer-info'>
                  <div><LocationOn /></div><h5>Office Location<span>Melbourne, Australia</span></h5>
                </div>
              </Grid>
              {/* <Grid item xs={12} md={4}>
                <div className='footer-info'>
                  <div><LocationOn /></div><h5>Office Location<span>Melbourne, Australia</span></h5>
                </div>
            </Grid> */}
            </Grid>
          </Container>
        </section>
        <section className="block-seven contact-section">
          <Container>
            <Grid container  direction="row" justifyContent="center" /*sx={{m:0}}*/ spacing={4}>
              <Grid item xs={12} md={10} align="" sx={{mb:10}} data-aos="fade-up">
                <h2>Send An Enquiry</h2>
                <p>Our team understands that every idea or solution should be approached in a unique way. <br />
Your success is considered to be our success.</p>
              </Grid>
              <Grid item xs={12} md={10} data-aos="fade-down">
                <ContactForm/>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>    
    </>
  )
}

export default ContactUs
