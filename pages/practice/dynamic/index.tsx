import { MD } from 'utils';
import { GetStaticProps, GetStaticPaths } from 'next';
import path from 'path';
import Link from 'next/link';

// will be excuted on server
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require('fs');

  const txt = fs.readFileSync(
    path.join(process.cwd(), 'public/robots.txt'),
    'utf8'
  );

  return {
    revalidate: 10,
    props: {
      txt,
    },
  };
};

export default function Dynamic(props) {
  return (
    <>
      <h1>dynamic txt - {props.txt}(.txt from node.js)</h1>
      <div>
        <p>from client</p>
        <Link href="dynamic/hello">
          <button>hello</button>
        </Link>
        <Link href="dynamic/world">
          <button>world</button>
        </Link>
      </div>
      <MD>
        {`
        import { GetStaticProps, GetStaticPaths } from 'next';
        import path from 'path';
        import Link from 'next/link';

        // will be excuted on server
        export const getStaticProps: GetStaticProps = async (context) => {
          const fs = require('fs');

          const txt = fs.readFileSync(
            path.join(process.cwd(), 'public/robots.txt'),
            'utf8'
          );

          return {
            revalidate: 10,
            props: {
              txt,
            },
          };
        };

        export default function Dynamic(props) {
          return (
            <>
              <h1>dynamic txt - {props.txt}(.txt from node.js)</h1>
              <div>
                <p>from client</p>
                <Link href="dynamic/hello">
                  <button>hello</button>
                </Link>
                <Link href="dynamic/world">
                  <button>world</button>
                </Link>
              </div>
            </>
          );
        }`}
      </MD>
    </>
  );
}
