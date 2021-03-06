// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { promisePool } from '../../../database/connection';


// export default async function handler(req, res) {
//   const [rows] = await promisePool.query(`SELECT * FROM blog`);
//   res.json(rows);
// }
import { promisePool } from '../../../database/connection';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const [rows] = await promisePool.query(`SELECT * FROM blog`);
    res.json(rows);
  }
  if (req.method === 'POST') {
    await promisePool.query(
      `
      INSERT INTO Blog (title, content, readTime, writer) 
      VALUES (?, ?, ?, ?)
    `,
      [req.body.title, req.body.content, req.body.readTime, req.body.writer]
    );
    res.send('성공!');
  }
}