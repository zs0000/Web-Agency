import Layout from "../components/common/Layout/layout"
import Container from "../components/common/Container/container"
import Head from "next/head"

import AboutComponent from "../components/common/About/AboutComponent"


export default function About() {
    return (
        <Layout>
            <Head>

            </Head>
            <Container>
                <AboutComponent />

            </Container>
        </Layout>
    )
}