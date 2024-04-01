import ProductItem from '../ProductItem/ProductItem';
import styles from './Products.module.css';

/* eslint-disable-next-line */
export interface ProductsProps {
  products: Array<{
    title: string;
    description: string;
  }>;
}

export function ProductsList({ products }: ProductsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <div className={styles['products']}>
        {products.map((product, index) => (
          <ProductItem key={index} card={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
