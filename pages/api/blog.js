// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const blogList = [{
    id: 1,
    title: 'nextjs 사용법',
    content: 'Nextjs는 개발자를 편하게 해줍니다',
    readTime: 1,
    writer: 'dlatldhs',
},
{
    id: 2,
    title: 'nextjs 장점',
    content: '힘든 거 다 해줌',
    readTime: 2,
    writer: 'dlatldhs',
},]
export default function handler(req, res) {
    res.json(blogList)
  }
  