import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Federo, Handlee, Montserrat } from 'next/font/google';
import { Metadata } from 'next';

const federo = Federo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-federo',
});

const handlee = Handlee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handlee',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Nathalia Correia | Fisioterapia',
  description:
    'Cuidado humanizado para reabilitação motora e neurológica de crianças e adultos.',
  keywords: [
    'Fisioterapia',
    'Reabilitação',
    'Neurologia',
    'Infantil',
    'Adulto',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <head>
        <link rel='icon' href='/favicon.png' sizes='any' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </head>
      <body
        className={`${federo.variable} ${handlee.variable} ${montserrat.variable} font-sans`}
      >
        <div className='App'>
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
