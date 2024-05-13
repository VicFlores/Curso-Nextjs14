import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header } from 'app/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Future world',
//     default: 'Future world',
//   },
//   description:
//     'Future world is a place where you can find the latest news and updates about the future of technology',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
