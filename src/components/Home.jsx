import React from 'react'
import { CartState } from '../context/Context'


const Home = () => {

    const { state: {products} } = CartState();

    console.log(products);

  return (
    <div className='home'>
      {/* <Filter /> */}
        <div>
            {
                products.map((prod) => {
                   return <span>{prod.name}</span>
                })
            }
        </div>
    </div>
  )
}

export default Home
