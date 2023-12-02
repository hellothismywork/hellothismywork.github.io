import Head from 'next/head'
import { Container, Grid, Box, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import InsightsAll from '../../components/layout/insights-all';
import InsightsSidebar from '../../components/layout/insights-sidebar';

const Insights = () => {
  return (
    <>
      <Head>
        <title>Insights</title>
        <meta name="keywords" content='Description of Capabilities'/>
      </Head>      
      <div className='insights-page'> 
        <section className="block-one main-banner">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <h1>Insights</h1>
                <Box sx={{mb:5}}><h4>We understand what the digital era and digital transformation in the modern
world is. This team is led by a group of highly skilled professionals with over 15
years of industry experience based in Australia.</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="start">
              <InsightsSidebar />
              <Grid item xs={12} sm={9}>
                <Container className='insights-all'><InsightsAll /></Container>
              </Grid>
            </Grid>
          </Container>
        </section>     
        <section className="block-seven contact-section">
          <Container>
            <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
              <Grid item xs={10} md={6} align="center">
                <h2>Looking for an IT Consultant?</h2>
                <p>Every IT consultancy challenge is unique. Whether you're looking for a short-term or long-term solution, you can trust SonicSoft to provide options tailored to your needs.</p> <br/><br/>
<Button className="icon-right-btn long-btn" variant="contained" endIcon={<ArrowForward />}>Schedule A Consultation</Button>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>      
    </>
  )
}

export default Insights
