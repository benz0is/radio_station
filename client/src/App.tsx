import React,{useState,useEffect} from 'react';
import styles from "./app.module.css"
import {ApiHook} from "./apiHook"


function App() {
  const {api} = ApiHook()
  const [selectedRadio,SetSelectedRadio] = useState<string>()
  const [radioHidden,setRadioHidden]= useState<boolean>(false)


  return (
    <div className={styles.app}>
       <div className={styles.box}>
          <div className={styles.header} >
            <div style={{display:"flex",justifyContent: "space-between",marginLeft:"10px",marginRight:"10px"}}>
              <a href="#" style={{color:'white',textDecoration:"none" }}><i className="fas fa-chevron-left"></i></a>
              <div style={{color:'white'}}>STATIONS</div> 
              <a href="#"><i className="fas fa-power-off" style={{color:"white",fontSize:"20px"}}></i></a>
            </div>
          </div>
          <div style={{marginTop:"5px"}}>
            {api !== undefined && api.api.map
              (res=>
                {return(
                  <div key={res.id}className={styles.boxContents} onClick={()=>{SetSelectedRadio(res.name);setRadioHidden(true)}}>
                    <div style={{display:"flex",justifyContent: "space-between"}}>
                      <div className={styles.textDesc}>{res.name}{res.name === selectedRadio ? "♫": ""}</div>
                      <div className={styles.stationDesc}> {res.station}</div>
                    </div>
                  </div>)})}
          </div>
          <div className={styles.footer}>
            {radioHidden ? 
              <div>
                <div style={{fontSize:"12px",color:"#ffb35c",marginTop:"5px"}}>CURRENTLY PLAYING </div>
                <div className={styles.textDesc}>{selectedRadio}</div>
              </div> :""}
          </div>
        </div>
    </div>
  );
}

export default App;
