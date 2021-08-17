import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id:'p1',
    price:10,
    title: 'My First App',
    description: 'My first app ever',
  },
   
  {
    id:'p2',
    price:100,
    title: 'My Second App',
    description: 'My Second app ever',
  },
]

const Products = (props) => {
  

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product =>
         <ProductItem
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         description={product.description}
       />  
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
