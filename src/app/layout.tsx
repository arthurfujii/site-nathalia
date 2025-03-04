import { Header } from '@/components/Header';
import './globals.css';
import Image from 'next/image';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`antialiased`}>
        <Header />
        <div>
          {children}

          <Image
            src='/images/conexoes.png'
            alt='background'
            width={1920}
            height={1080}
            style={{
              position: 'fixed',
              top: -300,
              left: '50%',
              zIndex: -1,
              transform: 'translateX(-50%)',
            }}
          />
          <Image
            src='/images/movimento.png'
            alt='background'
            width={700}
            height={1231}
            style={{ position: 'fixed', bottom: -480, left: -300, zIndex: -1 }}
          />
          <Image
            src='/images/movimento.png'
            alt='background'
            width={700}
            height={1231}
            style={{
              position: 'fixed',
              bottom: -300,
              right: -300,
              zIndex: -1,
              transform: 'scaleX(-1)',
            }}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
