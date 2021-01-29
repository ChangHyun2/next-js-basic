import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'sdaflsdhfsdlkfsd';

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  const { admin } = jwt.verify(token, KEY) as {
    [key: string]: boolean;
  };

  if (admin) {
    res.json({ secretAdminCode: 12345 });
  } else {
    res.json({ admin: false });
  }
}
