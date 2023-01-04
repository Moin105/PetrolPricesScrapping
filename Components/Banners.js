import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import b1 from '../public/b1.png'

function Banners({img,img2}) {
  const [show ,setShow] = useState(false)
  
  useEffect(() => {
     if (typeof window !== 'undefined') {
        console.log('You are on the browser');
      if(window.innerWidth < "580" ){
        // ✅ Can use window here
        console.log("mouse",window.innerWidth);
        setShow(true)
      }
      else if(window.innerWidth > "580"){
        setShow(false)
      }
        window.addEventListener('mousemove', () => {
          console.log('Mouse moved',window.innerWidth);
        });
      } else {
        console.log('You are on the server');
        // ⛔️ Don't use window here
      }
  
  }, [show])
  return (
    <div className={styles.banners}>
        <figure className={styles.figure}>
        {show ?  <Image priority src={img2} alt="banner" layout="fill" width={100} objectFit="cover"/>:<Image  src={img} alt="banner" layout="fill"  objectFit="cover" quality={100}/> }
        </figure>
    </div>
  )
}

export default Banners