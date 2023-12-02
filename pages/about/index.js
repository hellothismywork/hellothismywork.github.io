import Head from 'next/head';
import {Container, Grid, Box, Button} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import AboutAccordion from '../../components/layout/about-accordion';
import Slider from '../../components/layout/home-carousel';
import AboutBoxCarousel from '../../components/layout/about-box-carousel';
import AboutBoxCarouselMobile from '../../components/layout/about-box-carousel-mobile';
import AboutBoxCarouselFinal from '../../components/layout/about-box-carousel-final';
import AOS from 'aos';
import 'aos/dist/aos.css';
const about = () => {  
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="keywords" content='Description of about us'/>
      </Head>
    <div className="about-page" >
      <section className="block-one main-banner scale-up-hor-center">
        <Container>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={12} md={6} data-aos="zoom-in">
              <h1>Empowering Your IT Solutions with Uncompromising Quality</h1>
              <Box sx={{mb:5}}><h4>Our consultants run the gamut, from design to delivery, helping them to build sustainable solutions that tick all the boxes.</h4></Box> 
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-two over-fifteen">
        <Container>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={12} md={6}>
              <div className="content-block" data-aos="fade-up"
     >
                  <h2>Focused on Collaboration and Efficiency</h2>
                  <Box sx={{mb:5}}><h4>Our consultants join your team, set the strategy, and work with you to reach your goals.</h4>
                  <img src='/images/quotes.png'/></Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <p>In the ever-evolving IT arena, businesses, big and small, seek expert external IT consultants. Meet SonicSoft, a seasoned Melbourne-based team with a solid 15-year track record.</p><br/>
              <p>At SonicSoft, sustainability, collaboration, and efficiency are at our core. When you choose us, our consultants seamlessly join your team, devising strategies and working tirelessly to exceed industry best practices.</p><br/>
              <p>We value your data, understanding its significance to your business. That's why we prioritise data security, employing stringent encryption and protection measures throughout the solution's design and development. Partner with us to embrace the future of IT with confidence.</p><br/>
              <p>Embrace peace of mind and unlock your potential with fast solutions and future-proof results.</p>
            </Grid>
          </Grid>  
        </Container>
      </section>
      <section className="block-three our-process">
        <Container data-aos="fade-up">
          <Grid container spacing={2} direction="row" alignItems="center" >
            <Grid item xs={12}>
                <h2>Rational Process for Optimal Outcomes</h2>
                <p>As IT consultants with many years of professional experience, we have refined our processes, and continue to do so via ongoing training, education, and career development. Team members each have varied roles throughout the process, but the final goal is always the same – a quality, cost-effective solution for our clientele that meets all their goals.</p>
            </Grid>
          </Grid>
          {/* <AboutBoxCarousel className="about-carousel" /> */}
          <AboutBoxCarouselFinal />
          
          {/* <Grid container spacing={4} direction="row" alignItems="center">
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>Understand Project Requirements</h4>
                <p>Whether you need Engineering, Cloud Architecture, Delivery, DevOps Tools & Processes, Digital Strategy, or UX & Design, we'll build a solution to suit your timeline and budget. </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>Set the Strategy</h4>
                <p>We're not one-size-fits-all in our approach. After analysis, we'll provide different options, look at pros and cons, and then come up with a decision together based on your needs.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>Bring Together the Right Consultancy Team</h4>
                <p>Once we understand your project's parameters, we'll construct a consultant team to match the specialist experience and knowledge of technologies required to complete the plan.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>Match Up Specific Team Members</h4>
                <p>Collaboration doesn't simply entail coming in and doing the work. Our specialists match up with inexperienced team members, so you can learn, including knowledge of technologies.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>Build the Processes to Run the Project</h4>
                <p>Using Agile philosophy for delivery, we'll look at industry best practices, development processes, and the release process to make sure a successful project is delivered.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="process-box">
                <img src='/images/process-img.png' />
                <h4>Achieve the Optimal Outcome</h4>
                <p>Delivery management and provision of technical guidance, collaborating with your internal team to support and boost their skills and competencies to continue with the project.</p>
              </div>
            </Grid>
          </Grid> */}
        </Container>
      </section>
      <section className="block-four why-our-customers" data-aos="zoom-in">
        <Container>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={12} md={3}>
              <h3>Why You Need  <br/>a Consultant</h3>
            </Grid>
            <Grid item xs={12} md={3}>
              <h4>Flexibility</h4>
              <Box sx={{mb:1}}><h6>You may need short-term help, or more hands on deck.</h6></Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <h4>Skills & Expertise</h4>
              <Box sx={{mb:1}}><h6>Quickly find an expert teammate for your required field.</h6></Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <h4>Cost-Effectiveness</h4>
              <Box sx={{mb:1}}><h6>Only hire a specialist for the period you need them.</h6></Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-five are-we-a">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className="left-col" data-aos="fade-left">
              <h2>Why choose sonicsoft?</h2>
              <Box sx={{mb:5}}><p>In a sea of IT consultancies, finding the perfect fit for your project can be overwhelming. We stand out by offering realistic options that align with your budget and timeline.</p></Box>
              <Button className="icon-right-btn long-btn" variant="contained" endIcon={<ArrowForward />} href="/contactus">Contact A Consultant</Button>
            </Grid>
            <Grid item xs={12} md={6} className="right-col" data-aos="fade-right">
              <AboutAccordion />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-six home-carousel case-study-carousel" data-aos="fade-up">
        <Container>
          <Grid container spacing={4} direction="row">
            <Grid item xs={12} md={5} sx={{pr:2}} className="left-col">
              <h2>Why Trust Sonicoft?</h2>
              <p>It's easy to say you're exceptional at what you do, but it means so much more when coming from our clients – almost 100% of our customers come through word-of-mouth referrals.</p>
            </Grid>
            <Grid item xs={12} md={7} sx={{pl:2}} className="right-col">
              <Slider/>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-seven white-images" data-aos="zoom-in">
        <Container>
          <Grid container direction="row" alignItems="center" sx={{ mb: 3 }}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                  <img src='/images/1-ms-net.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/2-java.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/3-php.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/4-react.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/5-angular.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/6-vue.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/7-ios.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/8-android.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/9-flutter.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/10-azure.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/11-aws.jpg'></img>
                </Grid>
                <Grid item xs={6} md={2}>
                  <img src='/images/12-Google-cloud.jpg'></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-seven contact-section" data-aos="fade-up">
          <Container>
            <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
              <Grid item xs={12} md={6} align="center">
                <h2>Looking for an IT Consultant?</h2>
                <p>Every IT consultancy challenge is unique. Whether you're looking for a short-term or long-term solution, you can trust SonicSoft to provide options tailored to your needs.</p> <br/><br/>
<Button className="icon-right-btn long-btn" variant="contained" endIcon={<ArrowForward />} href="/contactus">CONTACT A CONSULTANT NOW</Button>
              </Grid>
            </Grid>
          </Container>
        </section>
    </div>    
    </>
  )
}

export default about
