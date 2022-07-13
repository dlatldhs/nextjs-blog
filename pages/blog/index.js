import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [blogList, setBlogList] = useState([]);
  const fetchData = async() => {
    const result = await axios.get('/api/blog') // 내 서버 기준 (상대경로) api/blog 알아서 찾아감
    setBlogList(result.data);
  };

  useEffect(()=>{
    fetchData();
  },[]);  // 아무것도 안건드리면 한번 만 실행시킴

  // object 형태로 바로 띄울수가 없음 -> 그래서 귀찮을 때 JSON.stringify() 해서 object를 string 형태로 바꿈
  return (
    <div>
      <h1>blog index 목록 페이지</h1>
      {/* <h1>{JSON.stringify(blogList)}</h1> */}
      {blogList.map((blog) => {
        return (
          <div key={blog.id}>
            <div>{blog.id}</div>
            <div>{blog.title}</div>
            <div>{blog.content}</div>
            <div>{blog.readTime}</div>
            <div>{blog.writer}</div>
          </div>
        ) 
      })}
    </div>
  )
}
