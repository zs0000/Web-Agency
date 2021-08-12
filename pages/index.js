import Head from 'next/head'
import Background from '../components/common/Background/Background'
import BlurbsContinued from '../components/common/BlurbContinued/BlurbsContinued'
import Blurbs from '../components/common/Blurbs/Blurbs'
import Contact from '../components/common/Contact/Contact'
import Container from "../components/common/Container/container"
import ResponsiveDesktop from '../components/common/Desktop/ResponsiveDesktop'
import Intro from '../components/common/Intro/intro'
import Layout from "../components/common/Layout/layout"
import Offer from '../components/common/Offer/Offer'
import TechMiddle from '../components/common/TechMiddle/TechMiddle'
import Responsive from '../components/common/Responsive/Responsive'
import AnimationsTest from '../components/common/AnimationsTest/AnimationsTest'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Script from 'next/script'


export default function Home() {


  return (
    
    <Layout>
      <Head>
      <title>Affordable Custom Web Design - Professional Website Development</title>
      <meta
        name="description"
        content={`Affordable Custom Web Design. A Professional Website Development team, ready for work. SEO Specialized Plans for Local, small businesses - to eCommerce stores, Blogs, and even Art Galleries. Establish authority for your brand both online and local.`}
      />
      <link rel="canonical" href="https://www.sentrybridge.com/"></link>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Affordable Custom Web Design - Professional Website Development"></meta>
      <meta property="og:description" content="Affordable Custom Web Design. A Professional Website Development team, ready for work. SEO Specialized Plans for Local, small businesses - to eCommerce stores, Blogs, and even Art Galleries. Establish authority for your brand both online and local."></meta>
          <meta property="og:url" content="https://www.sentrybridge.com/"></meta>
          <meta property="og:site_name" content="Affordable Custom Web Design - Professional Website Development"></meta>
          <link rel="shortlink" href="https://www.sentrybridge.com/"></link> 
      </Head>
      <Container>
        <Background />
      <Intro
      title="Sentry Bridge"
      description="Modern Web Design Company, based in Seattle, Washington. Specialized in SEO. Affordable websites for small buisness or Large E-Commerce Stores.  "
      />
      <AnimationsTest
      />
     <Offer
     text="Main Services We Offer"
     description="Every project requires a different set of services depending on your needs. Some circumstantial 
     services might be an SEO growth plan and maintenance,  or consulting services for web design or SEO purposes."
    first="Responsive Web Design and Development"
    firstservicedescription="The first impression is the most important. Let Sentry Bridge create a fast, breath-taking, 
    website to ensure every first impression is memorable, and powerful. Drag and Drop Site builders create mediocre, non-unique websites.
     Stand out with Sentry Bridge."
    second="Web Design, SEO Growth and Maintenance plans"
    secondservicedescription="Work directly with a Designer and Developer to create an SEO growth plan, style mark ups, or audit your current site to identify what we 
    call 'breaking points', and receive advice or assistance with implementation of your new found solutions."

     />
     <Responsive 
     title="Mobile Responsive"
     text="The new industry standard is Mobile First Web Design. 
     According to Leftronic, approximately 60% of the world's population accesses the internet at least once a day using a mobile device. 
     That's why Sentry Bridge only creates mobile friendly, mobile responsive, and mobile compatible  websites."
     />
      <ResponsiveDesktop 
     title="Rigorous Testing"
     text="User experience is incredibly important to us, as well as a very important factor in our product creation. We test on over 20+
      of most commonly used resolutions for today's devices - both mobile and desktop, to ensure a fully accommodating end-product. "
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
     because your sell watches, or playful because you sell candles, our custom designs can accomodate any tone. 
          "
     righttitle="Mobile"
     rightdescription="
     Designs that never break, regardless of the device used. In 2020, there 
     was just over 4.2 billion unique users who accessed the internet through a mobile device according 
     to Statista. Google has even added a metric to measure mobile accommodation, which impacts SEO ranking.
        " 
     />
     <Blurbs
     lefttitle="Serverless"
     leftdescription="All of our builds are serverless, deployed using Next.js and their premier hosting platform, Vercel.
      This synergistic combination offers a multitude of advantages ranging from blazing fast site-speed thanks to static generation, 
       to Automatic responsive image optimization with loseless quality. Serverless also means Security, as there is no server, or 
       end-point for malicious attackers to target, amongst a vast pool of other benefits. 
          "
     righttitle="Priority: SEO"
     rightdescription="Acquiring high SEO ranking is absolutely vital in increasing organic audience reach, 
     and cutting down on marketing and advertisement costs. Stop wasting money pitching to cold crowds, 
     and get in front of customers already in search of what you offer. Sentry Bridge utilizes a tech stack that offers SEO optimized web builds, ultimately increasing your online presence
     in Search Engines like Google, Bing, and DuckDuckGo." 
    
     />
     
    <Contact 
    contacttitle="Request a Quote"
    contactdescription="Each project has a different set of needs, making pricing subjective. 
    Sentry Bridge provides incredible value at competitive costs, as our ultimate goal is to provide powerful, breath-taking websites, and increase 
    ROI and conversion rates for our clients at affordable costs."
    />

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <Script>
    AOS.init();
  </Script>
      </Container>
    </Layout>
  )
}
