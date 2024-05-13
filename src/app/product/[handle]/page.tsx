import { SanitizeHTML } from 'app/components';
import { getProducts } from 'app/services/shopify/products';
import Image from 'next/image';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const id = searchParams.id;
  const products = await getProducts(id);

  return (
    <div>
      <h1>Product Page</h1>

      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.title}</h2>

          <SanitizeHTML tag='p'>{product.description}</SanitizeHTML>

          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          />

          <button>Add to Cart</button>

          <p>Price: {product.price}</p>

          <p>Quantity: {product.quantity}</p>

          <p>Tags: {product.tags}</p>

          <p>Handle: {product.handle}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
