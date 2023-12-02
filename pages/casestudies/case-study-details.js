import Head from 'next/head'
import {Container, Grid, Box, Button} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import CaseStudiesAll from '../../components/layout/case-studies-all';
import Slider from '../../components/layout/home-carousel';

const casestudies = () => {
  return (
    <>
      <Head>
        <title>Case Study Details</title>
        <meta name="keywords" content='Description of Case Study Details'/>
      </Head>      
      <div className='casestudy-details-page'> 
        <section className="block-one main-banner">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <h1>Case Study Details</h1>
                <Box sx={{mb:5}}><h4>Sed quis enim vehicula neque convallis commodo. Etiam laoreet euismod blandit. Sed bibendum neque a nibh mattis aliquam. Cras volutpat fermentum justo eu facilisis.</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center" sx={{justifyContent:'left'}}>
              <Grid item xs={12} md={8}>
                <Box><h4>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo, est eu mattis sagittis, metus lacus porta turpis a laoreet nibh orci ac augue</h4></Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-three">
          <Container>
            <Grid container className="" direction="row" alignItems="center">
              <Grid item xs={12} sm={9} align="" className='left-col'>
                <h2>Overview Title</h2>
                <p>Morbi neque justo, placerat id mauris eu, lobortis facilisis felis. Pellentesque dictum mauris mi, nec sodales purus ultrices ut. Integer dictum mauris sed nisl dignissim, et mollis velit aliquam. Integer viverra justo ac erat ornare tempor. Ut ut ex nec dolor eleifend mollis nec eget nunc.</p><br/>
<p>Sed id tincidunt purus. Vestibulum quis imperdiet mi. Sed feugiat, odio id consectetur feugiat, neque nibh interdum nisi, at rhoncus enim enim non ligula. Pellentesque efficitur ante eget feugiat fringilla. Nulla congue, nulla in ultricies consequat, nulla orci accumsan ante, eget aliquet lectus velit a urna.</p>
<br/>
<p>Maecenas posuere a lectus at aliquam. Nunc laoreet eu justo eget tempus. Aenean ultrices, augue sed imperdiet condimentum, dolor velit blandit mauris, at finibus ligula nisl id dolor. Nullam facilisis tortor vitae orci tempus ullamcorper. Donec nec ullamcorper mauris, quis tristique ante. Nullam maximus interdum felis at ornare.</p>
              </Grid>
              <Grid item xs={12} sm={3} align="" className='right-col'>
                <h3>Service Provided</h3>
                <h6>Engineering</h6>
                <h6>Cloud Migration</h6>
                <h6>User Experience & Design</h6>
                <h6>Agile Delivery</h6>
                  <br/>
                <h4>Industry</h4>
                <h6>Retail, Health</h6>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-five a-team-high">
        <Container>
          <Grid container spacing={4} direction="row" justifyContent="center" alignItems="">
            <Grid item xs={12} md={6} sx={{pr:2}} className='left-col'>
              <img src='/images/industry-partners.png' />
            </Grid>
            <Grid item xs={12} md={6} sx={{pl:2}} className='right-col'>
              <h2>The Problem Heading</h2>
              <p>Donec interdum, purus ut laoreet vehicula, felis ex viverra nisi, nec laoreet turpis turpis vel dui. Sed commodo
condimentum tellus, non hendrerit lacus vestibulum in. Donec congue sed odio eget dignissim. Maecenas augue elit, tempor quis ultricies vel, porttitor ultricies justo.</p>
<p>Suspendisse sit amet cursus lorem. Praesent quis egestas velit. Pellentesque scelerisque arcu at cursus dignissim.
Suspendisse posuere elit nulla, at tempor urna convallis eu. Pellentesque vitae urna accumsan, viverra ante sed,
placerat sem. Proin sagittis, ante eget scelerisque volutpat, justo ipsum tincidunt lorem, sit amet placerat eros erat
sit amet mauris. Ut dignissim congue urna, nec tristique ipsum vehicula eu.</p>
              <div className='case-study-list'>
                <h3>Subheading Suspendisse Rhoncus</h3>
                <ul>
                    <li>We provide options based on your requirements</li>
                    <li>Time-sensitive or robust, future-proof solutions</li>
                    <li>Our consultants join your team for genuine collaboration</li>
                    <li>Select technologies that best fit your solution and the future of the project</li>
                    <li>We'll guide you towards the right solution, tailored to your needs</li>
                </ul>
              </div>
              {/* <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />}>ABOUT SONICSOFT</Button> */}
            </Grid>
          </Grid>         
        </Container>
      </section>
      <section className="block-four">
        <Container>
          <Grid container className="" direction="row" alignItems="center">
            <Grid item xs={12} sm={7} align="" className='left-col'>
              <h2>The Solution Heading</h2>
              <p>Morbi neque justo, placerat id mauris eu, lobortis facilisis felis. Pellentesque dictum mauris mi, nec sodales purus
ultrices ut. Integer dictum mauris sed nisl dignissim, et mollis velit aliquam. Integer viverra justo ac erat ornare
tempor. Ut ut ex nec dolor eleifend mollis nec eget nunc</p><br/>
<p>Sed id tincidunt purus. Vestibulum quis imperdiet mi. Sed feugiat, odio id consectetur feugiat, neque nibh
interdum nisi, at rhoncus enim enim non ligula. Pellentesque efficitur ante eget feugiat fringilla. Nulla congue, nulla
in ultricies consequat, nulla orci accumsan ante, eget aliquet lectus velit a urna.</p>
<br/>
<p>Maecenas posuere a lectus at aliquam. Nunc laoreet eu justo eget tempus. Aenean ultrices, augue sed imperdiet
condimentum, dolor velit blandit mauris, at finibus ligula nisl id dolor. Nullam facilisis tortor vitae orci tempus
ullamcorper. Donec nec ullamcorper mauris, quis tristique ante. Nullam maximus interdum felis at ornare.</p>
            </Grid>
            <Grid item xs={12} sm={3} align="" className='right-col'>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-six">
        <Container>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={12} md={6} className='left-col'>
              <div className="content-block">
                  <h2>Introduction Heading Statement Scelerisque Tempus</h2>
                  <Box sx={{mb:5}}><p>You should consider moving your data to the cloud for multiple different reasons. With years of experience in cloud migration, we know that cloud infrastructure will take your organization into new levels of agility. In addition to this, the simplicity in cloud solutions drives operational efficiency.</p></Box>
                  <img className="w-100" src='/images/Engineering-full.png'/>
              </div>
            </Grid>
            <Grid className="case-study-icon-sec" item xs={12} md={6}>
              <Grid container direction="row">
                  <Grid item xs={2}>
                      <img src='/images/dot.png' />
                  </Grid>
                  <Grid item xs={10} sx={{pl:1}}>
                      <h4>Migration Strategy</h4>
                      <p>We formulate a strategy to best migrate your data fusce hendrerit arcu vel mauris ultrices maximus.</p>
                  </Grid>
                  <Grid item xs={2}>
                      <img src='/images/dot.png' />
                  </Grid>
                  <Grid item xs={10} sx={{pl:1}}>
                      <h4>Risk Mitigation</h4>
                      <p>We formulate a strategy to best migrate your data fusce hendrerit arcu vel mauris ultrices maximus.</p>
                  </Grid>
                  <Grid item xs={2}>
                      <img src='/images/dot.png' />
                  </Grid>
                  <Grid item xs={10} sx={{pl:1}}>
                      <h4>Cost-effective Solutions</h4>
                      <p>ellentesque faucibus lorem sit amet nibh consectetur convallis. Ut pulvinar mauris est, id porta lectus venenatis ac.</p>
                  </Grid>
                  <Grid item xs={2}>
                      <img src='/images/dot.png' />
                  </Grid>
                  <Grid item xs={10} sx={{pl:1}}>
                      <h4>Compliance and Security</h4>
                      <p>Phasellus sed molestie purus, suscipit fermentum nisi. Morbi imperdiet neque sapien, aliquet iaculis justo eleifend ut.</p>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-eight">
        <Container>
          <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
            <Grid item xs={10} md={10} align="center">
              <h2 className='white'>The Results</h2>
              <p className='white'>Maecenas posuere a lectus at aliquam. Nunc laoreet eu justo eget tempus. Aenean ultrices, augue sed imperdiet
condimentum, dolor velit blandit mauris, at finibus ligula nisl id dolor. Nullam facilisis tortor vitae orci tempus
ullamcorper. Donec nec ullamcorper mauris, quis tristique ante. Nullam maximus interdum felis at ornare.</p> <br/><br/>
              <div className='circle-block'>
                <h6>More than</h6>
                <h2>90%</h2>
                <p>Fusce pulvinar, augue quis justo quis nisl</p>
              </div>
              <div className='circle-block'>
                <h6>Above</h6>
                <h2>90%</h2>
                <p>Fusce pulvinar, augue quis justo quis nisl</p>
              </div>
              <div className='circle-block'>
                <h6>Doubleed in</h6>
                <h2>90%</h2>
                <p>Fusce pulvinar, augue quis justo quis nisl</p>
              </div>
              <div className='circle-block'>
                <h6>An increase by</h6>
                <h2>90%</h2>
                <p>Fusce pulvinar, augue quis justo quis nisl</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-nine home-carousel">
        <Container>
          <Grid container spacing={4} direction="row" justifyContent="center">
            <Grid item xs={12} md={2} sx={{pr:2}} className="left-col">
              <h2>Why Clients Trust sonicsoft</h2>
            </Grid>
            <Grid item xs={12} md={7} sx={{pl:2}} className="right-col">
              <Slider/>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="block-seven contact-section">
        <Container>
          <Grid container  direction="row" justifyContent="center" alignItems="center" /*sx={{m:0}}*/ spacing={4}>
            <Grid item xs={10} md={6} align="center">
              <h2>CTA Heading Duis Euismod Consectetur Venenatis</h2>
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

export default casestudies
