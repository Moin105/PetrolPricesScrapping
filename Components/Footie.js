import React from 'react'
import styles from '../styles/Home.module.css';

function Footie() {
  return (
    <>
       <div className={styles.footie}>
        <div className={styles.wrapper}>
            <p className={styles.p}>
            © - Petrolcrime. All Rights Reserved.
            </p>

            <div className={styles.foote}>
                <p className={styles.p}>
                    HISTORY
                </p>
                <p className={styles.p}>
                    FAQ
                </p>
                <p className={styles.p}>
                    EVENTS
                </p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Footie