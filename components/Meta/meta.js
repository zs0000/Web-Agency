import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta
        name="description"
        content={`Sentry Bridge is a Seattle, Washington based Web design
         company that works with businesses small to large, to create
          affordable, Mobile and SEO Friendly Websites.`}
      />
      <link rel="canonical" href="https://www.sentrybridge.com/"></link>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Sentry Bridge Web Design Company - Affordable Websites | SEO Experts"></meta>
      <meta property="og:description" content="Sentry Bridge is a Seattle, Washington based Web design
         company that works with businesses small to large, to create
          affordable, Mobile and SEO Friendly Websites."></meta>
          <meta property="og:url" content="https://www.sentrybridge.com/"></meta>
          <meta property="og:site_name" content="Sentry Bridge Web Design Company"></meta>
          <link rel="shortlink" href="https://cliowebsites.com/"></link> 
    </Head>
  )
}