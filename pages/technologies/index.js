import Head from 'next/head'
import { Container, Grid, Box, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import HomeTechnologyMobile from '../../components/layout/home-technologies-mobile';
import CaseStudiesSlide from '../../components/layout/case-studies-slides';

const technologies = () => {
  return (
    <>
      <Head>
        <title>Technologies</title>
        <meta name="keywords" content='Description of Capabilities'/>
      </Head>      
      <div className='technologies-page'> 
        <section className="block-one main-banner scale-up-hor-center">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6} data-aos="zoom-in">
                <h1>Innovative Technologies</h1>
                <Box sx={{mb:5}}><h4>Our skilled software consultants have extensive experience in diverse advanced technologies. Count on us to match the perfect tech for your project's success</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={8}>
                <Box><h4>Finding the perfect technology to further your goals</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-three tech-heading">
          <div>
            <Container>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={8}>
                  
                </Grid>
              </Grid>
              <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ mb: 3, display: { xs: 'none', sm: 'flex' } }} >
                <Grid item xs={12} md={4} sx={{ mb:5}} data-aos="fade-up">
                  <h2>Backend</h2>
                  <p>Behind every innovative digital solution lies a robust backend. Our seasoned team specialises in the intricate world of backend technologies, ensuring your platform operates flawlessly. From databases to APIs, we've got your backend needs covered for a seamless user experience.</p>
                </Grid>
                <Grid item xs={12} md={8} data-aos="fade-down">
                  <Grid className='img-container' container spacing={2} justifyContent="center">
                    <Grid item xs={4} md={3}>
                      <img src='/images/1-ms-net.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/2-java.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/3-php.jpg'></img>
                    </Grid>
                    {/* <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid> */}
                  </Grid>
                </Grid>
              {/* </Grid>
              <Grid container direction="row" alignItems="center" sx={{ mb: 3, display: { xs: 'none', sm: 'block' } }}> */}
                <Grid item xs={12} md={4} sx={{ mb:5}} data-aos="fade-up">
                    <h2>Frontend</h2>
                    <p>In the realm of digital interaction, the frontend is your canvas. Our skilled team excels in frontend technologies, creating captivating interfaces that delight users. From responsive designs to intuitive navigation, we breathe life into your vision, making it accessible and engaging across devices and platforms.</p>
                </Grid>
                <Grid item xs={12} md={8} data-aos="fade-down">
                  <Grid className='img-container' container spacing={2} justifyContent="center">
                    <Grid item xs={4} md={3}>
                      <img src='/images/4-react.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/5-angular.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/6-vue.jpg'></img>
                    </Grid>
                    {/* <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid> */}
                  </Grid>
                </Grid>
              {/* </Grid>
              <Grid container direction="row" alignItems="center" sx={{ mb: 3, display: { xs: 'none', sm: 'block' } }}> */}
                <Grid item xs={12} md={4} sx={{ mb:5}} data-aos="fade-up">
                    <h2>Mobile</h2>
                    <p>In a mobile-driven world, we're your partners in harnessing the potential of mobility. Our adept team specialises in mobile technologies, sculpting seamless apps that bring your services to users' fingertips. From user-friendly interfaces to optimised performance, we ensure your mobile presence stands out in today's dynamic digital landscape.</p>
                </Grid>
                <Grid item xs={12} md={8} sx={{mb: 3}} data-aos="fade-down">
                  <Grid className='img-container' container spacing={2} justifyContent="center">
                    <Grid item xs={4} md={3}>
                      <img src='/images/7-ios.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/8-android.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/9-flutter.jpg'></img>
                    </Grid>
                    {/* <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid> */}
                  </Grid>
                </Grid>
              {/* </Grid>
              <Grid container direction="row" alignItems="center" sx={{ mb: 3, display: { xs: 'none', sm: 'block' } }}> */}
                <Grid item xs={12} md={4} data-aos="fade-up">
                    <h2>Cloud</h2>
                    <p>Unlock boundless opportunities with our mastery of cloud technologies. Seamlessly transition your operations to the cloud, empowering scalability, security, and flexibility. Our adept team ensures your journey to the cloud is smooth, bolstering your business with advanced solutions tailored for the modern digital age.</p>
                </Grid>
                <Grid className='img-container' item xs={12} md={8} data-aos="fade-down">
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={4} md={3}>
                      <img src='/images/10-azure.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/11-aws.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <img src='/images/12-Google-cloud.jpg'></img>
                    </Grid>
                    {/* <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <img src='/images/rectangle.jpg'></img>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
              
              <HomeTechnologyMobile className="mobile-only-tech"/>

            </Container>
          </div>
      </section>
      <section className="block-five a-team-high">
        <Container>
          <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} sx={{pr:2}}>
              <img src='/images/industry-partners.png' data-aos="flip-left"/>
            </Grid>
            <Grid item xs={12} md={6} sx={{pl:2}} data-aos="fade-up">
              <h2>Efficient and Sustainable Software Consultants</h2>
              <p>Experience a transformative partnership with consultants who merge efficiency and sustainability seamlessly. Our expert team navigates the intricate world of software solutions, optimising your operations for the long haul..</p>
              {/* <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />}>ABOUT SONICSOFT</Button> */}
              <Button className="icon-right-btn" variant="contained" href="/contactus" endIcon={<ArrowForward />}>How We Help</Button>
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
      </section> */}
      <section className="block-seven contact-section" data-aos="fade-up">
        <Container>
          <Grid container direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
            <Grid item xs={10} md={6} align="center">
              <h2>Need Software Help? SonicSoft's Got You Covered </h2>
              <p>Start your new project today or find the right software consultant to solve the challenges you're currently facing but can't overcome alone. SonicSoft is here to help your team achieve sonically fast, efficient software solutions.</p> <br/><br/>
<Button href='/contactus' className="icon-right-btn long-btn" variant="contained" endIcon={<ArrowForward />}>Schedule A Consultation</Button>
            </Grid>
          </Grid>
        </Container>
      </section>
      </div>      
    </>
  )
}

export default technologies
