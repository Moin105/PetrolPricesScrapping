import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import G1 from '../../public/G1.png'
import G2 from '../../public/G2.png'
import G3 from '../../public/G3.png'
import G4 from '../../public/G4.png'
import G5 from '../../public/G5.png'

function Table() {
const BASE_URL = "http://128.199.227.15/api/compare_prices_api"
const [data,setData] = useState([])
    useEffect(() => {
console.log("base url",BASE_URL)
    
      fetch("http://128.199.227.15/api/compare_prices_api")
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
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image src={G1} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image src={G2} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.vlogo}><Image src={G3} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.clogo}><Image src={G4} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
      <th className={styles.th}><span className={styles.hspan}><figure className={styles.plogo}><Image src={G5} alt="logo" layout="fill" objectFit="contain"/></figure></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>92</span>
      </td> {data.map((dat =>{
        return  <td className={styles.td}>{dat ? dat.motorist_fuel_prices[0].currency + dat.motorist_fuel_prices[0].price.toFixed(2) : "="}
      </td>
      }))}  
     </tr>
     <tr>
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
     </tr>
   
  </tbody>
</table> : <h2>NO DATA FOUND</h2>}

                 </div>
            </div>  
        </div>
   
    </div>
    </>
  )
}

export default Table