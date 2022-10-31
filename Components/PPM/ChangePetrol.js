import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import increase from '../../public/rmi.png'
import decrease from '../../public/rmd.png'
import nochange from '../../public/rm.png'
//  const data = {"status":"200","data":[{"id":151,"type":"PETROL","title":"RON 95","price":2.05,"currency":"RM","change_in_price":0,"created_at":"2022-10-25T11:15:46.000000Z","updated_at":"2022-10-25T11:15:46.000000Z"},{"id":152,"type":"PETROL","title":"RON 97","price":3.95,"currency":"RM","change_in_price":0,"created_at":"2022-10-25T11:15:46.000000Z","updated_at":"2022-10-25T11:15:46.000000Z"},{"id":153,"type":"PETROL","title":"RON 100","price":4.7,"currency":"RM","change_in_price":0,"created_at":"2022-10-25T11:15:46.000000Z","updated_at":"2022-10-25T11:15:46.000000Z"},{"id":154,"type":"PETROL","title":"VPR","price":5.7,"currency":"RM","change_in_price":0,"created_at":"2022-10-25T11:15:46.000000Z","updated_at":"2022-10-25T11:15:46.000000Z"},{"id":155,"type":"DIESEL","title":"EURO 5 B10","price":2.15,"currency":"RM","change_in_price":0,"created_at":"2022-10-25T11:15:46.000000Z","updated_at":"2022-10-25T11:15:46.000000Z"},{"id":156,"type":"DIESEL","title":"EURO 5 B7","price":2.35,"currency":"RM","change_in_price":0,"created_at":"2022-10-25T11:15:46.000000Z","updated_at":"2022-10-25T11:15:46.000000Z"}]}
function ChangePetrol() {
const BASE_URL = "http://128.199.227.15/api/malaysian_fuel_api"
const [data,setData] = useState([])
    useEffect(() => {
console.log("base url",BASE_URL)
      fetch("http://128.199.227.15/api/malaysian_fuel_api")
      .then(response => {
        console.log("res",response);
        if(response.status == 200) {            
            console.log("res",response);
            return response.json();
      }
    }).then(response =>
      {
        setData(response.data.splice(-3))
        console.log("datta",data)
        // data.slice(-3)
      }
    )
    }, []) 
    const i = 10
  return (
    <>
    <div className={styles.fuel}>
        <div className={styles.wrapper}>
            <div className={styles.tables}>
                 <h2 className={styles.h2}>Compare Petrol Prices</h2>  
                 <div className={styles.pcontainer}>
                   <div className={styles.pbox}>
                   {data.map(dat =>
                   {
                    
                    if(dat.change_in_price == 0 ){

                    return  <div className={styles.nochangerm}>
                    <h3 className={styles.h3}>{dat.title}</h3>
                    <figure className={styles.figures}>
                    <Image src={nochange} alt="logo" layout="fill" objectFit="contain"/>
                    <div className={styles.asb}><p className={styles.ps}>unchanged</p></div>

                    </figure>
                    <h3 className={styles.h3}>{ `${dat.currency}  ${dat.price}`}</h3>
                   </div>
                   }
                   else if(dat.change_in_price > 0){   
                    return       <div className={styles.increaserm}>
                        <h3 className={styles.h3}>{dat.title}</h3>
                        <figure className={styles.figures}>
                        <Image src={increase} alt="logo" layout="fill" objectFit="contain"/>
                        <div className={styles.asb}><p className={styles.ps}>{ dat.change_in_price.toFixed(2)}</p><p className={styles.ps}>decreased</p></div>

                        </figure>
                        <h3 className={styles.h3}>{ `${dat.currency}  ${dat.price}`}</h3>

                       </div>
                       }
                       else if(dat.change_in_price < 0){   
                        return       <div className={styles.decreaserm}>
                            <h3 className={styles.h3}>{dat.title}</h3>
                            <figure className={styles.figures}>
                            <Image src={decrease} alt="logo" layout="fill" objectFit="contain"/>
                            <div className={styles.asb}><p className={styles.ps}>{ dat.change_in_price.toFixed(2)}</p><p className={styles.ps}>decreased</p></div>

                            </figure>
                            <h3 className={styles.h3}>{`${dat.currency}  ${dat.price}`}</h3>
                           </div>
                           }
                   }
                   
                   )  }
                 </div>
                 </div>   
               
            </div>  
        </div>
   
    </div>
    </>
  )
}

export default ChangePetrol