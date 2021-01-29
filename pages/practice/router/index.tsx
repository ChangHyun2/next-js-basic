import { MD } from 'utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import JSONViewer from 'react-json-view';
import { randomChar } from 'utils';

export default function Router() {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <h1>Router</h1>
      <Link href={`router/${randomChar()}/${randomChar()}`}>
        <button>go to destination</button>
      </Link>
      <JSONViewer src={router} name="router" displayDataTypes={false} />
      <MD>{`
        import { useRouter } from 'next/router';
        import Link from 'next/link';
        import JSONViewer from 'react-json-view';
        import { randomChar } from 'utils';
        
        export default function Router() {
          const router = useRouter();
        
          console.log(router);
        
          return (
            <>
              <h1>Router</h1>
              <Link href={\`router/\${randomChar()}/\${randomChar()}\`}>
                <button>go to destination</button>
              </Link>
              <JSONViewer src={router} name="router" displayDataTypes={false} />
            </>
          );
        }
        
      `}</MD>
    </>
  );
}
