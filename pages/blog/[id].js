import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>blog/{id}</h1>
      <img src="https://dlatldhs.s3.us-west-1.amazonaws.com/gg.jpg" alt="메인 사진" />
    </div>
  )
}
