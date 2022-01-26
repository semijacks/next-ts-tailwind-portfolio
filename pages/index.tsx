import Head from 'next/head';
import Container from '@/components/Container';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Idowu Semilore</title>
      </Head>
      <div className='w-full h-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500' />
      <Container />
      <div className='flex flex-col items-center justify-center max-w-3xl m-auto'>
        <section className='m-0'>
          <h1 className='text-3xl lg:text-5xl text-center'>
            Hi, I&apos;m Semilore Idowu
          </h1>
          <p className='font-semibold text-2xl text- text-center mt-3'>
            I&apos;m a Full Stack Dev
          </p>
        </section>
      </div>
    </div>
  );
}
