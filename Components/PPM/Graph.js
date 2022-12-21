import React,{useEffect, useState,useCallback} from 'react'
import Image from 'next/image'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Chart }            from 'react-chartjs-2'
import styles from '../../styles/Home.module.css'
import { Line, } from 'react-chartjs-2'

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

function Graph(base) {

    const BASE_URL = "http://128.199.227.15/api/malaysian_price_graph"
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
        grade: '92',
        days: '30'
    }) 
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      }; 
     const fetchGraph = useCallback(() =>{
      fetch(`${process.env.NEXT_PUBLIC_API_URL}malaysian_price_graph`)
      .then(res => {return res.json();} )
      .then(res=>{
      // console.log("saas",res)
      setLabels(res?.data[0]?.dates)
      setP1(res?.data[0]?.prices)
      setP2(res?.data[1]?.prices)
      setP3(res?.data[2]?.prices)
      console.log("saas",res.data)
    }
      )
    },[inputs.grade_id])
    useEffect(()=>{   
     
    fetch( `${process.env.NEXT_PUBLIC_API_URL}grades`).then(res => {return res.json()}).then(
    res =>  {
    setPetrol(res.grades)
    setInputs({
        // ...inputs,
    //  grade_id : res?.grades[0]?.id
    grade_id: petrol[0]?.id
    })
    console.log("cpmsad", inputs.grade_id)
   
  }
    )
    setTimeout(() => {
       fetchGraph() 
       console.log("dars")
    }, 1000);   
    
        //     fetch("http://128.199.227.15/api/motorist_price_graph",requestOptions)
        //     .then(res => {return res.json();} )
        //     .then(res=>{
        //     // console.log("saas",res)
        //     setLabels(res?.data[0]?.dates)
        //     setP1(res?.data[0]?.prices)
        //     setP2(res?.data[1]?.prices)
        //     setP3(res?.data[2]?.prices)
        //     setP4(res?.data[3]?.prices)
        //     setP5(res?.data[4]?.prices)
        //     console.log("saas",res.data)
        //   }
        //     )
      

    },[])
  
  return (
    <>
     <div className={styles.cprises} onLoad={() =>{
        fetchGraph()
     }}>
         <div className={styles.wrapper} styles={{alignItem:"flex-start"}}>
     <div className={styles.mfp}>
     <h2 className={styles.hs}>Petrol Prices in Malaysia</h2> 
            <div className={styles.change}>
            
              <div className={styles.row2}>
                 <h2 className={styles.h}>Average Fuel Prices in Malaysia</h2> 
                 <div className={styles.petrols}>
            {petrol.length != 0 ?    
                <div className={styles.petro}>
                  {petrol?.map((petro,index) =>{
                  return <>
                  <div className={styles.petro} onClick={()=>{  
    setActive(false) 
    }}>
                    {/* <button className={styles.btun} key={index}><p>{petro.grade}</p></button> */}
                  </div>
                  </>
                } )}</div> : <div></div>}

<div className={styles.list}>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(40,167,69)"}}></div>
    <p className={styles.p}>Ron 95</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(251,188,5)"}}></div>
    <p className={styles.p}>Ron 97</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(29,102,255)"}}></div>
    <p className={styles.p}>Diesel</p>
  </div>
  </div>                
</div>
              </div>
               {labels.length != 0   ?  <div>

                  <Bar
                    datasetIdKey='id'
                    
                  data={{
                    labels:Array.from(labels),
                    maintainAspectRatio: false,

                    datasets: [{
                      label: 'Ron 95',
                      // data:  [65, 29, 90, 31, 46, 25, 60],
                      data:p1,
                      fill: false,
                      backgroundColor: 'rgb(40,167,69)',
                      tension: 0.1
                    },
                    {
                        label: 'Ron 97',
                        data: p2,
                        fill: false,
                        backgroundColor: 'rgb(251,188,5)',
                        tension: 0.1
                      },
                      {
                        label: 'Diesel',
                        data: p3,
                        fill: false,
                        backgroundColor: 'rgb(29,102,255)',
                        tension: 0.1
                      },
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

export default Graph