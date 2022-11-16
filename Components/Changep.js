import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import shell from '../public/shell.png'
import esso from '../public/esso.png'
import caltex from '../public/caltex.png'
import spc from '../public/spc.png'
import sa from '../public/sa.png'

function ChangeP(base) {
const BASE_URL = "http://128.199.227.15/api/compare_prices_api"
const [data,setData] = useState([])
    useEffect(() => {
console.log("base url",BASE_URL)
      fetch("https://admin.extramiless.com/api/compare_prices_api")
      .then(response => {
        console.log("res",response);
        if(response.status == 200) {            
            console.log("res",response);
            return response.json();
      }
    }).then(response =>
      {
        setData(response.data)
        console.log("dasa",data)
      }
    )
    }, [])
    
  return (
    <>
    <div className={styles.controlp}>
        <div className={styles.wrapper}>
            <div className={styles.tables}>
                 <h2 className={styles.h2}>Compare Petrol Prices</h2>     
                 <div className={styles.table}>

{data.length != 0 ? <table className={styles.table} style={{width:"100%", borderCollapse: "collapse;" ,borderRadius:"6px 6px 0px 0px"}}>
  <thead className={styles.thead}>
    <tr>
      <th className={styles.ts}  style={{borderRadius:"6px 0px 0px 0px"}}><span >Grade</span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image priority src={esso} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image priority src={shell} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image priority src={spc} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image priority src={caltex} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image priority src={sa} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
    </tr>
  </thead>
  <tbody>
   
     {data.map(((dat,index) =>{
        return <tr key={index}>  <td className={styles.ts}><span style={{fontWeight:"600"}}>{dat.grade}</span>
      </td> <td className={styles.td}>{ dat ? dat.motorist_fuel_prices[0].currency + dat.motorist_fuel_prices[0].price.toFixed(2) : "="}</td>
        <td className={styles.td}>{ dat ? dat.motorist_fuel_prices[0].currency + dat.motorist_fuel_prices[1].price.toFixed(2) : "="}</td>     
        <td className={styles.td}>{ dat ? dat.motorist_fuel_prices[0].currency + dat.motorist_fuel_prices[2].price.toFixed(2) : "="}</td>
        <td className={styles.td}>{ dat ? dat.motorist_fuel_prices[0].currency + dat.motorist_fuel_prices[3].price.toFixed(2) : "="}</td>
        <td className={styles.td}>{ dat ? dat.motorist_fuel_prices[0].currency + dat.motorist_fuel_prices[4].price.toFixed(2) : "="}</td>
     </tr> }))}  
     {/* <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>95</span>
      </td> {data.map((dat =>{
        return  <td className={styles.td}>{dat.motorist_fuel_prices[1].currency + dat.motorist_fuel_prices[1].price.toFixed(2)}
      </td>
      }))}  
     </tr>
     <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>98</span>
      </td> {data.map((dat =>{
        return  <td className={styles.td}>{dat.motorist_fuel_prices[2].currency + dat.motorist_fuel_prices[2].price.toFixed(2)}
      </td>
      }))}  
     </tr>
     <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>Diesel</span>
      </td> {data.map((dat =>{
        return  <td className={styles.td}>{dat.motorist_fuel_prices[3].currency + dat.motorist_fuel_prices[3].price.toFixed(2)}
      </td>
      }))}  
     </tr>
     <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>Premium</span>
      </td> {data.map((dat =>{
        return  <td className={styles.td}>{dat.motorist_fuel_prices[4].currency + dat.motorist_fuel_prices[4].price.toFixed(2)}
      </td>
      }))}  
     </tr> */}
   
  </tbody>
</table> : <h2>NO DATA FOUND</h2>}

                 </div>
            </div>  
        </div>
   
    </div>
    </>
  )
}

export default ChangeP