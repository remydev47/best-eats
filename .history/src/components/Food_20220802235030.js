import React from 'react'
import { data } from '../data/data.js'

const Food = () => {
    console.log(data)
  return (
    <div>
       <h1>Top Rated Restarants</h1>
       {/* Filter row */}
       <div>
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
          <div></div>
       </div>
    </div>
  )
}

export default Food

const styles ={
    container:``,
    restaurants:``,
    wrapper1:``,
    wrapper2:``,
    butonContainer:``,
    filterprices:``
}