import Head from 'next/head'
import Nav from '../components/nav'

export default () => (
  <div>
    <Head>
      <title>CoreSkills</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Nav />
    <div className="hero">
      <h1 className="title">Next.js + Tailwind CSS</h1>
    </div>
  </div>
)
