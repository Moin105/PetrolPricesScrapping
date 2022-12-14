import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import shell from '../public/shell.png'
import esso from '../public/esso.png'
import caltex from '../public/caltex.png'
import spc from '../public/spc.png'
import sa from '../public/sa.png'

function ChangeP(base) {
  const myLoader = ({ src,quality }) => {
    return `https://example.com/${src}&q=${quality || 75}`
  }
const BASE_URL = "http://128.199.227.15/api/compare_prices_api"
const [data,setData] = useState([])
    useEffect(() => {
console.log("base url",BASE_URL)
      fetch(`${process.env.NEXT_PUBLIC_API_URL}compare_prices_api`)
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
    <div className={styles.controlp} id="table">
        <div className={styles.wrapper}>
            <div className={styles.tables}>
                 <h2 className={styles.h2}>Compare Petrol Prices</h2>     
                 <div className={styles.table}>

{data.length != 0 ? <table className={styles.table} style={{width:"100%", borderCollapse: "collapse;" }}>
  <thead className={styles.thead}>
    <tr>
      <th className={styles.ts}  ><span >Grade</span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image quality={100} priority={true}  src={esso} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image quality={100} priority={true} src={shell} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image quality={100} priority={true} src={spc} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image quality={100} priority={true} src={caltex} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={`${styles.hspan}`} ><figure className={styles.plogo}><Image quality={100} priority={true} src={sa} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
    </tr>
  </thead>
  <tbody>
   
     {data.map(((dat,index) =>{
        return <tr key={index}>  <td className={styles.ts}><span style={{fontWeight:"600"}}>{dat.grade}</span></td> 
       <td className={styles.td}> { dat.motorist_fuel_prices[0]?.price == 0 ||dat.motorist_fuel_prices[0]?.price == "N/A"  ?  "-": dat.motorist_fuel_prices[0]?.currency + dat.motorist_fuel_prices[0]?.price}</td>
        <td className={styles.td}>{  dat.motorist_fuel_prices[1]?.price == 0 ||dat.motorist_fuel_prices[1]?.price == "N/A" ?   "-": dat.motorist_fuel_prices[0]?.currency + dat.motorist_fuel_prices[1]?.price}</td>     
        <td className={styles.td}>{  dat.motorist_fuel_prices[2]?.price == 0 ||dat.motorist_fuel_prices[2]?.price == "N/A" ?   "-": dat.motorist_fuel_prices[0]?.currency + dat.motorist_fuel_prices[2]?.price}</td>
        <td className={styles.td}>{  dat.motorist_fuel_prices[3]?.price == 0 ||dat.motorist_fuel_prices[3]?.price == "N/A" ?   "-": dat.motorist_fuel_prices[0]?.currency + dat.motorist_fuel_prices[3]?.price}</td>
         <td className={styles.td}>{  dat.motorist_fuel_prices[4]?.price == 0 ||dat.motorist_fuel_prices[4]?.price == "N/A" ?  "-": dat?.motorist_fuel_prices[0]?.currency + dat?.motorist_fuel_prices[4]?.price}</td>
     </tr> }))} 
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