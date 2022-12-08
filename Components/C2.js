import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import increase from '../public/increase.png'
import decrease from '../public/decrease.png'
import nochange from '../public/unchanged.png'
import spc from '../public/spc.png'
import sa from '../public/sa.png'

function C2(base) {
const BASE_URL = "http://128.199.227.15/api/compare_prices_api"
const [data,setData] = useState([])
const [state ,setState] = useState(0)
    useEffect(() => {
console.log("base url",BASE_URL)
      // fetch("http://128.199.227.15/api/compare_prices_api")
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
        console.log("dasta",data)
      }
    )
    }, [])
    
  return (
    <>
    <div className={styles.fuel}>
        <div className={styles.wrapper}>
            <div className={styles.tables}>
              <div className={styles.row2}>                 <h2 className={styles.h2}>Change in Petrol Prices</h2>  
                 {/* // */}
                 <div className={styles.petrols}>
            {/* {petrol.length != 0 ?    
                <div className={styles.petro}>
                  {petrol?.map((petro,index) =>{
                  return <>
                  <div className={styles.petro} onClick={()=>{                 
    setInputs({
      ...inputs,
      grade: petro.grade
    
    })
    fetchGraph()
    }}>
                  {inputs.grade == petro.grade ?  <button className={styles.btuna} key={index}><p>{petro.grade}</p></button> : <button className={styles.btun} key={index}><p>{petro.grade}</p></button> }
                  </div>
                  </>
                } )}</div> : <div></div>} */}

<div className={styles.lists}>
  {state == 0 ?<div onClick={()=>{return setState(0)}} className={styles.nam}>
    <p className={styles.p}>Esso</p>
  </div>:<div onClick={()=>{return setState(0)}} className={styles.name}>
    <p className={styles.p}>Esso</p>
  </div> }
  {state== 1 ? <div onClick={()=>{return setState(1)}}  className={styles.nam}>
    <p className={styles.p}>Shell</p>
  </div>:
  <div onClick={()=>{return setState(1)}} className={styles.name}>
  <p className={styles.p}>Shell</p>
</div>
  }
  {state == 2 ?<div onClick={()=>{return setState(2)}}  className={styles.nam}>
    <p className={styles.p}>Spc</p>
  </div>:<div onClick={()=>{return setState(2)}} className={styles.name}>
    <p className={styles.p}>Spc</p>
  </div>}
  {state == 3?<div onClick={()=>{return setState(3)}}  className={styles.nam}>
    <p className={styles.p}>Caltex</p>
  </div>:<div onClick={()=>{return setState(3)}} className={styles.name}>
    <p className={styles.p}>Caltex</p>
  </div>}
  {state == 4?<div onClick={()=>{return setState(4)}}  className={styles.nam}>
    <p className={styles.p}>Sinopec</p>
  </div> :<div onClick={()=>{return setState(4)}} className={styles.name}>
    <p className={styles.p}>Sinopec</p>
  </div>}
  </div>                
</div></div>

                 <div className={styles.pcontainer}>
                   <div className={styles.pboxs}>
                   {data.map((dat,index) =>{if(dat.motorist_fuel_prices[state]?.change_in_price == 0 ){
                    return  < div  key={index}className={styles.nochange}>
                    <h3 className={styles.h3}>{dat.grade}</h3>
                    <figure className={styles.figure}>
                    <Image src={nochange} alt="logo" layout="fill" objectFit="contain" priority/>
                    <div key={index} className={styles.asb}><p className={styles.ps}>unchanged</p></div>
                    </figure>
                    <h3 className={styles.h3}>{ dat.motorist_fuel_prices[state]?.currency + dat.motorist_fuel_prices[state]?.price.toFixed(2)}</h3>
                   </div>
                   }else if(dat.motorist_fuel_prices[state]?.change_in_price > 0){   
                    return       <div key={index} className={styles.increase}>
                        <h3 className={styles.h3}>{dat.grade}</h3>
                        <figure className={styles.figure}>
                        <Image src={increase} alt="logo" layout="fill" objectFit="contain" priority/>
                        <div className={styles.asb}><p className={styles.ps}>{ dat.motorist_fuel_prices[state]?.change_in_price.toFixed(2)}</p><p className={styles.ps}>increased</p></div>
                        </figure>
                        <h3 className={styles.h3}>{ dat.motorist_fuel_prices[state]?.currency +  dat.motorist_fuel_prices[state]?.price}</h3>
                       </div>
                       }
                       else{   
                        return       <div key={index} className={styles.decrease}>
                            <h3 className={styles.h3}>{dat.grade}</h3>
                            <figure className={styles.figure}>
                            <Image src={decrease} alt="logo" layout="fill" objectFit="contain" priority/>
                            <div className={styles.asb}><p className={styles.ps}>{ dat.motorist_fuel_prices[state]?.change_in_price.toFixed(2)}</p><p className={styles.ps}>decreased</p></div>
                            </figure>
                            <h3 className={styles.h3}>{dat.motorist_fuel_prices[state]?.currency + dat.motorist_fuel_prices[state]?.price.toFixed(2)}</h3>
                           </div>
                           }
                   })  }
                 </div>
                 </div>   
               
            </div>  
        </div>
   
    </div>
    </>
  )
}

export default C2