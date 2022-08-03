import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [food, setFood] = useState(data)
    //console.log(data)
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
                 <button className={styles.buttonContainer1}>All</button>
                 <button className={styles.buttonContainer1}>Pizza</button>
                 <button className={styles.buttonContainer1}>Burger</button>
                 <button className={styles.buttonContainer1}>Chicken</button>
                 <button className={styles.buttonContainer1}>Salad</button>
                </div>
            </div>
          </div>
          {/* filter-prices */}
          <div>
            <p className='font-bold text-gray-700'>Filter Prices</p>
            <div>
              <button className={styles.buttonContainer1}>$</button>
              <button className={styles.buttonContainer1}>$$</button>
              <button className={styles.buttonContainer1}>$$$</button>
              <button className={styles.buttonContainer1}>$$$$</button>
            </div>
          </div>
       </div>
       {/* display-restaurants */}
       <div className={styles.topRestaurants}>
        {food.map((item, index) => (
            <div key={index} className={styles.itemcontainer}>
                <img 
                  src={item.image}
                  alt={item.name}
                  className='w-full h-[200px] object-cover rounded-t-lg'
                />
                <div>
                    <p>{item.name}</p>
                    <p>
                        <span>{item.price}</span>
                    </p>
                </div>
            </div>    
        ))}
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
    wrapper3:`flex justify-between max-w-[300px] w-full`,
    buttonContainer1:`m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white`,
    topRestaurants:`grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4`,
    itemcontainer:`border shadow-lg hover:scale-105 duration-300`
}