import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const son = new Audio("/sound-effects-sonic-rings.mp3")
const son_attante = new Audio("/musique-dattente.mp3")

function Plateau_jeux() {
  
  const navig = useNavigate()
  const [timer,SetTimer] = useState<number>()
  const [ping,SetPing] = useState<number>()
  const [point,Setpoint] = useState<number>(1)
  const [random_top,SetRandom_top] = useState(Math.floor(Math.random()*51).toString())
  const [random_left,SetRandom_left] = useState(Math.floor(Math.random()*81).toString())

  const ajout_point = useCallback(() => {
    son.play()

    function sum_timer() {
      return (timer ? (Date.now()-timer) / 1000:0).toString()
    }

    if (point===10) {
      son_attante.currentTime = 0
      son_attante.pause()
      // Notification.requestPermission().then((permission) => {
      //   if (permission === "granted") {
      //     new Notification("Hi there!", { body: (timer ? (Date.now()-timer) / 1000:0).toString()});
      //   }
      // });
      if (localStorage) {
        localStorage.setItem(localStorage.length.toString() ,sum_timer()) // !!!
      }
      navig("/end/" + sum_timer())
    }else{
      if (navigator.vibrate) {
        navigator.vibrate([200]) // !!!
      }
      Setpoint(point+1)
      son.currentTime = 0
    }
    SetRandom_top(Math.floor(Math.random()*41).toString())
    SetRandom_left(Math.floor(Math.random()*81).toString())
  },[random_top, random_left, point])
  
  useEffect(() => {
    son_attante.play()  
    SetTimer(Date.now())
    setInterval(()=>{
      SetPing(Math.random())
    },)
    son_attante.currentTime = 0
    son_attante.pause()
  },[])

  const navig_start = useCallback(() => {
    navig("/")
    console.log(ping);
    son_attante.currentTime = 0
    son_attante.pause()
  },[])

  return (
    <>
      <div className="div_plateau_jeu">
        <div className="div_navig_start">
          <button onClick={navig_start}>go menu</button>
          <p>{(timer ? (Date.now()-timer) / 1000:0)}</p>
          <p className="p_score">{point-1}</p>
        </div>
        <div className="zone_div_kill">
           <div onClick={ajout_point} className="kill_div" style={{marginTop: random_top+"%", marginLeft: random_left+"%"}}></div>  {/* problème de placement des div_kill, ils sortent de la zone de jeu */}
        </div>
      </div>
    </>
  )
}

export default Plateau_jeux