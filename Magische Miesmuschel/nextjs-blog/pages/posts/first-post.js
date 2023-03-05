import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

import Image from 'next/image';

export default function FirstPost() {

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Image 
        src="/images/clam.png"
        height={450}
        width={360}
        alt="clam"
      />
     
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}