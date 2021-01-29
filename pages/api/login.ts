import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'sdaflsdhfsdlkfsd';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;

    return res.end('Error');
  }

  const { username, password } = req.body;
  console.log(username, password);

  res.statusCode = 200;
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === '12345',
      },
      KEY
    ),
  });
}
