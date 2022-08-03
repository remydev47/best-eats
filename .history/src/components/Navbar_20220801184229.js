import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
         <div className={styles.iconcontainer}>
             <AiOutlineMenu size={30} />
         </div>
         <h1 className=''>
            Best <span>Eats</span>
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
    container:``,
    wrapper:``,
    iconcontainer:``,
    utilcontainer:``,
    delivery:``,
    pick:``
}