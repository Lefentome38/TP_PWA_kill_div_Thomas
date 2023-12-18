import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"


function Kill_div(props: {resultat_point:(resultatPoint:number) => void}) {

  const navig = useNavigate()
  const [point,Setpoint] = useState<number>(1) // !!!
  const [random_top,SetRandom_top] = useState(Math.floor(Math.random()*41).toString())
  const [random_left,SetRandom_left] = useState(Math.floor(Math.random()*101).toString())

  const ajout_point = useCallback(() => {

    SetRandom_top(Math.floor(Math.random()*41).toString())
    SetRandom_left(Math.floor(Math.random()*101).toString())
    
    if (point===10) {
      navig("/end")
    }else{
      Setpoint(point+1)
      props.resultat_point(point)
    }
  },[random_top, random_left, point])

  return (
    <>
      <div onClick={ajout_point} className="kill_div" style={{marginTop: random_top+"%", marginLeft: random_left+"%"}}>
      </div>
    </>
  )
}

export default Kill_div
