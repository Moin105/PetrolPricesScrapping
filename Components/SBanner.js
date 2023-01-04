import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/banner.png'
import b1 from '../public/b1.png'
import b2 from '../public/b2.png'
import b3 from '../public/b3.png'
function SBanner({img,text,img2}) {
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
    <>
    <div className={styles.sbanner}>
       <figure className={styles.figure}>
      {show ?  <Image priority src={img2} alt="banner" layout="fill" width={100} objectFit="cover"/>:<Image priority src={img} alt="banner" layout="fill" width={100} objectFit="cover"/> }
       </figure>
       <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.h1}>
                      {text}
                    </h1>
                </div>
                {/* <div className={styles.right}>
                     <div className={styles.b1}>
                        <div className={styles.box}>
                        <figure className={styles.box1}>
                           <Image src={b1} alt="banner" layout="fill" width={100} objectFit="contain"/>
                        </figure>
                        </div>
                        <p className={styles.p}>Compare petrol prices<br></br> in Malaysia.</p>
                     </div>
                     <div className={styles.b2}>
                        <div className={styles.box}>
                        <figure className={styles.box1}>
                           <Image src={b2} alt="banner" layout="fill" width={100} objectFit="contain"/>
                        </figure>
                        </div>
                        <p className={styles.p}>Get COE Prices<br></br> comparison.</p>
                     </div>
                     <div className={styles.b1}>
                        <div className={styles.box}>
                        <figure className={styles.box1}>
                           <Image src={b1} alt="banner" layout="fill" width={100} objectFit="contain"/>
                        </figure>
                        </div>
                        <p className={styles.p}>Get latest traffic & parking<br></br> Update..</p>
                     </div>
                </div> */}
            </div>
       </div>
    </div>
    </>
  )
}

export default SBanner