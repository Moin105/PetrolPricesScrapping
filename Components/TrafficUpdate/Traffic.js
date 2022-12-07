import React,{useEffect,useState} from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'


function Traffic() {
    const [images,setImages]=useState([])
    useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/traffic_images_api`)
    .then(res => {return res.json();} )
    .then(res => setImages(res.data))
    console.log("traffice",images )
    for(var i = 0 ; i< images.length ; i++){
      console.log(images[i].trafic_images)
       for(var j = 0; j< images[i].trafic_images.length ; j++ ){
        console.log(images[i].trafic_images[j].image)
        console.log(images[i].trafic_images[j].image)
        console.log()
        fetch(images[i]?.trafic_images[j]?.image)
        .then(res => {return res.json()})
        .then(
          res => {if (res.response == '404'){
            console.log("jiyo")
          }else{
            console.log("j")
          }
        }
        )
       }
    }
    }, [])
    
  return (
    <>
       <div className={styles.tcard}>
          
       {images.map((image,index)=>{
   return<div key={index} className={styles.contain}>
    <h2 className={styles.h4}>{image.description}</h2>
           <div className={styles.image}>
            <figure className={styles.figure}>
            <Image
            priority
            loader={() => {
                return image.trafic_images[0].image || logo
              }}  
            src={image.trafic_images[0].image || logo} alt="logo" layout="fill" objectFit="cover"/>
            </figure>
          <div className={styles.image2}>
                      <figure className={styles.figure2}>
            <Image  
            priority
          loader={() => {
            return image.trafic_images[1].image
          }}     
            src={image.trafic_images[1].image} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <div className={styles.image3}>
         <figure className={styles.figure3}>
            <Image 
            priority
             loader={() => {
              return image.trafic_images[2].image
            }}  
            src={image.trafic_images[2].image} alt="logo" layout="fill" objectFit="cover"/>

            </figure>            
            <figure className={styles.figure4}>
            <Image 
            priority
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