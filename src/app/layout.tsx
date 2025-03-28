import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nathalia Correia - Fisioterapeuta Neurofuncional',
  description:
    'Fisioterapeuta especializada em atendimento neurofuncional, com foco em saúde mental e física.',
  openGraph: {
    title: 'Nathalia Correia - Fisioterapeuta Neurofuncional',
    description:
      'Fisioterapeuta especializada em atendimento neurofuncional, com foco em saúde mental e física.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
      <body>
        <div className='App'>
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
