import React,{useEffect,useState} from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'


function Traffic(base) {
    const [images,setImages]=useState([])
    useEffect(() => {
    fetch('https://admin.extramiless.com/api/traffic_images_api')
    .then(res => {return res.json();} )
    .then(res => setImages(res.data))
    console.log("traffice",images )
    }, [])
    
  return (
    <>
       <div className={styles.tcard}>
          
       {images.map((image,index)=>{
   return<div className={styles.contain}>
    <h2 className={styles.h4}>{image.description}</h2>
           <div className={styles.image}>
            <figure className={styles.figure}>
            <Image
            loader={() => {
                return image.trafic_images[0].image
              }}  
            src={image.trafic_images[0].image} alt="logo" layout="fill" objectFit="cover"/>
            </figure>
          <div className={styles.image2}>
                      <figure className={styles.figure2}>
            <Image  
          loader={() => {
            return image.trafic_images[1].image
          }}     
            src={image.trafic_images[1].image} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <div className={styles.image3}>
         <figure className={styles.figure3}>
            <Image 
             loader={() => {
              return image.trafic_images[2].image
            }}  
            src={image.trafic_images[2].image} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <figure className={styles.figure4}>
            <Image 
             loader={() => {
              return image.trafic_images[3].image
            }}  
            src={image.trafic_images[3].image} alt="logo" layout="fill" objectFit="cover"/>

            </figure>

            </div>
   
          </div>  
  
           </div>
          </div>
       }) 
         }
      
       
       
        
    
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