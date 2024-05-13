import { Description, Hero, MainProducts } from 'app/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
