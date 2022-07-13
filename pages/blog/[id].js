import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from './index.module.css';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [blog,setBlog] = useState();

  const fetchData = async() => {
    const result = await axios.get(`/api/blog/${id}`);
    setBlog(result.data);
  }

  useEffect(()=>{
    if ( id ) {
      fetchData();
    }
  },[id]);

  if ( !blog ) {
    return <div>로딩중 입니다.....</div>;
  }
  
  return (
    <div className={style.blog}>
      <h1>{blog.title}</h1>
      <p className={style.blog}>{blog.content}</p>
      <p className={style.blog}>{blog.writer}</p>
    </div>
  );
}
