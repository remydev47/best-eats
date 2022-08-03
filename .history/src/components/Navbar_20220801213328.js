import React, {useState} from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineHeart, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
         <div onClick={() => setNav(!nav)} className={styles.iconcontainer}>
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

        <div className={styles.search}>
          <AiOutlineSearch size={25}/>
          <input
            className='bg-transparent p-2 focus:outline-none w-full'
            placeholder='Search Favourite Dish' 
          />
        </div>
        <div>
          <button className={styles.cartcontainer}>
            <BsFillCartFill size={25} className='mr-2'/> Cart
          </button>
        </div>
        {/* mobilemenu */}
        {nav ? 
        <div className={styles.mobilemenuContainer}>
        </div> : ''}
      {/* side drawer */}
      <div className={
        nav
        ? styles.sidedrawer1
        : styles.sidedrawer2
      }
      >
        <AiOutlineClose size={20} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold text-black'>Eats</span></h2>
        <nav>
          <ul className='flex flex-col p-4 '>
            <l1 className={styles.eat}>
              <TbTruckDelivery size={25} className='mr-4'/>
              Orders
            </l1>
            <l1 className={styles.eat}>
              <MdFavorite size={25} className='mr-4'/>
              Favourites
            </l1>
            <l1 className={styles.eat}>
              <FaWallet size={25} className="mr-4" />
              Wallet
            </l1>
            <l1 className={styles.eat}>
              <MdHelp size={25} className='mr-4' />
              Help
            </l1>
            <l1 className={styles.eat}>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </l1>
            <l1 className={styles.eat}>
              <BsSaveFill size={25} className='mr-4'/>
              Best ones
            </l1>
            <l1 className={styles.eat}>
              <FaUserFriends size={25} className='mr-4' />
              Invite Friends
            </l1>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

const styles = {
    container:`flex justify-between mx-auto max-w-[1640px] items-center p-4`,
    wrapper:`flex items-center`,
    iconcontainer:`cursor-pointer`,
    utilcontainer:`hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]`,
    best:`text-2xl, sm:text-3xl lg:text-4xl px-4`,
    delivery:`bg-black text-white rounded-full font-bold`,
    pick:`p-2 text-white font-bold`,
    search:`bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]`,
    cartcontainer:`bg-black items-center py-2 text-white hidden md:flex rounded-full`,
    mobilemenuContainer:`bg-black/80 fixed w-full h-screen z-10 top-0 left-0`,
    sidedrawer1:`fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300`,
    sidedrawer2:`fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300`,
    eat:`text-xl py-4 flex`
}