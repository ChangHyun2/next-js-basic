import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MD } from 'utils';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 10,
    props: {
      num: Math.random(),
    },
  };
};

// getStaticProps runs at BUILD TIME. It doe NOT RUN AT RUNTIME

// 1. if fallback false,
// START
// localhost: 3000/fruit/hello => take the output => store it on the disk
// localhost: 3000/fruit/world => take the output => store it on the disk
// DONE

// 2. if fallback true,
// START
// localhost: 3000/fruit/hello => take the output => store it on the disk
// localhost: 3000/fruit/world => take the output => store it on the disk
// still listen localhost:3000/fruit/anyDestinatio => getStaticProps => static page를 캐싱

export const getStaticPaths: GetStaticPaths = async () => {
  // access all the node stuff

  return {
    paths: [{ params: { name: 'hello' } }, { params: { name: 'world' } }],
    fallback: false,
  };
};

export default function DynamicRoute(props) {
  const router = useRouter();

  return (
    <>
      <h1>random number from server : {props.num}</h1>
      <MD>
        {`
        // [name].tsx

        import { useRouter } from 'next/router';
        import { GetStaticProps, GetStaticPaths } from 'next';

        export const getStaticProps: GetStaticProps = async (context) => ({
            revalidate: 10,
            props: {
              num: Math.random(),
            },
        });

        export const getStaticPaths: GetStaticPaths = async () =>  ({
            paths: [{ params: { name: 'hello' } }, { params: { name: 'world' } }],
            fallback: false,
          })

        
        export default function DynamicRoute(props) {
          const router = useRouter();

          return (
            <>
              <h1>random number from server : {props.num}</h1>
            </>
          );
        }
        `}
      </MD>
    </>
  );
}
