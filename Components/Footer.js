import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import flogo from '../public/flogo.png';
import arrow from '../public/arrow.png';
import Link from 'next/link'
import Modal from './Modal';


function Footer() {
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState("");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      const [inputs, setInputs] = useState({
  
          email: "",
  
        });
        const handleChange = (e) => {
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
          });
        };
        const handleSubmit = (e) => {
          console.log("suck",inputs.email.match(validRegex))
          e.preventDefault();
          if ( inputs.email == "" ) {
              console.log("gee")
            setShow(true);
            setResponse("Enter Required Details");
            setTimeout(function () {
              setShow(false);
            }, 5000);
            return;
          }
          if( inputs.email.match(validRegex)){
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(inputs),
            };
      
            fetch("https://admin.extramiless.com/api/subscribe", requestOptions)
              .then((response) => response.json())
              .then((res) => {
                console.log(res);
                setResponse(res.message);
                console.log(res.message);
          
              });
            setShow(true);
            setTimeout(function () {
              setShow(false);
            }, 3000);
          }
           else {   console.log("gee")
            setShow(true);
            setResponse("Enter Valid Email");
            setTimeout(function () {
              setShow(false);
            }, 5000);
            return;
    
          }
        };
  return (
    <>
       <div className={styles.footer}>
        <div className={styles.wrapper}>
 <div className={styles.foots}>
 <div className={styles.foot1}>
                <figure className={styles.figure}>
                <Image priority src={flogo} alt="banner" layout="fill" width={100} objectFit="contain"/>
                </figure>
                <div className={styles.inputbox}>
                      <input   type='text'
                name='email'
                id='email'
                className={styles.input}
                placeholder='Email here'
                value={inputs.email}
                onChange={handleChange}/>
                   <figure className={styles.arrow}  onClick={handleSubmit}>
                   <Image priority src={arrow} alt="banner" layout="fill" width={100} objectFit="contain"/>
                   </figure>
                </div>
              
                <p className={styles.p}>
                    Signup to be the first one to know 
                    about any change in petrol prices 
                    and more.
                </p>
            </div>

            <div className={styles.foote}>
                <div className={styles.foot2}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><h3 className={styles.h3}>Company</h3>            </li>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Petrol prices SG</p>      </li></Link>
                 <Link href="/PetrolPricesMalaysia"><li className={styles.li}><p className={styles.p}>Petrol prices Malaysia</p></li></Link>
                 <Link href="/TrafficUpdate"><li className={styles.li}><p className={styles.p}>Traffic Update</p>        </li></Link>
                 <Link href="/COEPrices"><li className={styles.li}><p className={styles.p}>COE Prices</p>            </li></Link>
                 <Link href="/CarParkingSG"><li className={styles.li}><p className={styles.p}>Car Parking SG</p>        </li></Link>
                    </ul>
                </div>
                <div className={styles.foot2}>
                <ul className={styles.ul}>
                    <li className={styles.li}><h3 className={styles.h3}>Support</h3></li>
                    <li className={styles.li}><p className={styles.p}>Help & FAQ&apos;s</p></li>
                    <li className={styles.li}><p className={styles.p}>hello@catperson.com</p></li>
                    <li className={styles.li}><p className={styles.p}>Tell: (855) 918-2287</p></li>
                    <li className={styles.li}><p className={styles.p}></p></li>
                </ul>
                </div>
            </div>
 </div>
        </div>
       </div>
       {show == true && <Modal message={response} />}

    </>
  )
}

export default Footer