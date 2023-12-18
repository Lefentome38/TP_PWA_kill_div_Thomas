import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Kill_div from "../composants/Kill_div"

const son_attante = new Audio("/musique-dattente.mp3")

function Plateau_jeux() {

  const navig = useNavigate()
  const [score,SetScore] = useState<number>()
  const [timer,SetTimer] = useState<number>()
  const [ping,SetPing] = useState<number>()

  const recup_value = (value:number) =>{
    SetScore(value)
    console.log(ping);
  }

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

  let a = timer ? (Date.now()-timer) / 1000:0
  console.log(a);
  

  return (
    <>
      <div className="div_plateau_jeu">

        <Kill_div Timer={a.toString()} resultat_point={(value) => recup_value(value)}/>

        <div className="div_navig_start">

          <p className="p_score">{score}</p>
          <p>{Math.floor(timer ? (Date.now()-timer) / 1000:0)}</p>
          <button onClick={navig_start}>go menu</button>

        </div>
      </div>
    </>
  )
}

export default Plateau_jeux
