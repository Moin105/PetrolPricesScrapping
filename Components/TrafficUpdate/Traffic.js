import React,{useEffect,useState} from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { FallbackImage } from '../FallBack'


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
    const  addDefaultSrc = (ev)=>{
     console.log("emd",ev.target.src)
    }
  return (
    <>
       <div className={styles.tcard}>
          

   <div  className={styles.contain}>
        <h2 className={styles.h2}>Woodlands Causeway</h2>
          <div className={styles.image}>
            <figure className={styles.figure}>
            <FallbackImage
    key={images[0]}
    layout="fill"
    src={images[0]}
    fallbackSrc={images[0]}
/>
            </figure>
          <div className={styles.image2}>
                      <figure className={styles.figure2}>
                      <FallbackImage
    key={images[1]}
    layout="fill"
    src={images[1]}
    fallbackSrc={images[1]}
/>
            </figure>            
            <div className={styles.image3}>
         <figure className={styles.figure3}>
         <FallbackImage
    key={images[2]}
    layout="fill"
    src={images[2]}
    fallbackSrc={images[2]}
/>
            </figure>            
            <figure className={styles.figure4}>
            <FallbackImage
    key={images[3]}
    layout="fill"
    src={images[3]}
    fallbackSrc={images[3]}
/>
            </figure>

            </div>
   
          </div>  
  
           </div>
          </div>
          <div  className={styles.contain}>
          <h2 className={styles.h2}>Tuas Second Link</h2>
          <div className={styles.image}>
            <figure className={styles.figure}>
            <FallbackImage
    key={images[0]}
    layout="fill"
    src={images[0]}
    fallbackSrc={images[0]}
/>
            {/* <Image
            onError={addDefaultSrc}
            priority
            loader={() => {
              return images[0] || logo
              }}  
          src={images[0] || logo} alt="logo" layout="fill" objectFit="cover"/> */}
            </figure>
          <div className={styles.image2}>
                      <figure className={styles.figure2}>
                      <FallbackImage
    key={images[1]}
    layout="fill"
    src={images[1]}
    fallbackSrc={images[1]}
/>

            </figure>            
            <div className={styles.image3}>
         <figure className={styles.figure3}>
         <FallbackImage
    key={images[2]}
    layout="fill"
    src={images[2]}
    fallbackSrc={images[2]}
/>
            </figure>            
            <figure className={styles.figure4}>
            <FallbackImage
    key={images[3]}
    layout="fill"
    src={images[3]}
    fallbackSrc={images[3]}
/>
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
//     <Image 
// onError={addDefaultSrc} loader={() => {
//   return image.image
// }}  
//     src={image.image} alt="logo" layout="fill" objectFit="cover"/>
// </figure>
//   }
//       })}