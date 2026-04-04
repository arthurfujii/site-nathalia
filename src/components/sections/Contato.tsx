'use client';
import Image from 'next/image';
import { useState } from 'react';

export function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: null, message: '' });

    const formData = new FormData(event.target as HTMLFormElement);
    const emailStr = formData.get('email') as string;
    
    const validateEmail = (email: string) => {
      const regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
      return regex.test(email);
    };

    if (!validateEmail(emailStr)) {
      setFeedback({ type: 'error', message: 'Por favor, insira um e-mail válido.' });
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.get('nome') as string,
      email: emailStr,
      subject: 'Contato pelo site',
      message: formData.get('mensagem') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData?.error || `Erro: ${response.status}`);
      }

      setFeedback({ type: 'success', message: 'Sua mensagem foi enviada com sucesso!' });
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'Houve um erro ao enviar a mensagem. Tente novamente mais tarde.';
      setFeedback({ type: 'error', message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className='container mx-auto flex flex-col items-center justify-center gap-12 px-6 py-20 lg:px-12'
      id='contato'
    >
      <div className='flex w-full flex-col text-center sm:w-8/12 lg:w-6/12'>
        <h2 className='mb-4 font-["Federo"] text-3xl font-medium text-[var(--color-green)] md:text-4xl'>
          Contato
        </h2>
        <p className='text-lg text-[var(--color-text)]'>
          Caso queira marcar uma avaliação ou atendimento, envie-me uma mensagem, e retornarei o mais breve possível.
        </p>
      </div>

      <div className='flex w-full flex-col gap-12 sm:w-10/12 sm:flex-row lg:w-8/12'>
        <section className='flex w-full flex-col gap-5 sm:w-1/2'>
          <form
            className='flex w-full flex-col gap-4'
            onSubmit={handleSubmit}
          >
            <label htmlFor='name' className='sr-only'>Nome</label>
            <input
              type='text'
              id='name'
              placeholder='Seu Nome'
              className='block w-full rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm placeholder:text-gray-400 focus:border-[var(--color-green)] focus:ring-2 focus:ring-[var(--color-green)] focus:outline-none'
              name='nome'
              required
            />
            <label htmlFor='email' className='sr-only'>E-mail</label>
            <input
              type='email'
              id='email'
              placeholder='Seu E-mail'
              className='block w-full rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm placeholder:text-gray-400 focus:border-[var(--color-green)] focus:ring-2 focus:ring-[var(--color-green)] focus:outline-none'
              name='email'
              required
            />
            <label htmlFor='message' className='sr-only'>Mensagem</label>
            <textarea
              id='message'
              placeholder='Sua Mensagem...'
              className='h-32 w-full resize-y rounded-xl border border-gray-300 bg-white px-5 py-3 shadow-sm placeholder:text-gray-400 focus:border-[var(--color-green)] focus:ring-2 focus:ring-[var(--color-green)] focus:outline-none sm:h-48'
              name='mensagem'
              required
              minLength={10}
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full rounded-xl bg-[var(--color-green)] px-5 py-4 font-bold text-white shadow-md transition-colors hover:bg-[#a6bd5a] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto'
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            
            {feedback.type && (
              <div
                className={`mt-4 rounded-xl p-4 text-center ${
                  feedback.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {feedback.message}
              </div>
            )}
          </form>
        </section>

        <section className='flex w-full flex-col gap-6 sm:w-1/2 sm:justify-center'>
          <a
            href='https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta.'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-row items-center gap-4 rounded-xl p-3 transition-colors hover:bg-gray-50'
          >
            <Image
              src='/images/icon/icon_whatsapp.png'
              alt='whatsapp'
              width={35}
              height={35}
              className='transition-transform group-hover:scale-110'
            />
            <p className='text-lg font-medium text-[var(--color-text)]'>+55 11 98765-4321</p>
          </a>
          <a
            href='https://www.linkedin.com/in/nathaliacorreia.fisio/'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-row items-center gap-4 rounded-xl p-3 transition-colors hover:bg-gray-50'
          >
            <Image
              src='/images/icon/icon_linkedin.png'
              alt='linkedin'
              width={35}
              height={35}
              className='transition-transform group-hover:scale-110'
            />
            <p className='text-lg font-medium text-[var(--color-text)]'>/nathaliacorreia.fisio</p>
          </a>
          <a
            href='https://www.instagram.com/nathaliacorreia.fisio/'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-row items-center gap-4 rounded-xl p-3 transition-colors hover:bg-gray-50'
          >
            <Image
              src='/images/icon/icon_instagram.png'
              alt='instagram'
              width={35}
              height={35}
              className='transition-transform group-hover:scale-110'
            />
            <p className='text-lg font-medium text-[var(--color-text)]'>@nathaliacorreia.fisio</p>
          </a>
        </section>
      </div>
    </section>
  );
}
