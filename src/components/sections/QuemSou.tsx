import Image from 'next/image';

export default function QuemSou() {
  return (
    <section className='container mx-auto' id='quemsou'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-[#FBC971]'>Quem sou</h1>
        <div className='flex flex-col items-center justify-center gap-10 sm:flex-row'>
          <div className='block w-full max-w-xs'>
            <Image
              src='/images/fake_profile_pic.jpg'
              alt='foto de perfil'
              width={600}
              height={800}
              className='h-auto w-full rounded-2xl'
            />
          </div>
          <div className='flex flex-1 flex-col justify-evenly gap-5'>
            <div className='flex w-full flex-col gap-1'>
              <p>
                Meu nome é Ana Paula, sou fisioterapeuta com especialização em
                reabilitação motora e neurológica de crianças e adultos.
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
        </div>
      </div>
    </section>
  );
}
