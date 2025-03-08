import { Header } from '@/components/Header';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </head>
      <body>
        {/* <Menu /> */}
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
