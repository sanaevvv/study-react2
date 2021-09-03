import Head from 'next/head';
import { Header } from 'src/components/Header';

const Index = ({}) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

        <h1>Next.jsで学ぶReact講座</h1>
        <p>JSON PLACEHOLDERのAPIをいろいろ叩いてみるよ</p>

    </>
  );
};

export default Index;
