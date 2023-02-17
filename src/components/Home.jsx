import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filter from './Filters';
import "./styles.css";


const Home = () => {

    const { state: {products} } = CartState();

    console.log(products);

  return (
    <div className='home'>
      <Filter />
        <div className='productContainer'>
            {
                products.map((prod) => {
                   return <SingleProduct prod={prod} key={prod.Id}/>
                })
            }
        </div>
    </div>
  )
}

export default Home
