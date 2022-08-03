import React from 'react'

const HeaderCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.overlaycontainer}>
              <p className={styles.desc}>Wagamama 800 str</p>
              <p className={styles.path}>Through 8/26</p>
              <button className={styles.ordernow}>
                Order Now!
              </button>
            </div>
            <img 
               src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
               alt="/"
               className={styles.image}
            />
        </div>  
        <div className={styles.wrapper}>
            <div className={styles.overlaycontainer}>
              <p className={styles.desc}>Wagamama 800 str</p>
              <p className={styles.path}>Through 8/26</p>
              <button className={styles.ordernow}>
                Order Now!
              </button>
            </div>
            <img 
               src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
               alt="/"
               className={styles.image}
            />
        </div>    
    </div>
  )
}

export default HeaderCard

const styles = {
  container:`max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6`,
  wrapper:`rounded-xl relative`,
  overlaycontainer:`absolute h-full w-full bg-black/50 rounded-xl text-white`,
  desc:`font-bold text-2xl px-2 pt- 4`,
  path:`px-2`,
  ordernow:`border-white bg-white text-black mx-2 bottom-4`,
  image:`max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl`
}