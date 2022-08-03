import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
         <div className={styles.iconcontainer}>
             <AiOutlineMenu size={30} />
         </div>
         <h1 className={styles.best}>
            Best <span className='font-bold'>Eats</span>
         </h1>
         <div className={styles.utilcontainer}>
            <p className={styles.delivery}>Delivery</p>
            <p className={styles.pick}>Pick-Up</p>
         </div>
        </div>
    </div>
  )
}

export default Navbar

const styles = {
    container:`flex justify-between mx-auto max-w-[1640px] items-center p-4`,
    wrapper:`flex items-center`,
    iconcontainer:`cursor-pointer`,
    utilcontainer:`hidden lg:flex items-center bg-black rounded-full p-1 text-[14px]`,
    best:`text-2xl, sm:text-3xl lg:text-4xl px-4`,
    delivery:`bg-black text-white rounded-full font-bold`,
    pick:`p-2 text-white font-bold`
}