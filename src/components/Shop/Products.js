import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = [{
    id: 1,
    title: 'Book',
    price: 7,
    description: 'This is a Book!'
  }, {
    id: 2,
    title: 'TestPaper',
    price: 6,
    description: 'This is a TestPaper - amazing!'
  },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item) => {
          return <ProductItem id={item.id} key={item.id} title={item.title} price={item.price} description={item.description} />
        })}
      </ul>
    </section>
  );
};

export default Products;
