import React, { useEffect, useState } from "react";

const Maintimer = () => {
  const [time,setTime]=useState({hour:0,min:0,sec:0})
  const [ctime,setctime]=useState(0)
  const [isStart,setstart]=useState(false)
  const [ishow,setisshow]=useState(false)
  useEffect(() => {
    if(isStart&&!(time.hour==0&&time.min==0&&time.sec==0)){
      const timer = setInterval(() => {
        setTime(prevTime => ({
          hour: prevTime.sec === 0 && prevTime.min === 0 && prevTime.hour > 0 ? prevTime.hour - 1 : prevTime.hour,
          min: prevTime.sec === 0 ? (
            (prevTime.hour > 0 && prevTime.min === 0 && prevTime.sec === 0) ? 59 : prevTime.min - 1
          ) : prevTime.min,
          sec: prevTime.sec === 0 && prevTime.min >= 0 ? 59 : prevTime.sec - 1,
        }));
      }, 1000);
      return () => clearInterval(timer);
    }
    if(time.hour==0&&time.min==0&&time.sec==0&&isStart==true){
      let noti=new Audio('/1.mp3')
      noti.play();
      setstart(false)
      console.log("done");
    }
  }, [isStart,time]);

  useEffect(()=>{
    setstart(false)
      if(ctime>60){
        let chour = Math.floor(ctime/60);
        let cmin= ctime%60;
        setTime(()=>({hour:chour,min:cmin,sec:0}))
      }
      else{
        let cmin= ctime%60;
        setTime(()=>({hour:0,min:cmin,sec:0}))
      }
      if(ctime<0){
        setctime(0)
      }
  },[ctime])
  return (
    <>
      <div data-aos="fade-up"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000" className="w-7/12 relative" style={{ color: "#cccccc" }}>
        <div className="" style={{transform:"translate(0,50%)"}}>
          <h1 className="flex justify-between w-10/12 m-auto">
            <button className="w-1/5" onClick={()=>{setTime({hour:0,min:25,sec:0}) ;setstart(false)}} style={{padding:"10px 15px",fontSize:"17px", border:"1px solid #cccccc",borderRadius:"11px"} }>Pomodoro</button>
            <button className="w-1/5" onClick={()=>{setTime({hour:0,min:5,sec:0}) ;setstart(false)}} style={{padding:"10px 15px",fontSize:"17px", border:"1px solid #cccccc",borderRadius:"11px"}}>Short Time</button>
            <button className="w-1/5" onClick={()=>{setTime({hour:0,min:10,sec:0}) ;setstart(false)}} style={{padding:"10px 15px",fontSize:"17px", border:"1px solid #cccccc",borderRadius:"11px"}}>Long TIme</button>
            <button className="w-1/5" style={{padding:"10px 15px",fontSize:"17px", border:"1px solid #cccccc",borderRadius:"11px"}} onClick={()=>setisshow(!ishow)}>Coustom</button>
          </h1>
          <h1 className="flex justify-center mt-5">{ishow?<input type="number" value={ctime} onChange={(e)=>setctime(e.target.value)} style={{background:"transparent",fontSize:"20px",borderBottom:"0.5px solid white",outline:"none"}}/>:""}</h1>
          <div className="Main-clock" >
              <div style={{fontSize:"65px",textAlign:"center",width:"100%",marginTop:"30px"}}>{time.hour} : {time.min} : {time.sec}</div>
          </div>
          <div className="flex justify-between w-4/12 m-auto" style={{marginTop:"10px"}}>
            <button style={{height:"70px",width:"70px", border:"1px solid white",borderRadius:"100%"}} onClick={()=>setstart(!isStart)}>{isStart?"STOP":"START"}</button>
            <button style={{height:"70px",width:"70px",border:"1px solid white",borderRadius:"100%"}} onClick={()=>{setTime({hour:0,min:0,sec:0}) ;setstart(false)}}>RESET</button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Maintimer;
