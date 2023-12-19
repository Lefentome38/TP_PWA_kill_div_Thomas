import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const son = new Audio("/sound-effects-sonic-rings.mp3")
const son_attante = new Audio("/musique-dattente.mp3")

function Plateau_jeux() {

  const navig = useNavigate()
  const [score,SetScore] = useState<number>()
  const [timer,SetTimer] = useState<number>()
  const [ping,SetPing] = useState<number>()
  const [point,Setpoint] = useState<number>(1) // !!!
  const [random_top,SetRandom_top] = useState(Math.floor(Math.random()*41).toString())
  const [random_left,SetRandom_left] = useState(Math.floor(Math.random()*101).toString())

  const ajout_point = useCallback(() => {
  son.play()
  SetRandom_top(Math.floor(Math.random()*41).toString())
  SetRandom_left(Math.floor(Math.random()*101).toString())
  
  if (point===10) {
    son_attante.currentTime = 0
    son_attante.pause()
    navig("/end/" + (timer ? (Date.now()-timer) / 1000:0).toString())
  }else{
    navigator.vibrate(200)
    Setpoint(point+1)
    SetScore(point)
    son.currentTime = 0
  }
  },[random_top, random_left, point])

  son_attante.play()  

  useEffect(() => {
    SetTimer(Date.now())
    setInterval(()=>{
      SetPing(Math.random())
    },)
    son_attante.currentTime = 0
    son_attante.pause()
  },[])

  const navig_start = useCallback(() => {
    navig("/")
    son_attante.currentTime = 0
    son_attante.pause()
  },[])

  console.log(timer ? (Date.now()-timer) / 1000:0);

  return (
    <>
      <div className="div_plateau_jeu">

        <div onClick={ajout_point} className="kill_div" style={{marginTop: random_top+"%", marginLeft: random_left+"%"}}></div>

        <div className="div_navig_start">

          <p className="p_score">{score}</p>
          <p>{(timer ? (Date.now()-timer) / 1000:0)}</p>
          <button onClick={navig_start}>go menu</button>

        </div>
      </div>
    </>
  )
}

export default Plateau_jeux