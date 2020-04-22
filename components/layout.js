import Link from "next/link";
import Head from "next/head";

const links = [
  {href: 'https://github.com/zeit/next.js', label: 'GitHub'},
  {href: 'https://nextjs.org/docs', label: 'Docs'},
]

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>CoreSkills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <nav>
        <ul className="flex justify-center text-grey-700x1 items-center p-8">
          <li>
            <Link href="/">
              <a className="text-blue-500 no-underline">Home</a>
            </Link>
          </li>
          <ul className="flex justify-between items-center">
            {links.map(({href, label}) => (
              <li key={`${href}${label}`} className="ml-4">
                <a href={href} className="btn-blue no-underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </div>
  )
}
