import ProductsList from '../../components/Products/ProdouctList/Products';
import styles from './Products.module.css';

const products = [
  {
    title: 'Product 1',
    description: 'This is a description for product 1',
  },
  {
    title: 'Product 2',
    description: 'This is a description for product 2',
  },
  {
    title: 'Product 3',
    description: 'This is a description for product 3',
  },
];

/* eslint-disable-next-line */
export interface ProductsProps {}

export function ProductsPage(props: ProductsProps) {
  return (
    <div className={styles['container']}>
      <ProductsList products={products} />
    </div>
  );
}

export default ProductsPage;
