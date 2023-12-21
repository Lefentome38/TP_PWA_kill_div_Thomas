import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const son = new Audio("/sound-effects-sonic-rings.mp3")
const son_attante = new Audio("/musique-dattente.mp3")

const position_rendom = () => {
  return{
    top: (Math.random()*100) + "%", 
    left: (Math.random()*100) + "%"
  }
}

function Plateau_jeux() {
  
  const navig = useNavigate()
  const [timer,SetTimer] = useState<number>()
  const [_,SetPing] = useState<number>()
  const [point,Setpoint] = useState<number>(1)
  const [position,SetPosition] = useState(position_rendom())
  
  function sum_timer() {
    return (timer ? (Date.now()-timer) / 1000:0).toString()
  }

  const click_div = useCallback(() => {
    son.play()

    if (point===10) {
      if (Notification) {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Hi there!", { body: sum_timer()});
          }
        });
      }

      if (localStorage) {
        localStorage.setItem(localStorage.length.toString() ,sum_timer()) // !!!
      }

      son_attante.currentTime = 0
      son_attante.pause()
      navig("/end/" + sum_timer())
    }
    else{
      if (navigator.vibrate) {
        navigator.vibrate([200]) // !!!
      }
      Setpoint(point+1)
      son.currentTime = 0
    }

    SetPosition(position_rendom())

  },[point])
  
  useEffect(() => {
    SetTimer(Date.now())
    setInterval(()=>{
      SetPing(Math.random())
    },)
    son_attante.currentTime = 0
    son_attante.play()  
  },[])

  const navig_start = useCallback(() => {
    navig("/")
    son_attante.currentTime = 0
    son_attante.pause()
  },[])

  return (
    <>
      <div className="div_plateau_jeu">
        <div className="div_info_navig">
          <button onClick={navig_start}>go menu</button>
          <p>{sum_timer()}</p>
          <p className="p_score">{point-1}</p>
        </div>
        <div className="zone_div_kill">
           <div onClick={click_div} className="kill_div" style={position}></div>  {/* problème de placement des div_kill, ils sortent de la zone de jeu */}
        </div>
      </div>
    </>
  )
}

export default Plateau_jeux