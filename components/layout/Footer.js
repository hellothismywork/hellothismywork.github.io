import React from 'react';
import {Container, Grid} from '@mui/material';
import {LocalPostOffice, LocalPhone, LocationOn, Facebook, LinkedIn, Instagram, Twitter} from '@mui/icons-material';

const Footer = () => {
  return (
    <section className="footer">
      <Container>
          <Grid container  direction="row" justifyContent="start" sx={{pt:10}} spacing={4}>
            <Grid item xs={12} align="" sx={{mb:1}}>
              <img src='/images/sonicsoft-logo-white.png'/>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className='footer-info'>
                <div><LocalPhone /></div><h5>Call Us<span>(+61) 3 9119 3003</span></h5>
              </div>
              <div className='footer-info'>
                <div><LocalPostOffice /></div><h5>Email<span>info@sonicsoft.com.au</span></h5>
              </div>
                <div className='footer-info'>
                  <div><LocationOn /></div><h5>Office Location<span>Suite 142, 139 Cardigan St <br/>Carlton VIC 3053</span></h5>
                </div>
            </Grid>
            <Grid item xs={7} md={2}>
              <h6><a href='/capabilities'>Capabilities</a></h6>
              <h6><a href="/capabilities/engineering">Engineering</a></h6>
              {/* <h6><a href='/capabilities/cloud-architecture'>Cloud Architecture</a></h6> */}
              <h6><a href='/capabilities/agile-delivery'>Agile Delivery</a></h6>
              <h6><a href='/capabilities/devops-tools'>Devops Tools & Processes</a></h6>
              <h6><a href='/capabilities/digital-strategy'>Digital Strategy</a></h6>
              <h6><a href='/capabilities/user-experience'>User Experience & Design</a></h6>
            </Grid>
            <Grid item xs={5} md={2}>
              <h6><a href='/about'>About</a></h6>
              <h6><a href='/technologies'>Technologies</a></h6>
              {/* <h6><a href='/casestudies'>Case Studies</a></h6> */}
              <h6><a href='/insights'>Insights</a></h6>
              <h6><a href='/contactus'>Contact</a></h6>
            </Grid>
            <Grid item xs={12} md={2}>
              <h6>Follow Us</h6>
              <a href='https://www.facebook.com/sonicsoftau' target='blank'><Facebook /></a> <a href='https://www.linkedin.com/company/sonicsoft' target='blank'><LinkedIn /></a>
            </Grid>
            <Grid item xs={12} align="center" sx={{mb:1, pt:1}}>
              <p>© 2023 SonicSoft | Cloud Migration | Software consultancy. All rights reserved.</p>
            </Grid>
          </Grid>
        </Container>
    </section>
  )
}

export default Footer
