import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.category}>Top Rated Menu</h1>
        <div  className={styles.categoryContainer}>
            {categories.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <img src={item.image} slt={item.image}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category

const styles ={
    container:`max-w-[1640px] py-12 px-4`,
    category:`text-orange-400 font-bold text-4xl text-center`,
    categoryContainer:`grid grid-cols-2 md:grid-cols-4 gap-6 py-6`
}