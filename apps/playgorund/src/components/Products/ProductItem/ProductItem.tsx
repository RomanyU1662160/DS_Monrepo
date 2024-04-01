import styles from './ProductItem.module.css';

/* eslint-disable-next-line */
export interface ProductItemProps {
  card: {
    title: string;
    description: string;
  };
}

export function ProductItem({ card }: ProductItemProps) {
  return (
    <div className="card-primary">
      <h1 className="card-title">{card.title}</h1>
      <div className="card-body">
        <p>{card.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Buy</button>
      </div>
    </div>
  );
}

export default ProductItem;
