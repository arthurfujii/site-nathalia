import Image from 'next/image';

export default function QuemSou() {
  return (
    <section
      className='container flex min-h-[calc(100dvh-80px)] flex-col items-center gap-10 p-10 sm:flex-row'
      id='quemsou'
    >
      <Image
        src='/images/fake_profile_pic.jpg'
        alt='foto de perfil'
        width={600}
        height={800}
        className='max-w-64 rounded-2xl object-contain'
      />
      <div className='flex flex-col gap-5'>
        <h1 className='text-[#FBC971]'>Quem sou</h1>
        <div className='flex w-full flex-col gap-1'>
          <p>
            Meu nome é Nathalia Correia, sou fisioterapeuta com especialização
            em reabilitação motora e neurológica de crianças e adultos.
          </p>
          <p>
            Atuo há 20 anos na área, com foco em cuidado humanizado e
            atendimento personalizado para cada paciente.
          </p>
          <p>
            Minha missão é ajudar você a recuperar a qualidade de vida e a
            autonomia, por meio de tratamentos eficazes e inovadores.
          </p>
        </div>
      </div>
    </section>
  );
}
