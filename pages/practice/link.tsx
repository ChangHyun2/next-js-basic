import React from 'react';
import Link from 'next/link';
import { MD } from 'utils';

export default function LinkPage() {
  return (
    <>
      <h2>Practice Link</h2>
      <h2>
        welcome to <Link href="/page1">my blog</Link>
      </h2>
      <MD>{`
        import React from 'react';
        import Link from 'next/link';
        
        export default function LinkPage() {
          return (
            <>
              <h2>Practice Link</h2>
              <h2>
                welcome to <Link href="/page1">my blog</Link>
              </h2>
            </>
          );
        }
        
      `}</MD>
    </>
  );
}
