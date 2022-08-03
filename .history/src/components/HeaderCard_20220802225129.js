import React from 'react'

const HeaderCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div>
              <p>Wagamama 800 str</p>
              <p>Through 8/26</p>
              <button>
                Order Now!
              </button>
            </div>
            <img 
               src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
               alt="/"
            />
        </div>    
    </div>
  )
}

export default HeaderCard

const styles = {
  container:`max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6`,
  wrapper:`rounded-xl relative`,
  overlaycontainer:`absolute h-full w-full bg-black/50 rounded-xl text-white`
}