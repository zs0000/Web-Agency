import Head from 'next/head'
import Contact from '../components/common/Contact/Contact'
import Container from "../components/common/Container/container"
import Layout from "../components/common/Layout/layout"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Script from 'next/script'
import IntroPost from '../components/blog/IntroPost/IntroPost';

export default function Blog() {


  return (
    
    <Layout>
      <Head>
      <title>Before Making A Website - Custom Web Design Blog - Sentry Bridge</title>
      <meta
        name="description"
        content={`Things you should know as a small business owner before making a website. 
        explore affordable alternatives to sites builders, why web designers are worth it, 
        and more valuable information to know prior to creating a website on your own.`}
      />
      </Head>
      <Container>
     <IntroPost />
    <Contact 
    contacttitle="Request a Quote"
    contactdescription="Each project has a different set of needs, making pricing subjective. 
    Sentry Bridge provides incredible value at competitive costs, as our ultimate goal is to provide powerful, breath-taking websites, and increase 
    ROI and conversion rates for our clients."
    />

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <Script>
    AOS.init();
  </Script>
      </Container>
    </Layout>
  )
}
