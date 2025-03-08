import { Header } from '@/components/Header';
import './globals.css';
import { Footer } from '@/components/Footer';

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
