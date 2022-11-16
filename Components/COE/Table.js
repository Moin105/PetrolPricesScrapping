import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import G1 from '../../public/G1.png'
import G2 from '../../public/G2.png'
import G3 from '../../public/G3.png'
import G4 from '../../public/G4.png'
import G5 from '../../public/G5.png'

function Table(props) {
const BASE_URL = "http://128.199.227.15/api/open_bidding_data_api"
const [data,setData] = useState([])
const [inputs ,setInputs] = useState({
  bidding_number:props.data[0].bidding_number,
  year:props.data[0].year ,
  month:props.data[0].month
})
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(inputs),
}; 
    useEffect(() => {
      console.log("log",props.data)
console.log("base url",BASE_URL)
      fetch("https://admin.extramiless.com/api/open_bidding-api",requestOptions)
      .then(response => {
        console.log("rest",response);
        if(response.status == 200) {            
            console.log("rest",response);
            return response.json();
      }
    }).then(response =>{return setData(response.data)})
    
    console.log("sad",props)
    }, [inputs])
    
  return (
    <>
    <div className={styles.controlp}>
        <div className={styles.wrapper}>
            <div className={styles.tables}>
                 <h2 className={styles.h2}>COE Results</h2>     
                 <div className={styles.table}>

{data.length != 0 ? <table className={styles.table} style={{width:"100%", borderCollapse: "collapse;" ,borderRadius:"6px 6px 0px 0px"}}>
  <thead className={styles.thead}>
    <tr>
      <th className={styles.ts}  style={{borderRadius:"6px 0px 0px 0px"}}><span >COE Category</span></th>
      <th className={styles.th}><span className={styles.hspan}> <figure className={styles.plogo}><Image priority src={G1} alt="logo" layout="fill" objectFit="contain"/></figure><p className={styles.p}>Category A</p></span></th>
      <th className={styles.th}><span className={styles.hspan}> <figure className={styles.plogo}><Image priority src={G2} alt="logo" layout="fill" objectFit="contain"/></figure><p className={styles.p}>Category B</p></span></th>
      <th className={styles.th}><span className={styles.hspan}> <figure className={styles.vlogo}><Image priority src={G3} alt="logo" layout="fill" objectFit="contain"/></figure><p className={styles.p}>Category C</p></span></th>
      <th className={styles.th}><span className={styles.hspan}> <figure className={styles.dlogo}><Image priority src={G5} alt="logo" layout="fill" objectFit="contain"/></figure><p className={styles.p}>Category D</p></span></th>
      <th className={styles.th}><span className={styles.hspan}> <figure className={styles.clogo}><Image priority src={G4} alt="logo" layout="fill" objectFit="contain"/></figure><p className={styles.p}>Category E</p></span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p className={styles.des}></p></td>
      <td><p className={styles.des}>{"Cars < 1600cc &" }<br></br> {"130bhp or 110 kw"}</p></td>
      <td><p className={styles.des}>{"Cars < 1600cc & "}<br></br>{"130bhp or 110 kw"}</p></td>
      <td><p className={styles.des}>{"Good vehicle and"}<br></br>{"Bus"}</p></td>
      <td><p className={styles.des}>{"Motortcycle"}</p></td>
      <td><p className={styles.des}>{"Open-All except"}<br></br>{"motorcycle"} </p></td>
    </tr>
     <tr style={{background:"#F9F9FA"}}>
     <td className={styles.ts}><span style={{fontWeight:"600" }}>Quota Premium</span>
      </td> {data?.map(((dat,index) =>{
        return  <td  key={index}className={styles.td}>{ "$" + dat.QP}
      </td>
      }))}  
     </tr>
    <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>Change</span>
      </td> {data.map(((dat,index) =>{
        return  <td key={index} className={styles.td}>{dat.change_in_price}
      </td>
      }))}  
     </tr>
      <tr style={{background:"#F9F9FA"}}>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>Quota</span>
      </td> {data.map(((dat,index) =>{
        return  <td key={index} className={styles.td}>{dat.qouta}
      </td>
      }))}  
     </tr>
   <tr>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>Bids Recieved</span>
      </td> {data.map(((dat,index) =>{
        return  <td key={index} className={styles.td}>{dat.recieved}
      </td>
      }))}  
     </tr>
     <tr style={{background:"#F9F9FA"}}>
     <td className={styles.ts}><span style={{fontWeight:"600"}}>PQP</span>
      </td> {data.map(((dat,index) =>{
        return  <td key={index} className={styles.td}>{dat.PQP}
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