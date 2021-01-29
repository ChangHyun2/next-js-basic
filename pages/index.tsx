import Head from 'next/head';
import Link from 'next/link';
import { MD } from 'utils';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>home</h1>

      <ul>
        <li>
          <Link href="practice">Practice</Link>
        </li>
        <li>
          <Link href="page1">Page1</Link>
        </li>
      </ul>
      <MD>
        {`
          import Head from 'next/head';
          import Link from 'next/link';
          
          export default function Home() {
            return (
              <div>
                <Head>
                  <title>Create Next App</title>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>home</h1>
          
                <ul>
                  <li>
                    <Link href="practice">Practice</Link>
                  </li>
                  <li>
                    <Link href="page1">Page1</Link>
                  </li>
                </ul>
              </div>
            );
          }
          
        `}
      </MD>
    </div>
  );
}
