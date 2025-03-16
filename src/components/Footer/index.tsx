import Image from 'next/image';

export function Footer() {
  return (
    <footer className='mt-30 bg-[#9785BD]'>
      <div className='container mx-auto px-5 py-20'>
        <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
          <section className='flex flex-col gap-2'>
            <a
              href='https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta.'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex items-center gap-2'>
                <div>
                  <Image
                    src='/images/icon/icon_whatsapp-branco.png'
                    alt='whatsapp'
                    width={20}
                    height={20}
                  />
                </div>
                <small className='font-[Montserrat] text-white'>
                  + 55 11 98765-4321
                </small>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/nathaliacorreia.fisio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex items-center gap-2'>
                <div>
                  <Image
                    src='/images/icon/icon_linkedin-branco.png'
                    alt='linkedin'
                    width={20}
                    height={20}
                  />
                </div>
                <small className='font-[Montserrat] text-white'>
                  /nathaliacorreia.fisio
                </small>
              </div>
            </a>
            <a
              href='https://www.instagram.com/nathaliacorreia.fisio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex items-center gap-2'>
                <div>
                  <Image
                    src='/images/icon/icon_instagram-branco.png'
                    alt='instagram'
                    width={20}
                    height={20}
                  />
                </div>
                <small className='font-[Montserrat] text-white'>
                  @nathaliacorreia.fisio
                </small>
              </div>
            </a>
          </section>
          <section className='flex flex-col gap-2 sm:gap-2'>
            <a
              href='https://maps.app.goo.gl/2KvpyreQFPinGMhz5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex items-center gap-2'>
                <div>
                  <Image
                    src='/images/icon/icon_map-branco.png'
                    alt='pin'
                    width={20}
                    height={20}
                  />
                </div>
                <small className='font-[Montserrat] text-white'>
                  Av. Lins de Vasconcelos, 1609 - Cambuci - São Paulo - SP
                </small>
              </div>
            </a>
            <div className='hidden sm:block'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.744315556996!2d-46.62617132248242!3d-23.577624762194027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597b60f84b39%3A0xcedaf943ca42421e!2sAv.%20Lins%20de%20Vasconcelos%2C%201609%20-%20Aclima%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001537-001!5e0!3m2!1spt-BR!2sbr!4v1741373258320!5m2!1spt-BR!2sbr'
                width='400'
                height='200'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </section>
        </div>
        <small className='text-white'>
          &copy; 2025. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}
