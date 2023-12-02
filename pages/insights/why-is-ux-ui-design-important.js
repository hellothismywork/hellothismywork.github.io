import Head from 'next/head'
import { Container, Grid, Box, Button } from '@mui/material';
import { ArrowForward, Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import InsightsAll from '../../components/layout/insights-all';
import InsightsSidebar from '../../components/layout/insights-sidebar';

const Insights = () => {
  return (
    <>
      <Head>
        <title>Why is UX/UI design important?</title>
        <meta name="keywords" content='Why is UX/UI design important?'/>
      </Head>      
      <div className='insights-article'> 
        <section className="block-one main-banner">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={12} md={6}>
                <h3>30 November 2021</h3>
                <h1>Why is UX/UI design important?</h1>
                {/* <Box sx={{mb:5}}><h4>We understand what the digital era and digital transformation in the modern
world is. This team is led by a group of highly skilled professionals with over 15
years of industry experience based in Australia.</h4></Box> */}
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="block-two-x">
          <Container>
            <Grid container spacing={2} direction="row" alignItems="start">
              <InsightsSidebar />
              <Grid item xs={12} sm={9} className='right-col'>
                <h3>What is the difference between UX and UI design?</h3>
                <img src="/images/insights/UX-UI-Design.png" />
                <br/>
                <p>The terms UX and UI design are often used in the same context, however when researching into them further you will discover they have quite substantial differences in their meaning. UX design refers to “user experience design” whereas UI design rather refers to “user interface design”.</p>
                <br/>
  <h5>UX design – user experience design</h5>
  <br/>
  <h4><i>“User experience encompasses all aspects of the end-user’s interaction with the company, its services, and its products”
    <br/>- Neilson Norman</i></h4>

    <p>The term was coined in the late 1990s by Don Norman, a cognitive scientist and co-founder of the Nielsen Norman Group Design Consultancy. Norman’s definition of UX design implies that the term relates to all interaction and relationship between the customer and company. The definition itself does not denote any specific and direct relation to the digital world, however, they have connected due to the similar time periods that both notions became increasingly popular. UX design fundamentally explains anything that can be experienced by a consumer whether it be using a website, how you hold your toothbrush or a visit to the movie cinemas.</p>
    <br/>
    <p>The “user experience” refers to the contact and relationship between the user and the product or service. The “design” refers to the elements that shape and define the interaction into what it is. This includes how the experience impacts the user, makes them feel or react, and how it assists them in experiencing or completing a specific task. This could be applied to adding items to your wish list when online shopping, turning on your dishwasher or how you hold a hair dryer. The overall goal, across the board of UX design is to make the user experience as easy and efficient as possible.</p>
<br/>
    <h4>UI design – user interface design</h4>
    <p>UI design was developed earlier than the school of UX design, however the concept of user interface is still a question mark among many scholars. This is presented through the variety of definitions companies will give job descriptions that fall under user interface.</p>
    <br/>
    <p>UI design refers to the presentation and interactivity of a product – how it looks and feels when a consumer interacts with it. Unlike UX design, user interface strictly relates to digital products and services and the relationship a user has to their technological device or software. For example, this could translate to how a user interacts with the touch screen coffee machine however, not the interaction with the mechanical elements of making the coffee.</p>
    <br/>
    <p>When looking at websites and applications, user interface studies the aesthetics, feel, and interactivity of the platform. This process includes carefully considering each element, button, icon, image, and process to ensure it is easy to use and suits the brand character.</p>
    <br/>
    <p>The ultimate goal of user interface design in simple terms is to create a product that looks good and is easy to use.</p>
<br/>

<h5>So, what is the difference between UX and UI design?</h5>
<br/>
<h4><i>“User Experience (UX) and User Interface (UI) are some of the most confused and misused terms in our field. A UI without UX is like a painter slapping paint onto a canvas without thought, while UX without UI is like the frame of a sculpture with no paper mache on it. A great product experience starts with UX followed by UI. Both are essential for the product’s success.” 
  <br/> - Rahul Varshney, co-creator of Foster.fm</i></h4>
  <br/>
  <p>Both UX and UI design are crucial to a product and work closely together. While earlier, I emphasised the difference between the two processes, it is also important to understand that they operate the most efficiently alongside each other. Still, user experience teams are not the same as a user interface team as their work is separate with different responsibilities and tasks.</p>
  <br/>
  <p>The easy way to differentiate the two is that UX design is about the overall feel of the user’s experience whereas UI design focuses on the look and function of the product’s interfaces. A UX design team will investigate pain points and attempt to produce the simplest and most straight forward interaction with the product. They require extensive research and energy on the user’s perspective on the platform. Once this skeleton is built, the UI design team brings the frame to life by concentrating on all visual elements. The UX designer may map out the user’s journey, while the UI designer will make the trip possible. Both teams are obligated to consider the user’s view and make alterations to ultimately improve the product’s outlook and usability.</p>
  <br/>
  <h4><i>“UI is the saddle, the stirrups, and the reins. UX is the feeling you get being able to ride the horse.” 
    <br/> - Dain Miller, Web Developer</i></h4>
<br/>
  <h5>Why are both UI and UX design important considerations for my product or company?</h5>
  <br/>
  <h4><i>“Something that looks great but is difficult to use is exemplary of great UI and poor UX. While something very usable that looks terrible is exemplary of great UX and poor UI.”
    <br/> - Helga Moreno, designer and expert</i></h4>
<br/>

<p>A product that utilises both UI and UX design expertise clearly has the potential to exceed competitors and drive success. An amazing service that is difficult to use is no longer an amazing service. Consumers want ease when interacting with products that encourages them to invest, creating more successful customers. Both aspects are vital in today’s competitive market, and while they work hand in hand, they each have a significant responsibility in creating an efficient, successful, and all-round prosperous application or product.</p>
<br/>
<p><small>Reference <br/>
Lamprecht, E., 2021, ‘The difference between UX and UI design – A beginners guide’, Career Foundry, <a target='blank' href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/#what-are-ux-and-ui-in-the-first-place">www.careerfoundry.com</a></small></p>

              </Grid>
            </Grid>
          </Container>
        </section>
        {/* <section className="block-three related-articles">
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
        </section>   */}
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
