import { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import HomeTabs from '../components/layout/home-tabs';
import Slider from '../components/layout/home-carousel';
import ContactForm from '../components/layout/homeContactUs';
import HomeTechnologyMobile from '../components/layout/home-technologies-mobile';
import HomeMobileAccordian from '../components/layout/home-mobile-accordian';

const videoIntro = "./videos/01.mp4";
const videoLoop = "./videos/02.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Homepage = () => {

  const [vidIndex, setVidIndex] = useState(0);
  const [count, setCount] = useState(null);

  const ref = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
      if (vidIndex === 0 && ref.current) {
        ref.current.play();
        ref.controls = false;
      }
    }, 500);
    return () => clearTimeout(timer)


  }, [ref, vidIndex]);

  return <>
    <Head>
      <title>sonicsoft</title>
      <meta name="keywords" content='Plan your next project with right people for a Cloud Native Future' />
    </Head>
    <div className="home">
      <section className="block-one">
        <Container>
          <Grid container spacing={2}>
            <Grid className='left-col' item xs={12} md={6} data-aos="zoom-in-up">
              <h1>The Right Partner For Your Software Projects</h1>
              <Box sx={{ mb: 5 }}><h4>The team to collaborate with when you're looking for options - fast, economical, short-term solutions, or future-focused, proactive, long-term outcomes.</h4></Box>
              <Button className="icon-right-btn" variant="contained" href="/contactus" endIcon={<ArrowForward />}>How We Help</Button>
            </Grid>
            <Grid item xs={12} md={6} data-aos="flip-right">
              {/* {count && <video
                style={{ display: vidIndex === 1 ? "none" : "block" }}
                src={videoIntro}
                autoPlay
                muted
                onEnded={() => setVidIndex((idx) => idx + 1)}
              />} */}
              <video
                style={{  }}
                src={videoLoop}
                muted
                loop
                
                ref={ref}
              />
            </Grid>
            <Grid className='bottom-sec' item xs={12} sx={{ pt: 19, pb: 14 }}>
              <h3>Your trusted partner for long-term strategies or short-term solutions. <br />Talk to us about:</h3>
              {/* <h3>Clients work with SonicSoft when projects need to be strategized and designed from scratch, or for ongoing projects where the removal of bottlenecks or the mitigation of high costs and damage control is required.</h3> */}
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-two home-tabs" data-aos="fade-up">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <HomeTabs />
              <HomeMobileAccordian />

            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-three tech-heading" data-aos="fade-down">
        <Container>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={8}>
              <h2>Embracing Cutting-Edge Technologies</h2>
              <p>We embrace a wide range of technologies to find the perfect fit for your unique challenges. Whether you need a rapid turnaround or a premium solution for long-term performance, our tech and capabilities align with your project's timeline and scope.</p>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" justifyContent="center" sx={{ mb: 3, display: { xs: 'none', sm: 'flex' } }}>
            <Grid item xs={12} md={3}>
              <h3>Backend</h3>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid className='img-container' container spacing={2}>
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
            <Grid item xs={12} md={3}>
              <h3>Frontend</h3>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid className='img-container' container spacing={2}>
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
            <Grid item xs={12} md={3}>
              <h3>Mobile</h3>
            </Grid>
            <Grid item xs={12} md={9} sx={{ mb: 3 }}>
              <Grid className='img-container' container spacing={2}>
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
            <Grid item xs={12} md={3}>
              <h3>Cloud Development</h3>
            </Grid>
            <Grid className='img-container' item xs={12} md={9}>
              <Grid container spacing={2}>
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

          <HomeTechnologyMobile className="mobile-only-tech" />

        </Container>
      </section>
      <section className="block-four home-carousel" data-aos="flip-right">
        <Container>
          <Grid container spacing={4} direction="row" justifyContent="center">
            <Grid item xs={12} md={2} sx={{ pr: 2 }} className="left-col">
              <h2>Why Clients Trust sonicsoft</h2>
            </Grid>
            <Grid item xs={12} md={7} sx={{ pl: 2 }} className="right-col">
              <Slider />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-five a-team-high">
        <Container>
          <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} sx={{ pr: 2 }}>
              <img src='/images/a-team-high.png' data-aos="flip-left"/>
            </Grid>
            <Grid item xs={12} md={6} sx={{ pl: 2 }} data-aos="fade-up">
              <h2>Efficient and Sustainable Software Consultants</h2>
              <p>Our sustainable approach minimises operational costs while delivering quality outcomes. With a proactive strategy, we understand your needs, we assemble a specialised team with the right experience and knowledge to achieve your goals efficiently using fewer resources. </p>
              {/* <p>Lower operational costs allow our team of expert software consultants to offer cost-effective solutions that don't skimp on quality outcomes. We take a sustainable approach to our work, using less resources and energy to achieve our clients' goals, and can do so because of our proactive approach to strategy. Once we ascertain what your project requires, we build a specific team based on the specialist experience and knowledge of technologies required. We then develop the processes to run the project.</p> */}
              <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} href="/about">ABOUT SONICSOFT</Button>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-six industry-partners" data-aos="fade-down">
        <Container>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={12} md={2} sx={{ pr: 2 }}>
              <h2>Industry Partners</h2>
            </Grid>
            <Grid item xs={12} md={10} sx={{ pl: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md='auto'>
                  <img src='/images/rectangle.jpg'></img>
                </Grid>
                <Grid item xs={12} md='auto'>
                  <img src='/images/rectangle.jpg'></img>
                </Grid>
                <Grid item xs={12} md='auto'>
                  <img src='/images/rectangle.jpg'></img>
                </Grid>
                <Grid item xs={12} md='auto'>
                  <img src='/images/rectangle.jpg'></img>
                </Grid>
                <Grid item xs={12} md='auto'>
                  <img src='/images/rectangle.jpg'></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-seven contact-section" data-aos="fade-up">
        <Container>
          <Grid container direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
            <Grid item xs={12} md={10} align="center" sx={{ mb: 7 }}>
              <h2>Need an IT Software Consultant?</h2>
              <p>Every IT software consultancy challenge is unique. Whether you're looking for a short-term or long-term solution, you can trust SonicSoft to provide options tailored to your project's needs.</p>
            </Grid>
            <Grid item xs={12} md={11}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>

  </>

}
export default Homepage;