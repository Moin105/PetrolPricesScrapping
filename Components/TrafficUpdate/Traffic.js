import React,{useEffect,useState} from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'


function Traffic() {
    const [images,setImages]=useState([])
    useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}traffic_images_api`)
    .then(res => {return res.json();} )
    .then(res => setImages(res.data))
    console.log("traffice",images )
    // for(var i = 0 ; i< images.length ; i++){
    //   console.log(images[i].trafic_images)
    //    for(var j = 0; j< images[i].trafic_images.length ; j++ ){
    //     console.log(images[i].trafic_images[j].image)
    //     console.log(images[i].trafic_images[j].image)
    //     console.log()
    //     fetch(images[i]?.trafic_images[j]?.image)
    //     .then(res => {return res.json()})
    //     .then(
    //       res => {if (res.response == '404'){
    //         console.log("jiyo")
    //       }else{
    //         console.log("j")
    //       }
    //     }
    //     )
    //    }
    // }
    }, [])
    
  return (
    <>
       <div className={styles.tcard}>
          

   <div  className={styles.contain}>
          <div className={styles.image}>
            <figure className={styles.figure}>
            <Image
            priority
            loader={() => {
              return images[0] || logo
              }}  
          src={images[0] || logo} alt="logo" layout="fill" objectFit="cover"/>
            </figure>
          <div className={styles.image2}>
                      <figure className={styles.figure2}>
            <Image  
            priority
          loader={() => {
          return images[1]
          }}     
          src={images[1]} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <div className={styles.image3}>
         <figure className={styles.figure3}>
            <Image 
            priority
             loader={() => {
            return images[2]
            }}  
          src={images[2]} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <figure className={styles.figure4}>
            <Image 
            priority
             loader={() => {
            return images[3]
            }}  
          src={images[3]} alt="logo" layout="fill" objectFit="cover"/>

            </figure>

            </div>
   
          </div>  
  
           </div>
          </div>
          <div  className={styles.contain}>
          <div className={styles.image}>
            <figure className={styles.figure}>
            <Image
            priority
            loader={() => {
              return images[0] || logo
              }}  
          src={images[0] || logo} alt="logo" layout="fill" objectFit="cover"/>
            </figure>
          <div className={styles.image2}>
                      <figure className={styles.figure2}>
            <Image  
            priority
          loader={() => {
          return images[1]
          }}     
          src={images[1]} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <div className={styles.image3}>
         <figure className={styles.figure3}>
            <Image 
            priority
             loader={() => {
            return images[2]
            }}  
          src={images[2]} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <figure className={styles.figure4}>
            <Image 
            priority
             loader={() => {
            return images[3]
            }}  
          src={images[3]} alt="logo" layout="fill" objectFit="cover"/>

            </figure>

            </div>
   
          </div>  
  
           </div>
          </div>
       </div>
    </>
  )
}

export default Traffic



// {images.map((image ,index )=> {
          
//   if(index % 1 == 0){
//     return   <figure className={styles.fig}>
//     <Image  loader={() => {
//   return image.image
// }}  
//     src={image.image} alt="logo" layout="fill" objectFit="cover"/>
// </figure>
//   }
//       })}