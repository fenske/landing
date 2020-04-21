import Head from 'next/head';
import Nav from '../components/nav';
import { getSortedPostsData } from '../lib/posts';

export default ({ allPostsData }) => (
  <div>
    <Head>
      <title>CoreSkills</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Nav />
    <div className="hero">
      <h1 className="title">Next.js + Tailwind CSS</h1>
      <section className="text-base p-1 justify-center">
        <h2 className="text-lg">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-6" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}