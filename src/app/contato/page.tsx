'use client';
import Image from 'next/image';

export default function Contato() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData['message']);

      alert('Mensagem enviada com sucesso');
    } catch (err) {
      console.error(err);
      alert('Houve um erro ao enviar a mensagem, tente novamente');
    }
  }

  return (
    <section className='container mx-auto' id='contato'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[#BCD079]'>Contato</h1>
        <p className='place-self-start'>
          Caso queira marcar uma avaliação ou atendimento, envie-me uma
          mensagem:
        </p>
        <section className='flex flex-col gap-5 sm:flex-row'>
          <section className='flex w-full flex-col justify-between gap-5'>
            <form
              className='flex w-full flex-col gap-2.5'
              onSubmit={handleSubmit}
            >
              <label htmlFor='nome' className='hidden'>
                Nome
              </label>
              <input
                type='text'
                id='name'
                placeholder='Nome'
                className='block w-full rounded-2xl border border-gray-500 bg-white px-5 py-2.5 sm:max-w-md'
                name='nome'
              />
              <label htmlFor='email' className='hidden'>
                E-mail
              </label>
              <input
                type='email'
                id='email'
                placeholder='E-mail'
                className='block w-full rounded-2xl border border-gray-500 bg-white px-5 py-2.5 sm:max-w-md'
                name='email'
              />
              <label htmlFor='mensagem' className='hidden'>
                Mensagem
              </label>
              <textarea
                id='message'
                placeholder='Mensagem'
                className='h-30 w-full resize-none rounded-2xl border border-gray-500 bg-white px-5 py-2.5 sm:h-60 sm:max-w-md'
                name='mensagem'
              />
              <button
                type='submit'
                className='w-32 rounded-2xl border bg-[#9785BD] px-5 py-2.5 text-white'
              >
                Enviar
              </button>
            </form>
          </section>
          <section className='order-first flex w-full flex-col gap-3 sm:order-last'>
            <a
              href='https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta.'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex flex-row items-center gap-2'>
                <Image
                  src='/images/icon/icon_whatsapp.png'
                  alt='whatsapp'
                  width={25}
                  height={25}
                />
                <p>+ 55 11 98765-4321</p>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/nathaliacorreia.fisio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex flex-row items-center gap-2'>
                <Image
                  src='/images/icon/icon_linkedin.png'
                  alt='linkedin'
                  width={25}
                  height={25}
                />
                <p>/nathaliacorreia.fisio</p>
              </div>
            </a>
            <a
              href='https://www.instagram.com/nathaliacorreia.fisio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex flex-row items-center gap-2'>
                <Image
                  src='/images/icon/icon_instagram.png'
                  alt='instagram'
                  width={25}
                  height={25}
                />
                <p>@nathaliacorreia.fisio</p>
              </div>
            </a>
          </section>
        </section>
      </div>
    </section>
  );
}
