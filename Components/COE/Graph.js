import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Chart }            from 'react-chartjs-2'
import styles from '../../styles/Home.module.css'
import { Line, } from 'react-chartjs-2'
import Modal from '../Modal'
import G1 from '../../public/G1.png'
import G2 from '../../public/G2.png'
import G3 from '../../public/G3.png'
import G4 from '../../public/G4.png'
import G5 from '../../public/G5.png'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const options = {
  responsive: true,
  
  plugins: {
    legend: {
       display: false
    }
 },
  scales: {
    x: {
      grid: {
        display: false
      }
    }
  },
};
 
function Cprices(base) {

    const BASE_URL = "http://128.199.227.15/api/price_graph"
    const [p1,setP1] = useState({})
    const [p2,setP2] = useState({})
    const [p3,setP3] = useState({})
    const [p4,setP4] = useState({})
    const [p5,setP5] = useState({})
  const [message , setMessage] = useState("")
  const [show , setShow] = useState(false)

  const [labels , setLabels] = useState({})
    const [petrol ,setPetrol] = useState("")
    const [chartData , setChartData] = useState({
        labels:['monday','tuesday','wednesday','thursday','friday'],
        datasets: [{
          label: '',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          // backgroundColor: 'rgb(75, 12, 192)',
          tension: 0.1
        },
        {
            label: '98',
            data: [65, 29, 90, 31, 46, 25, 60],
            fill: false,
            // backgroundColor: 'rgb(75, 192, 12)',
            tension: 0.1
          },
          {
            label: 'Deisel',
            data: [45, 69, 30, 21, 66, 35, 20],
            fill: false,
            // backgroundColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
    ]
      })
   
     //"https://globaltechnologia.org/petrolium_scraping/api/"
    const [inputs , setInputs] = useState({
        days: '30'
    }) 
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      }; 
     const fetchGraph = () =>{
      fetch(`${process.env.NEXT_PUBLIC_API_URL}motorist_price_graph`,requestOptions)
      .then(res => {return res.json();} )
      .then(res=>{
      // console.log("saas",res)

      setChartData(res?.data)
      setLabels(res?.data[0]?.dates)
      setP1(res?.data[0]?.prices)
      setP2(res?.data[1]?.prices)
      setP3(res?.data[2]?.prices)
      setP4(res?.data[3]?.prices)
      setP5(res?.data[4]?.prices)
      console.log("saas",res.data)
      console.log("heroo",chartData)

    }
      )
      // if(chartData.length != 0) {   
      //       var min = chartData[0].prices[0]; 
      //       var max = 0 ;
      //   for (var i = 0 ; i < chartData.length ; i++){
      //       // console.log("hero",chartData[i].prices) 
          
      //       for(var j = 0 ; j < chartData[i].prices.length ; j++){
      //         var cur = chartData[i].prices[j];
              
             
      //         if (max < cur  ){
      //           max = cur;
      //           console.log("hero max", max)
      //         } if (cur < min){
      //            min = cur
      //            console.log("hero min", min)

      //         }

      //         // console.log("hero min ====>", min)
      //         // console.log("hero max ====>", max)
      //         console.log("hero",chartData[i].prices[j])
      //       }
      //     }
        
      //     console.log("hero min ====>", min)
      //     console.log("hero max ====>", max)
      //   }

    }
    useEffect(()=>{   
      setP1({})
      setP2({}) 
      setP3({})
      setP4({})
      setP5({})
    fetch(`${process.env.NEXT_PUBLIC_API_URL}grades`).then(res => {return res.json()}).then(
    res =>  {console.log("sab bhula kayy", res.grades)
    setPetrol(res.grades)
    console.log("cpmsad", inputs.grade_id)
    
  }
    )
     
     
    
      fetch(`${process.env.NEXT_PUBLIC_API_URL}open_bidding_price_graph`,requestOptions)
      .then(res => {return res.json();} )
      .then(res=>{
      // console.log("saas",res)
      if(res.data)
    {  setChartData(res?.data)
      setLabels(res?.data[0]?.dates)
      setP1(res?.data[0]?.prices)
      setP2(res?.data[1]?.prices)
      setP3(res?.data[2]?.prices)
      setP4(res?.data[3]?.prices)
      setP5(res?.data[4]?.prices)
      console.log("saas",res.data)
    }
      if(res.message){
        setMessage(res.message)
        Notify.warning(message);
        console.log("saas",res.message)
      }
      // console.log("heroo",chartData)
    }
      )


     
    },[inputs])
  
  return (
    <>
     <div className={styles.cprises}>
        <div className={styles.wrapper}> 
       <div className={styles.coe}>
       <div className={styles.h2} style={{marginBottom:"40px"}}>COE Price Trend</div>
           <div className={styles.chr}>
            <div className={styles.changes}>   

              <div className={styles.row2}>
                 <h2 className={styles.h}>Latest Trend</h2> 
           
              </div>
                  

               {labels.length != 0 ?  <div>

<div className={styles.petrols}>
<div className={styles.lists}>
{inputs.days == '30'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
     days : '30'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>1 month</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     days : '30'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>1 month</p>
  </div> }
  {/* <div className={styles.name}onClick={()=>{  
                
    setInputs({
      days : '180'
    })
    fetchGraph()
   console.log("sal",inputs) 
    }}>
    <p className={styles.p}>6 months</p>
  </div> */}
  {inputs.days == '180'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
     days : '180'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     days : '180'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> }
  {inputs.days == '360'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
     days : '360'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>12 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     days : '360'
    })
    // fetchGraph()
    console.log("salour",inputs) 
    }}>
   <p className={styles.p}>12 months</p>
  </div> }
                 </div>  
            {petrol.length != 0 ?    
                <div className={styles.petro}>
                </div> : <div></div>}
                

