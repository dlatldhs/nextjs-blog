// import { blogList } from "../../../database/blog";

// export default function handler(req,res) {
//     const id = Number(req.query.id); // id 가져오는거

//     // const findBlogId = (id) => {
//     //     let result;
//     //     for ( let i = 0; i < blogList.length; i++ ) {
//     //         if ( id === blogList[i].id ) {
//     //             result = blogList[i];
//     //         }
//     //     }

//     //     return result;
//     // }
    
//     const result = blogList.find((blog)=> blog.id === id);

//     if ( result ) {
//         res.json( result );
//     }
//     else {
//         res.json('no data');
//     }
//     // res.json({ id:id ,test: "/api/blog/1 화면이 이렇게 나와야함"});
// }
import { promisePool } from '../../../database/connection';

export default async function handler(req, res) {
  const id = req.query.id;

  const [rows] = await promisePool.query(`SELECT * FROM blog WHERE id=?`, [id]);
  if (rows.length > 0) {
    res.json(rows[0]);
  } else {
    res.send('no data');
  }
}