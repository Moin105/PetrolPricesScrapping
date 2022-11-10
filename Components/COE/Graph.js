import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import styles from '../../styles/Home.module.css'
import { Line, } from 'react-chartjs-2'
import G1 from '../../public/G1.png'
import G2 from '../../public/G2.png'
import G3 from '../../public/G3.png'
import G4 from '../../public/G4.png'
import G5 from '../../public/G5.png'
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

function Cprices() {

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
          tension: 0.1
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
      fetch("http://128.199.227.15/api/motorist_price_graph",requestOptions)
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
      if(chartData.length != 0) {   
            var min = chartData[0].prices[0]; 
            var max = 0 ;
        for (var i = 0 ; i < chartData.length ; i++){
            // console.log("hero",chartData[i].prices) 
          
            for(var j = 0 ; j < chartData[i].prices.length ; j++){
              var cur = chartData[i].prices[j];
              
             
              if (max < cur  ){
                max = cur;
                console.log("hero max", max)
              } if (cur < min){
                 min = cur
                 console.log("hero min", min)

              }

              // console.log("hero min ====>", min)
              // console.log("hero max ====>", max)
              console.log("hero",chartData[i].prices[j])
            }
          }
        
          console.log("hero min ====>", min)
          console.log("hero max ====>", max)
        }

    }
    useEffect(()=>{   
    fetch("http://128.199.227.15/api/grades").then(res => {return res.json()}).then(
    res =>  {console.log("sab bhula kayy", res.grades)
    setPetrol(res.grades)
    console.log("cpmsad", inputs.grade_id)
  }
    )
     
     
    
      fetch("http://128.199.227.15/api/open_bidding_price_graph",requestOptions)
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
    }
      )


     
    },[])
  
  return (
    <>
     <div className={styles.cprises}>
        <div className={styles.wrapper}> 
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
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>1 month</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
 
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
     days : '180'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     days : '180'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> }
  {inputs.days == '360'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
     days : '360'
    })
    fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>12 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     days : '360'
    })
    fetchGraph()
    console.log("sal",inputs) 
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
    <p className={styles.p}><figure className={styles.plogo}><Image src={G1} alt="logo" layout="fill" objectFit="contain"/></figure></p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(251,188,5)"}}></div>
    <p className={styles.p}><figure className={styles.plogo}><Image src={G2} alt="logo" layout="fill" objectFit="contain"/></figure>
</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(0,173,238)"}}></div>
    <p className={styles.p}><figure className={styles.vlogo}><Image src={G3} alt="logo" layout="fill" objectFit="contain"/></figure></p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(29,102,255)"}}></div>
    <p className={styles.p}><figure className={styles.dlogo}><Image src={G5} alt="logo" layout="fill" objectFit="contain"/></figure>
</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(231,45,69)"}}></div>
    <p className={styles.p}><figure className={styles.clogo}><Image src={G4} alt="logo" layout="fill" objectFit="contain"/></figure>
</p>
  </div>
  </div>                
</div>
                  <Line
                    datasetIdKey='id'
                    
                  data={{
                    labels:Array.from(labels),
                    datasets: [{
                      label: 'Sinopec',
                      // data:  [65, 29, 90, 31, 46, 25, 60],
                      data:p1,
                      fill: false,
                      borderColor: 'rgb(40,167,69)',
                      tension: 0.1
                    },
                    {
                        label: 'Shell',
                        data: p2,
                        fill: false,
                        borderColor: 'rgb(251,188,5,)',
                        tension: 0.1
                      },
                      {
                        label: 'esso',
                        data: p3,
                        fill: false,
                        borderColor: 'rgb(0,173,238)',
                        tension: 0.1
                      }, {
                        label: 'spc',
                        data: p4,
                        fill: false,
                        borderColor: 'rgb(29,102,255)',
                        tension: 0.1
                      },
                      {
                        label: 'caltex',
                        data: p5,
                        fill: false,
                        borderColor: 'rgb(231,45,69)',
                        tension: 0.1
                      }
                ]
                  }} options={options}/>
                 </div> : <></> }
            </div>  
            </div> 
        </div>
     </div>
    </>
  )
}

export default Cprices