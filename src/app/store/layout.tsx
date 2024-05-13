import { getCollections } from 'app/services/shopify/collections';
import Link from 'next/link';
import { ReactNode } from 'react';

export default async function CategoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  const collections = await getCollections();

  console.log(collections);

  return (
    <div>
      <nav>
        {collections.map((collection: any) => (
          <Link href={`/store/${collection.handle}`} key={collection.id}>
            {collection.title}
          </Link>
        ))}
      </nav>

      {children}
    </div>
  );
}
