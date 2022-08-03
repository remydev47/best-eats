import React from 'react'
import { data } from '../data/data.js'

const Food = () => {
    console.log(data)
  return (
    <div className={styles.container}>
       <h1 className={styles.restaurants}>Top Rated Restarants</h1>
       {/* Filter row */}
       <div className={styles.wrapper1}>
          {/* filter type */}
          <div>
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className={styles.wrapper2}>
                 <button className={styles.buttonContainer}>All</button>
                 <button className={styles.buttonContainer}>Pizza</button>
                 <button className={styles.buttonContainer}>Burger</button>
                 <button className={styles.buttonContainer}>Chicken</button>
                 <button className={styles.buttonContainer}>Salad</button>
                </div>
            </div>
          </div>
          {/* filter-prices */}
          <div className={styles.filterPrices}>
            <p>Filter Prices</p>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Food

const styles ={
    container:`max-w-[1640px] mx-auto px-4 py-12`,
    restaurants:`text-orange-600 font-bold text-4xl text-center`,
    wrapper1:`flex flex-col lg:flex-row justify-between`,
    wrapper2:`flex justify-between flex-wrap`,
    buttonContainer:`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white`,
    filterPrices:``
}