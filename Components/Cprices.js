import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Chart }            from 'react-chartjs-2'
import styles from '../styles/Home.module.css'
import { Line } from 'react-chartjs-2'
import PageLoader from 'next/dist/client/page-loader'


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
  
  
      const [show ,setShow] = useState(false)

      // labels manipulation 
      var newLabels  = []
      if(labels.length != 0){
           for(var i = 0 ;i < labels.length; i++){
            // d  = new Date("Jun 9 2007")
          var temp = new Date(labels[i]).toDateString().slice(4)
          newLabels.push(temp)
      }
      }
   
  console.log("dikhaway",newLabels)

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
              autoSkip: true,
              maxRotation: 90,
              minRotation: 90,
              fontSize: 3,
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

    }

    var dates  = []
    useEffect(()=>{  
      setP1({})
      setP2({}) 
      setP3({})
      setP4({})
      setP5({})
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
      // if(labels.length > 0) {dates =   labels.forEach(x => console.log("bsdk",x.toDateString()));}     
       console.log("burn",dates)
      for(var i = 0 ;i < res.data.length; i++  ){
        if(res?.data[i]?.pump.match("esso")){
          setP1(res?.data[i]?.prices)
        }
        if(res?.data[i]?.pump.match("shell")){
          setP2(res?.data[i]?.prices)
        }
        if(res?.data[i]?.pump.match("spc")){
          setP3(res?.data[i]?.prices)
        }
        if(res?.data[i]?.pump.match("caltex")){
          setP4(res?.data[i]?.prices)
        }
        if(res?.data[i]?.pump.match("sinopec")){
          setP5(res?.data[i]?.prices)
        }

      }

      console.log("saas",res.data)
    }

      )
      if (typeof window !== 'undefined') {
        console.log('You are on the browser');
      if(window.innerWidth < "880" ){
        // ✅ Can use window here
        for(var i = 0 ;i < labels.length; i++){
          // d  = new Date("Jun 9 2007")
        var temp = new Date(labels[i]).toDateString().slice(4)
        newLabels.push(temp)
    }
        setShow(true)
      }
      else if(window.innerWidth > "880"){
        setShow(false)
      }
        window.addEventListener('mousemove', () => {
          console.log('Mouse moved',window.innerWidth);
        });
      } else {
        console.log('You are on the server');
        // ⛔️ Don't use window here
      }
      
    },[inputs,show])
    
  
  return (
    <>
     <div className={styles.cprises}>
        <div className={styles.wrapper} style={{flexDirection:"column",alignItems:"center"}}>
         <div className={styles.extramile}>
         <h2 className={styles.hs}>Fuel Price Trend</h2>
         {   <div className={styles.change}>
              <div className={styles.row2}>
                 <h2 className={styles.h}>Updated Trend</h2> 
                 <div className={styles.lists}>  
                 <h6>Date range</h6>
  {inputs.days == '30'? 

  <div className={styles.nam}onClick={()=>{                
    setInputs({
    ...inputs, 
     days : '30'
    })
    setInputs({
      ...inputs, 
       days : '30'
      })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>1 month</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
     ...inputs, 
     days : '30'
    })
     setInputs({
      ...inputs, 
       days : '30'
      })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>1 month</p>
  </div> }

  {inputs.days == '180'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '180'
    })
    setInputs({
      ...inputs, 
     days : '180'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '180'
    })
    setInputs({
      ...inputs, 
     days : '180'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>6 months</p>
  </div> }
  {inputs.days == '360'?  <div className={styles.nam}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '360'
    })
    setInputs({
      ...inputs, 
     days : '360'
    })
    // fetchGraph()
    console.log("sal",inputs) 
    }}>
   <p className={styles.p}>12 months</p>
  </div> : <div className={styles.name}onClick={()=>{                
    setInputs({
      ...inputs, 
     days : '360'
    })
    setInputs({
      ...inputs, 
     days : '360'
    })
    // fetchGraph()
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
                  <h6>Fuel Type</h6>
                  {petrol?.map((petro,index) =>{
                  return <>
                  <div className={styles.petro} onClick={()=>{                 
    setInputs({
      ...inputs,
      grade: petro.grade
    
    })
    // fetchGraph()
    }}>
                  {inputs.grade == petro.grade ?  <button className={styles.btuna} key={index}><p className={styles.p}>{petro.grade}</p></button> : <button className={styles.btun} key={index}><p className={styles.p}>{petro.grade}</p></button> }
                  </div>
                  </>
                } )}</div> : <div></div>}

<div className={styles.list}>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(29,102,255)"}}></div>
    <p className={styles.p}>Esso </p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(251,188,5)"}}></div>
    <p className={styles.p}>Shell</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(231,45,69)"}}></div>
    <p className={styles.p}>Spc</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:"rgb(0,173,238)"}}></div>
    <p className={styles.p}>Caltex</p>
  </div>
  <div className={styles.name}>
    <div className={styles.circle} style={{backgroundColor:" rgb(40,167,69)"}}></div>
    <p className={styles.p}>Sinopec</p>
  </div> 
 
  
  </div>                
</div>
                {p1.length != 0 ||p2.length != 0||p3.length != 0||p4.length != 0||p5.length != 0 ?  <Bar className={styles.canva}
                    datasetIdKey='id'
                    
                  data={{
                    labels:Array.from(show ? newLabels:labels),
                    maintainAspectRatio: false,

                    datasets: [{
                      label: 'Esso',
                      // data:  [65, 29, 90, 31, 46, 25, 60],
                      data:p1,
                      fill: false,
                      
                      backgroundColor: 'rgb(29,102,255)',
                    },
                    {
                        label: 'Shell',
                        data: p2,
                        fill: false,
                        backgroundColor: '#fbbc05',
  
                      },
                      {
                        label: 'Spc',
                        data: p3,
                        fill: false,
                        backgroundColor: 'rgb(231,45,69)',
  
                      }, {
                        label: 'Caltex',
                        data: p4,
                        fill: false,
                        backgroundColor: 'rgb(0,173,238)',
  
                      },
                      {
                        label: 'Sinopec',
                        data: p5,
                        fill: false,
                        backgroundColor: 'rgb(40,167,69)',
  
                      }
                ]
                  }} options={options}/>: <PageLoader/> }
                 </div> : <h2>No Data</h2> }
            </div>  }
         </div>
        </div>
     </div>
    </>
  )
}

export default Cprices