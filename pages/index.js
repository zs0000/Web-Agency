import Head from 'next/head'
import Background from '../components/common/Background/Background'
import BlurbsContinued from '../components/common/BlurbContinued/BlurbsContinued'
import Blurbs from '../components/common/Blurbs/Blurbs'
import Container from "../components/common/Container/container"
import ResponsiveDesktop from '../components/common/Desktop/ResponsiveDesktop'
import Intro from '../components/common/Intro/intro'
import Layout from "../components/common/Layout/layout"
import Offer from '../components/common/Offer/Offer'
import Responsive from '../components/common/Responsive/Responsive'
import TechMiddle from "../components/common/TechMiddle/TechMiddle"

export default function Home() {


  return (
    
    <Layout>
      <Head>

      </Head>
      <Container>
        <Background />
      <Intro
      title="Sentry Bridge"
      description="Modern Web Design Company, Specializing in Web Design, Development, and SEO Optimized builds."
      />
     <Offer
     text="Main Services We Offer"
     description="Every project requires a different set of services depending on your needs. Some circumstantial 
     services might be an SEO growth plan and maintenace,  or consulting services for web design or SEO purposes."
    first="Responsive Web Design and Development"
    firstservicedescription="The first impression is the most important. Let Sentry Bridge create a fast, breath-taking, 
    website to ensure every first impression is memorable, and powerful. Drag and Drop Site builders create mediocre, non-unique websites.
     Stand out with Sentry Bridge."
    second="Design and SEO Consulting/Maintenance"
    secondservicedescription="Work directly with a Designer and Developer to create an SEO growth plan, style mark ups, or audit your current site to identify what we 
    call 'breaking points', and receive advice or assitance with implementation of your new found solutions."

     />
     <Responsive 
     title="Rigorous Testing"
     text="Every website is guarenteed to be responsive to any device, testing over 20+ most commonly used resolutions for today's devices. User experience is incredibly important to us,
     aswell as a very important metric. Whether you're a blog trying to gain subscribers, or an HVAC company trying to increase sales, a users experience is the core factor on whether or 
     not its worth the stress or difficulty of using your service. That's why all of our Designs are created with every customer in mind, resulting in modern, and easy to use websites."
     />
      <ResponsiveDesktop 
     title="Rigorous Testing"
     text="Every website is guarenteed to be responsive to any device, testing over 20+ most commonly used resolutions for today's devices. User experience is incredibly important to us,
     aswell as a very important metric. Whether you're a blog trying to gain subscribers, or an HVAC company trying to increase sales, a users experience is the core factor on whether or 
     not its worth the stress or difficulty of using your service. That's why all of our Designs are created with every customer in mind, resulting in modern, and easy to use websites."
     />
     <TechMiddle 
      title="Tech Stack"
      description="Part of our strategy is utilizing Modern Software and Technology 
      to create simple to use, yet powerful Web Products that offer our clients a competitive edge - through optimizing Our Web builds for Speed, Security, 
      and Search Engine Optimization."
      shopify="Shopify"
       vercel="Vercel"
        next="Next.js"
         console="Console"
          tailwind="Tailwind"
           javascript="Javascript"
            css="CSS 3"
             html="HTML 5" 
      />
     <BlurbsContinued
     lefttitle="Modern"
     leftdescription="At Sentry Bridge we follow new, strict industry practices in both our Design and Code 
     to provide powerful websites for our clients, and their customers. Branding is important, and your company's 
     website is practically the packaging for your product. Whether the impression you want to leave is professional 
     because your sell watches, or playful because you sell candles, Sentry Bridge can do it. 
          "
     righttitle="Mobile"
     rightdescription="
     Designs that never break, regardless of the device used. In 2020, there 
     was just over 4.2 billion unique users who accessed the internet through a mobile device according 
     to Statista. Google has even added a metric to measure mobile accomodation, which impacts SEO ranking.
        " 
     />
     <Blurbs
     lefttitle="Serverless"
     leftdescription="All of our builds are serverless, deployed using Next.js and their premier hosting platform, Vercel.
      This synergistic combination offers a multitude of advantages ranging from blazing fast site-speed thanks to static generation, 
       to Automatic responsive image optimization with loseless quality. Serverless also means Security, as there is no server, or 
       end-point for malicious attackers to target, amongst a vast pool of other benefits. 
          "
     righttitle="SEO Optimized"
     rightdescription="Acquiring high SEO ranking is absolutely vital in increasing organic audience reach, 
     and cutting down on marketing and advertisement costs. Stop wasting money pitching to cold crowds, 
     and get in front of customers already in search of what you offer. Sentry Bridge utilizes a tech stack that offers SEO optimized web builds, ultimately increasing your online presence
     in Search Engines like Google, Bing, and DuckDuckGo." 
    
     />
 

      </Container>
    </Layout>
  )
}
