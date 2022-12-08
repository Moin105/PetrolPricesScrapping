import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function Modal({point,setShow}) {   
   //  const [days , setDays] = useState('')
   const [head ,setHead] = useState([])
    const [Monday ,setMonday] = useState([])
    const [Sunday ,setSunday] = useState([])
    const [Daily ,setDaily] = useState([])
    var days = ''
    var timing = ''
    let uniqueHead = []
    var price = ''
    var s = ["a","a","a","a","a"]
  useEffect(() => {
if(point.car_parking_days_prices.length != 0){
  
   for (var i = 0; i <  point.car_parking_days_prices.length; i++ ){ 
      // console.log("monday",i) 
        const dayz = point?.car_parking_days_prices[i]?.days
      //   const time = point?.car_parking_days_prices[i]?.timing
      //   const price = point?.car_parking_days_prices[i]?.price
     
      // console.log("monday=>",days)
         if (days != point?.car_parking_days_prices[i].days ){
            
            days = point?.car_parking_days_prices[i]?.days;
            setHead(prevValue =>[...prevValue,{days}])
            timing = point?.car_parking_days_prices[i]?.timing;
            price = point?.car_parking_days_prices[i]?.price;
            console.log("monday ==>" ,head)
            if(days.includes("Monday")){
             setMonday(prevValue =>[...prevValue,{timing,price}])
            } 
            if(days.includes("Sunday") || days.includes("ph") || days.includes("Holiday") || days.includes("Public") ){
               setSunday(prevValue =>[...prevValue,{timing,price}])
            }    if(days.includes("Daily")){
               setDaily(prevValue =>[...prevValue,{timing,price}])
            } 
         }
     
      }
   }   
   //  console.log("days" , Monday,Sunday,Daily )
   uniqueHead = head.filter((c, index) => {
      return head.indexOf(c) === index;
  });
     console.log("MOONday",uniqueHead)
         console.log("SOONday",Sunday)
          console.log("Dayyday",Daily)}, [])
    var date = [];
 
  
    
  return (
    <div className={styles.overlays}  onClick={()=>{setShow(false)}}>
 
      <div className={styles.modals} onClick={()=>{console.log("monday",point)}}>
         <h2 className={styles.h2} style={{color:"#00AB41"}}>{point.name}</h2>
         <div className={styles.map}>
             <iframe src={point.location} key={point.id} style={{width:"100%",height:"100%"}}></iframe>
         </div>
         { head.length != 0 ?  uniqueHead.map((table,index) =>{return<div key={index} className={styles.timetable}>
             <div className={styles.days}><h3 className={styles.h3}>{table}</h3></div>    
            <div className={styles.timecontainer}>
               {/* <div className={styles.ron}><p className={styles.p}>{table.timing}</p></div>
               <div className={styles.ron}><p className={styles.p}>{table.price}</p></div> */}
            </div>
             </div>}) : null
          
         }
         {/* {point.car_parking_days_prices.map(table =>{
             return(  <div className={styles.timetable}>
             <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>     
            <div className={styles.timecontainer}>
               <div className={styles.ron}><p className={styles.p}>{table.timing}</p></div>
               <div className={styles.ron}><p className={styles.p}>{table.price}</p></div>
            </div>
             </div>)
    //    if(table.days.includes("Mondays to Sundays and Public Holidays")){       
    //      return   
    //             }
    //             else if(table.days.includes("Mondays to Saturdays")){
    //                 return    
    //             }else if(table.days.includes("Mondays to Friday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Mondays – Friday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Sundays")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Monday – Friday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Saturday, Sunday and Public Holidays")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Mondays to Sunday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Mondays – Saturday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Monday – Saturday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Sunday and Public Holidays")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Mondays to Thursday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Friday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Saturday,Sunday and PH")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("EPS Parking Carpark operational hours:")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Saturday and Sunday")){
    //                 return     <div className={styles.timetable}
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Mondays to Thursday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div
    //             }else if(table.days.includes("Season Parking For Cars")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Mondays – Sunday & Public Holiday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Monday to Sunday including Public Holidays")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Saturday to Sunday & Public Holiday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Monday – Thursday")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Saturdays")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }else if(table.days.includes("Sunday & PH")){
    //                 return     <div className={styles.timetable}>
    //                 <div className={styles.days}><h3 className={styles.h3}>{table.days}</h3></div>
    //                 </div>
    //             }
                
                
                
                
            // <div className={styles.timecontainer}>
            //    <div className={styles.ron}><p className={styles.p}>{table.timing}</p></div>
            //    <div className={styles.ron}><p className={styles.p}>{table.price}</p></div>
            // </div>
            {/* <div className={styles.timecontainer}>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[1].timing}</p></div>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[1].price}</p></div>
            </div> */}
    
         {/* })} } */}
         {/* <div className={styles.timetable}>
            <div className={styles.days}><h3 className={styles.h3}>{point.car_parking_days_prices[0].days}</h3></div>
            <div className={styles.timecontainer}>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[0].timing}</p></div>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[0].price}</p></div>
            </div>
            <div className={styles.timecontainer}>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[1].timing}</p></div>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[1].price}</p></div>
            </div>
         </div>
         <div className={styles.timetable}>
            <div className={styles.days}><h3 className={styles.h3}>{point.car_parking_days_prices[2]?.days}</h3></div>
            <div className={styles.timecontainer}>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[2]?.timing}</p></div>
               <div className={styles.ron}><p className={styles.p}>{point.car_parking_days_prices[2]?.price}</p></div>
            </div>
   
         </div> */}
      </div>
    </div>
  )
}

export default Modal