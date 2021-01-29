import { MD } from 'utils';

import React from 'react';
import Link from 'next/link';

export default function Practice() {
  return (
    <>
      <h1>Practice</h1>
      <ul>
        <li>
          <Link href="/practice/api">api</Link>
        </li>
        <li>
          <Link href="/practice/link">link</Link>
        </li>
        <li>
          <Link href="/practice/router">router</Link>
        </li>
        <li>
          <Link href="/practice/dynamic">dynamic</Link>
        </li>
      </ul>
      <MD>{`
        import { MD } from 'utils';

        import React from 'react';
        import Link from 'next/link';
        
        export default function Practice() {
          return (
            <>
              <h1>Practice</h1>
              <ul>
                <li>
                  <Link href="/practice/api">api</Link>
                </li>
                <li>
                  <Link href="/practice/link">link</Link>
                </li>
                <li>
                  <Link href="/practice/router">router</Link>
                </li>
                <li>
                  <Link href="/practice/dynamic">dynamic</Link>
                </li>
              </ul>    
            </>
            );
          }
            
      `}</MD>
    </>
  );
}
