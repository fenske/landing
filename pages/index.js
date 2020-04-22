import Layout from '../components/layout';
import {getSortedPostsData} from '../lib/posts';

export default ({allPostsData}) => (
  <Layout>
    <div>
      <h1 className="title">Next.js + Tailwind CSS</h1>
      <section className="text-base p-1 justify-center">
        <h2 className="text-lg">Blog</h2>
        <ul className="">
          {allPostsData.map(({id, date, title}) => (
            <li className="mt-6" key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}