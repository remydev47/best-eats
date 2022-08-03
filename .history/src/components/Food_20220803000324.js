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
                <p>Filter Type</p>
                <button>All</button>
                <button>Pizza</button>
                <button>Burger</button>
                <button>Chicken</button>
                <button>Salad</button>
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
    wrapper2:``,
    butonContainer:``,
    filterPrices:``
}