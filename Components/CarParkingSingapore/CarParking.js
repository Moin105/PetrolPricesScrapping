import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import shell from '../../public/shell.png'
import esso from '../../public/esso.png'
import caltex from '../../public/caltex.png'
import spc from '../../public/spc.png'
import sa from '../../public/sa.png'

function CarParking() {
const BASE_URL = "http://128.199.227.15/api/car_parking_singapur_api"
const [data,setData] = useState([])
    useEffect(() => {
console.log("base url",BASE_URL)
      fetch("http://128.199.227.15/api/car_parking_singapur_api")
      .then(response => {
        console.log("res",response);
        if(response.status == 200) {            
            console.log("res",response);
            return response.json();
      }
    }).then(response =>
      {
        setData(response.data)
        console.log("car parkin",data)
      }
    )
    }, [])
    
  return (
    <>
    <div className={styles.controlp}>
        <div className={styles.wrapper}>
            <div className={styles.citi}>
                 <h2 className={styles.h2}>Car Park Rates For Cars in Singapore</h2>     
                 <div className={styles.tabs}>
                      <h2 className={styles.tableheading}>List of Shopping Malls and Carpark rates in Singapaore</h2>
                      <div className={styles.container}>
                        {
                            data.map(point =>{
                                return  <div className={styles.cell} onClick={()=>{console.log("bhains",point.name)}}>{point.name}</div>
                            })
                        }
                      </div>
                 </div>
               
            </div>  
        </div>
   
    </div>
    </>
  )
}

export default CarParking
