import { Product } from 'app/types';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductsWrapper.module.css';

interface ProductsWrapperProps {
  products: Product[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className={styles.ProductsWrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
