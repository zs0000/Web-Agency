import Head from 'next/head'
import Background from '../components/common/Background/Background'
import BlurbsContinued from '../components/common/BlurbContinued/BlurbsContinued'
import Blurbs from '../components/common/Blurbs/Blurbs'
import Container from "../components/common/Container/container"
import Intro from '../components/common/Intro/intro'
import Layout from "../components/common/Layout/layout"
import Offer from '../components/common/Offer/Offer'
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
      description="Modern Web Design and Development agency, Specializing in E-Commerce and SEO"
      />
     <Offer
     text="About Us"
     description=""
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

      </Container>
    </Layout>
  )
}