<div className={styles.list}>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(40,167,69)"}}></div>
    <p className={styles.p}><figure className={styles.plogo}><Image priority src={G1} alt="logo" layout="fill" objectFit="contain"/></figure></p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(251,188,5)"}}></div>
    <p className={styles.p}><figure className={styles.plogo}><Image priority src={G2} alt="logo" layout="fill" objectFit="contain"/></figure>
</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(0,173,238)"}}></div>
    <p className={styles.p}><figure className={styles.vlogo}><Image priority src={G3} alt="logo" layout="fill" objectFit="contain"/></figure></p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(29,102,255)"}}></div>
    <p className={styles.p}><figure className={styles.dlogo}><Image priority src={G5} alt="logo" layout="fill" objectFit="contain"/></figure>
</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(231,45,69)"}}></div>
    <p className={styles.p}><figure className={styles.clogo}><Image priority src={G4} alt="logo" layout="fill" objectFit="contain"/></figure>
</p>
  </div>
  </div>                
</div>
                  <Bar
                    datasetIdKey='id'
                    
                  data={{
                    labels:Array.from(labels),
                    maintainAspectRatio: false,

                    datasets: [{
                      label: 'Category A',
                      // data:  [65, 29, 90, 31, 46, 25, 60],
                      data:p1,
                      fill: false,
                      backgroundColor: 'rgb(40,167,69)',
                      tension: 0.1
                    },
                    {
                        label: 'Category B',
                        data: p2,
                        fill: false,
                        backgroundColor: 'rgb(251,188,5)',
                        tension: 0.1
                      },
                      {
                        label: 'Category C',
                        data: p3,
                        fill: false,
                        backgroundColor: 'rgb(0,173,238)',
                        tension: 0.1
                      }, {
                        label: 'Category D',
                        data: p4,
                        fill: false,
                        backgroundColor: 'rgb(29,102,255)',
                        tension: 0.1
                      },
                      {
                        label: 'Category E',
                        data: p5,
                        fill: false,
                        backgroundColor: 'rgb(231,45,69)',
                        tension: 0.1
                      }
                ]
                  }} options={options}/>
                 </div> : <></> }
            </div>  
            </div> 
       </div>
        </div>
     </div>
     {show == true && <Modal message={message} />}

    </>
  )
}

export default Cprices