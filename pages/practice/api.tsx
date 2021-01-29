import { useState } from 'react';
import jwt from 'jsonwebtoken';
import { MD } from 'utils';

export default function Api() {
  const [username, setUsername] = useState<string>('admin');
  const [password, setPassword] = useState<string>('12345');

  const [message, setMessage] = useState<string>('You are not logged in');
  const [secret, setSecret] = useState<string>('');

  async function submitForm(e) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const { username, admin } = jwt.decode(token) as {
        [key: string]: string;
      };

      setMessage(
        `welcome ${username} and you are ${
          admin ? 'an admin!' : 'not an admin!'
        }`
      );

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }).then((t) => t.json());

      res.secretAdminCode
        ? setSecret(res.secretAdminCode)
        : setSecret('Nothing available');
    } else {
      setMessage('[wrong]');
    }
  }

  return (
    <>
      <h2>Practice api with simple auth</h2>
      <p>{message}</p>
      <p>{secret}</p>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
      <MD>
        {`
          import { useState } from 'react';
          import jwt from 'jsonwebtoken';
          
          export default function Api() {
            const [username, setUsername] = useState<string>('admin');
            const [password, setPassword] = useState<string>('12345');
          
            const [message, setMessage] = useState<string>('You are not logged in');
            const [secret, setSecret] = useState<string>('');
          
            async function submitForm(e) {
              e.preventDefault();
              const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
              }).then((t) => t.json());
          
              const token = res.token;
          
              if (token) {
                const { username, admin } = jwt.decode(token) as {
                  [key: string]: string;
                };
          
                setMessage(
                  \`welcome \${username} and you are \${
                    admin ? 'an admin!' : 'not an admin!'
                  }\`
                );
          
                const res = await fetch('/api/secret', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ token }),
                }).then((t) => t.json());
          
                res.secretAdminCode
                  ? setSecret(res.secretAdminCode)
                  : setSecret('Nothing available');
              } else {
                setMessage('[wrong]');
              }
            }
          
            return (
              <>
                <h2>Practice api with simple auth</h2>
                <p>{message}</p>
                <p>{secret}</p>
                <form onSubmit={submitForm}>
                  <input
                    type="text"
                    name="admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <br />
                  <input type="submit" value="Login"></input>
                </form>
              </>
            );
          }
        `}
      </MD>
    </>
  );
}
