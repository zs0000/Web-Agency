import Head from 'next/head'
import Background from '../components/common/Background/Background'
import Container from "../components/common/Container/container"
import Intro from '../components/common/Intro/intro'
import Layout from "../components/common/Layout/layout"
import Powerful from '../components/common/Powerful/Powerful'
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
      <Powerful />
      </Container>
    </Layout>
  )
}
