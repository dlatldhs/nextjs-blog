// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { blogList } from "../../../database/blog"
export default function handler(req, res) {
    res.json(blogList)
  }
  