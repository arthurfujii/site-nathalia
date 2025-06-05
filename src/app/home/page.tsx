import Image from 'next/image';

export default function Home() {
  return (
    <section
      className='container flex min-h-dvh flex-col items-center justify-center gap-10 sm:flex-row'
      id='home'
    >
      <Image
        src='/images/logo_vertical.png'
        alt='logo'
        width={530}
        height={345}
        className='h-auto max-w-1/2 object-contain'
      />
      <h1 className='max-w-1/2 self-center text-center text-[#9785bd]'>
        Cuidado humanizado para reabilitação motora e neurológica de crianças e
        adultos.
      </h1>
    </section>
  );
}
