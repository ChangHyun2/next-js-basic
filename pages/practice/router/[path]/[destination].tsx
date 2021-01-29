import { MD } from 'utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import JSONViewer from 'react-json-view';
import { randomChar } from 'utils';

export default function Destination() {
  const router = useRouter();

  console.log(router.query);

  const { path, destination } = router.query;

  const goHome = () => router.push('/');

  return (
    <>
      <h1>Router</h1>
      <h2>path : {path}</h2>
      <h3>destination : {destination}</h3>
      <Link href={`../${path}/${randomChar()}`}>
        <button>go to next destination</button>
      </Link>
      <Link href={`../${randomChar()}/${randomChar()}`}>
        <button>go to new path and new destination</button>
      </Link>
      <JSONViewer src={router.query} name="router.query" />
      <Link href="/">
        <button>go home</button>
      </Link>
      <MD>
        {`
          import { useRouter } from 'next/router';
          import Link from 'next/link';
          import JSONViewer from 'react-json-view';
          import { randomChar } from 'utils';
          
          export default function Destination() {
            const router = useRouter();
          
            console.log(router.query);
          
            const { path, destination } = router.query;
          
            const goHome = () => router.push('/');
          
            return (
              <>
                <h1>Router</h1>
                <h2>path : {path}</h2>
                <h3>destination : {destination}</h3>
                <Link href={\`../\${path}/\${randomChar()\`}>}>
                  <button>go to next destination</button>
                </Link>
                <Link href={\`../\${randomChar()}/\${randomChar()}\`}>
                  <button>go to new path and new destination</button>
                </Link>
                <JSONViewer src={router.query} name="router.query" />
                <Link href="/">
                  <button>go home</button>
                </Link>
              </>
            );
          }
          `}
      </MD>
    </>
  );
}
