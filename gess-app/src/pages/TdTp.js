import react, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Spreadsheet from "react-spreadsheet";


const TdTp = () => {
const [jour,setJour]=useState(2)
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const [data, setData] = useState([
  [{ value: "Nom Et Prenom" }, { value: "Matricule" },{value:"Plage"}],
  [{ value: "Test Test Test Test Test Test" }, { value: "xxxxxxxx" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],
  [{ value: "" }, { value: "" },{value:""}],

]);
const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};
const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;
  const [stratTime,setStart] = useState(Date.now() / 1000); 
  const [endTime,setEnd] = useState(stratTime + jour*86400); 
  const [remainingTime,setRemaining] = useState(endTime - stratTime);
  const [days,setDays] = useState(Math.ceil(remainingTime / daySeconds));
  const [daysDuration,setDuration] = useState(days * daySeconds);
const AjouteTd = (e)=>{
  e.preventDefault()
  setStart(Date.now() / 1000)
  setEnd(stratTime + jour*86400)
  setRemaining(endTime - stratTime)
  setDays(Math.ceil(remainingTime / daySeconds))
  setDuration(days * daySeconds)
  setShow1(true)
  setShow2(true)
  setShow(false)
}
  const [show,setShow]=useState(false)
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  const [nombre,setNombre]=useState()
  const [groupe,setGroupe]=useState()
  const group=[1,2,3,4,5];
  let type=null;
  let option=null;
  if(groupe ==="1"){
    type=group.slice(0,1)
  }else if(groupe === "2"){
    type=group.slice(0,2)
  }else if(groupe === "3"){
    type=group.slice(0,3)
  }else if(groupe === "4"){
    type=group.slice(0,4)
  }else if(groupe === "5"){
    type=group.slice(0,5)
  }
  if (type) {
    let plage="plage  "
    option = type.map((el) => 
    <div className="same">
            <input type="text" className="form-control" id={`${plage}${el}`} placeholder={`${plage}${el}`}
            />
    </div>
    );
  }
    return(
      <div>
        <button className="btn btn-primary" onClick={()=>setShow(prev => !prev)}>Ajouter</button>
        {show && <div>
          <form className='form2' onSubmit={AjouteTd}>
            <div className="same">
            <input type="number" className="form-control" placeholder="Nombre Etudiant"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            </div>
            <div className="same">
            <select  onChange={(e) => setGroupe(e.target.value)} value={groupe} >
              <option>Nombre Groupe</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
           </select>            
            </div>
            {option}
            <div className="same">
            <input type="number" className="form-control" placeholder="Delais en Jour" id="jour"
            value={jour}
            onChange={(e)=>setJour(e.target.value)}
            />
            </div>
            <input type="submit" value="Confirm" className="logi1"/>
          </form>
          </div>}
        {show1  &&<div className="counter"> 
            <CountdownCircleTimer
            {...timerProps}
            colors="#7E2E84"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
            >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}  
           </CountdownCircleTimer> 
           <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>  
       <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer> 
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
        </div>}
        {show2 && <div className="spread">
    <h4>Entre Votre Nom Et Matricule</h4>
    <Spreadsheet data={data} onChange={setData}  />
  </div> }
      </div>
    )
  };
  
export default TdTp;
  