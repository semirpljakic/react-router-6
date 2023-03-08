import { Link } from 'react-router-dom';
import products from '../data';
const Products = () => {
  return (
    <section className='section '>
      {products.map(product => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/products/${product.id}`}>more info</Link>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
