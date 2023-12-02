import Head from 'next/head'
import {Container, Grid, Box, Button} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import CaseStudiesAll from '../../components/layout/case-studies-all';

const casestudies = () => {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta name="keywords" content='Description of Capabilities'/>
      </Head>      
      <div className='casestudies-page'> 
        <section className="block-one main-banner">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <h1>Real Success Stories: Explore Our Case Studies</h1>
                <Box sx={{mb:5}}><h4>Step into the world of tangible success. Dive into our case studies and witness firsthand how our expertise transforms challenges into triumphs. Discover how we've collaborated with diverse clients to craft innovative solutions that drive growth, enhance efficiency, and elevate performance.</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two pb-0">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center" sx={{justifyContent:'left'}}>
              <Grid item xs={12} md={8}>
                <Box><h2>All Case Studies</h2></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-three capability-blocks">
          <Container>
            <Grid container className="">
              <CaseStudiesAll />
            </Grid>
          </Container>
        </section>         
        <section className="block-seven contact-section">
          <Container>
            <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
              <Grid item xs={10} md={6} align="center">
                <h2>Schedule a Consultation</h2>
                <p>Ready to explore the potential of tailored solutions for your challenges? Our experts are here to guide you. Book a consultation today.</p> <br/><br/>
<Button className="icon-right-btn long-btn" variant="contained" endIcon={<ArrowForward />} href="/contactus">Schedule A Consultation</Button>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>      
    </>
  )
}

export default casestudies
