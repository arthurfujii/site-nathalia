import Image from 'next/image';

export default function Home() {
  return (
    <section className='container mx-auto' id='home'>
      <div className='my-50 flex flex-col items-center gap-20 sm:flex-row sm:items-center sm:justify-center'>
        <div className='flex max-w-lg items-center justify-center px-10'>
          <Image
            src='/images/logo_vertical.png'
            alt='logo'
            width={530}
            height={345}
          />
        </div>
        <div className='max-w-[300px] md:max-w-md'>
          <h1 className='text-center text-[#9785bd]'>
            Cuidado humanizado para reabilitação motora e neurológica de
            crianças e adultos.
          </h1>
        </div>
      </div>
    </section>
  );
}
