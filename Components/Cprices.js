import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Chart }            from 'react-chartjs-2'
import styles from '../styles/Home.module.css'
import { Line } from 'react-chartjs-2'


function Cprices(base) {

    const BASE_URL = "http://128.199.227.15/api/price_graph"
    const [p1,setP1] = useState({})
    const [p2,setP2] = useState({})
    const [p3,setP3] = useState({})
    const [p4,setP4] = useState({})
    const [p5,setP5] = useState({})
    
  const [active , setActive] = useState(false)
    const [labels , setLabels] = useState({})
    const [petrol ,setPetrol] = useState("")
    const [chartData , setChartData] = useState({
        labels:['monday','tuesday','wednesday','thursday','friday'],
        datasets: [{
          label: '',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          // borderColor: 'rgb(75, 12, 192)',
          tension: 0.3
        },
        {
            label: '98',
            data: [65, 29, 90, 31, 46, 25, 60],
            fill: false,
            // borderColor: 'rgb(75, 192, 12)',
            tension: 0.1
          },
          {
            label: 'Deisel',
            data: [45, 69, 30, 21, 66, 35, 20],
            fill: false,
            // borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
    ]
      })
      // var min = chartData[0]?.prices[0]; 
      // var max = 0 ;
      const options = {
        responsive: true,
        
        plugins: {
          legend: {
             display: false
          }
       },
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90
          },
            y: {
              min: 0.1,
              max: 3.0,
              ticks: {
                min: 0.1, // minimum value
                max: 3.0 // maximum value
            }
            },
            grid: {
              display: false
            }
          }
          ,
        //   y: {
        //     suggestedMin:2.5 ,
        //     suggestedMax: 3 
        // }
        },
      };
     //"https://globaltechnologia.org/petrolium_scraping/api/"
    const [inputs , setInputs] = useState({
        grade: '92',
        days: '30'
    }) 
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      }; 
     const fetchGraph = () =>{
      fetch( `${process.env.NEXT_PUBLIC_API_URL}motorist_price_graph`,requestOptions)
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
       
      //   for (var i = 0 ; i < chartData.length ; i++){
      //       // console.log("hero",chartData[i].prices) 
          
      //       for(var j = 0 ; j < chartData[i].prices.length ; j++){
      //         var cur = chartData[i].prices[j];
              
             
      //         if (max < cur  ){
      //   max = cur;
      //           console.log("hero max", Math.round(max))
      //         } if (cur < min){
      //         min = cur
      //            console.log("hero min", Math.round(min))

      //         }

      //         // console.log("hero min ====>", min)
      //         // console.log("hero max ====>", max)
      //         console.log("hero",chartData[i].prices[j])
      //       }
      //     }
        
      //     console.log("hero min ====>", Math.ceil(min))
      //     console.log("hero max ====>", Math.round(max))
      //     console.log("hero max ====>", Math.round(1.2))

      //   }

    }
    useEffect(()=>{   
    fetch(`${process.env.NEXT_PUBLIC_API_URL}grades`).then(res => {return res.json()}).then(
    res =>  {console.log("why are you so gay?", res.grades)
    setPetrol(res.grades)
    console.log("cpmsad", inputs.grade_id)
  }
    )
     
     
    
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
      // console.log("heroo",chartData)
      // if(chartData.length != 0) {   
       
      //   for (var i = 0 ; i < chartData.length ; i++){
      //       // console.log("hero",chartData[i].prices) 
          
      //       for(var j = 0 ; j < chartData[i].prices.length ; j++){
      //         var cur = chartData[i].prices[j];
              
             
      //         if (max < cur  ){
      //   max = cur;
      //           console.log("hero max", Math.round(max))
      //         } if (cur < min){
      //         min = cur
      //            console.log("hero min", Math.round(min))

      //         }

      //         // console.log("hero min ====>", min)
      //         // console.log("hero max ====>", max)
      //         console.log("hero",chartData[i].prices[j])
      //       }
      //     }
        
      //     console.log("hero min ====>", Math.ceil(min))
      //     console.log("hero max ====>", Math.round(max))
      //     console.log("hero max ====>", Math.round(1.2))

      //   }

    }

      )


     
    },[inputs])
    
  
  return (
    <>
     <div className={styles.cprises}>
        <div className={styles.wrapper} style={{flexDirection:"column",alignItems:"center"}}>
         <div className={styles.extramile}>
         <h2 className={styles.hs}>Fuel Price Trend</h2>
            <div className={styles.change}>
              <div className={styles.row2}>
                 <h2 className={styles.h}>Updated Trend</h2> 
                 <div className={styles.lists}>
  {inputs.days == '30'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
     days : '30'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>1 month</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     ...inputs, 
     days : '30'
    })
    fetchGraph()
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
      ...inputs, 
     days : '180'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '180'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> }
  {inputs.days == '360'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '360'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>12 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '360'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>12 months</p>
  </div> }
  </div> 
              </div>
                  

               {labels.length != 0 ?  <div>
<div className={styles.petrols}>
            {petrol.length != 0 ?    
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
                  {inputs.grade == petro.grade ?  <button className={styles.btuna} key={index}><p className={styles.p}>{petro.grade}</p></button> : <button className={styles.btun} key={index}><p className={styles.p}>{petro.grade}</p></button> }
                  </div>
                  </>
                } )}</div> : <div></div>}

<div className={styles.list}>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(40,167,69)"}}></div>
    <p className={styles.p}>Sinopec</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(251,188,5)"}}></div>
    <p className={styles.p}>Shell</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(0,173,238)"}}></div>
    <p className={styles.p}>Caltex</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(29,102,255)"}}></div>
    <p className={styles.p}>Esso</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(231,45,69)"}}></div>
    <p className={styles.p}>Spc</p>
  </div>
  </div>                
</div>
                  <Bar className={styles.canva}
                    datasetIdKey='id'
                    
                  data={{
                    labels:Array.from(labels),
                    maintainAspectRatio: false,

                    datasets: [{
                      label: 'Sinopec',
                      // data:  [65, 29, 90, 31, 46, 25, 60],
                      data:p1,
                      fill: false,
                      
                      backgroundColor: 'rgb(40,167,69)',
                    },
                    {
                        label: 'Shell',
                        data: p2,
                        fill: false,
                        backgroundColor: '#fbbc05',
  
                      },
                      {
                        label: 'esso',
                        data: p3,
                        fill: false,
                        backgroundColor: 'rgb(0,173,238)',
  
                      }, {
                        label: 'spc',
                        data: p4,
                        fill: false,
                        backgroundColor: 'rgb(29,102,255)',
  
                      },
                      {
                        label: 'caltex',
                        data: p5,
                        fill: false,
                        backgroundColor: 'rgb(231,45,69)',
  
                      }
                ]
                  }} options={options}/>
                 </div> : <h2>No Data</h2> }
            </div>  
         </div>
        </div>
     </div>
    </>
  )
}

export default Cprices