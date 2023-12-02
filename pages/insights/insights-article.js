import Head from 'next/head'
import { Container, Grid, Box, Button } from '@mui/material';
import { ArrowForward, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import InsightsAll from '../../components/layout/insights-all';
import InsightsSidebar from '../../components/layout/insights-sidebar';

const Insights = () => {
  return (
    <>
      <Head>
        <title>Insights Article</title>
        <meta name="keywords" content='Description of Capabilities'/>
      </Head>      
      <div className='insights-article'> 
        <section className="block-one main-banner">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <h3>30 June 2023</h3>
                <h1>Insights Article</h1>
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
              <Grid item xs={12} sm={9} className='right-col'>
                <p>Before we discuss this further, I would like to let you know I will use the same example from my previous article. If you want to get
familiar with the example application, please read my article about Architecting Microservices.</p>
<p>We’ll start by looking at the big picture of communication between microservices. Should any microservice be allowed to
communicate with any other? And what about client facing applications such as websites and mobile applications? Can they call
whatever microservice they want to? We’ll talk about how API gateways can be used to decouple front end applications from
back-end microservices.</p>
<p>We’ll see that microservices can use either synchronous or asynchronous communication styles. And in fact, many microservice
architectures use a combination of both approaches.</p>
<p>We’ll look at RESTful APIs over HTTP, one of the most popular patterns for exposing microservice APIs. And we’ll see how message
brokers support asynchronous messaging patterns and why that’s beneficial. For both synchronous and asynchronous
communication styles, we’ll also talk about some of the patterns that support resilient communications to ensure that even when
things temporarily go wrong, your system can cope with the problem and recover from it.</p>
<p>Finally, we’ll look at the challenge of service discovery. How can microservices know where to find each other? We’ll see how the
service registry pattern can help us out here.</p>

              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-three related-articles">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="start">
              <Grid item xs={12} md={3}>
              </Grid>
              <Grid item xs={12} md={9} className='right-col'>
                <h2>Related Articles</h2>
                <Container className='insights-all'><InsightsAll /></Container>
              </Grid>
            </Grid>
          </Container>
        </section>  
        <section className="block-seven contact-section">
          <Container>
            <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
              <Grid item xs={10} md={6} align="center">
                <h2>CTA Heading Duis Euismod
Consectetur Venenatis</h2>
                <p>Nunc ut posuere ex. Integer eget vestibulum odio, eu fermentum urna. In commodo in lectus
quis malesuada. Aenean quis lorem ac magna suscipit efficitur sed a metus. In hac habitasse
platea dictumst.</p> <br/><br/>
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
