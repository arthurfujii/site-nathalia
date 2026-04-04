import Image from 'next/image';

export function QuemSou() {
  return (
    <section
      className='container mx-auto flex min-h-[70dvh] flex-col items-center justify-center gap-12 px-6 py-20 sm:flex-row lg:px-12'
      id='quemsou'
    >
      <div className='flex w-full justify-center sm:w-5/12 lg:w-4/12'>
        <div className='relative w-64 max-w-full sm:w-full'>
          <div className='absolute -left-4 -top-4 h-full w-full rounded-2xl bg-[var(--color-pink)] opacity-20'></div>
          <Image
            src='/images/fake_profile_pic.jpg'
            alt='Foto da Dra. Nathalia Correia'
            width={600}
            height={800}
            className='relative z-10 w-full rounded-2xl object-cover shadow-xl grayscale-[20%] transition-all duration-300 hover:grayscale-0'
          />
        </div>
      </div>
      <div className='flex w-full flex-col gap-6 sm:w-7/12 lg:w-8/12 lg:pl-10'>
        <h2 className='font-["Federo"] text-3xl font-medium text-[var(--color-pink)] md:text-4xl'>
          Quem sou
        </h2>
        <div className='flex w-full flex-col gap-4 text-lg leading-relaxed text-[var(--color-text)] md:text-xl'>
          <p>
            Meu nome é Nathalia Correia, sou fisioterapeuta com especialização
            em reabilitação motora e neurológica de crianças e adultos.
          </p>
          <p>
            Atuo há 20 anos na área, com foco em cuidado humanizado e
            atendimento personalizado para cada paciente, entendendo a
            singularidade de cada história.
          </p>
          <p>
            Minha missão é ajudar você a recuperar a qualidade de vida e a
            autonomia, por meio de tratamentos eficazes, inovadores e
            respaldados pela ciência.
          </p>
        </div>
      </div>
    </section>
  );
}
