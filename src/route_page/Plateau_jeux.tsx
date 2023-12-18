import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

function Plateau_jeux() {

  const navig = useNavigate()
  const navig_start = useCallback(() => {
    navig("/")
  },[])

  return (
    <>
      <div className="div_plateau_jeu">
      </div>
      <div className="div_navig_start">
        <button onClick={navig_start}>go menu</button>
      </div>
    </>
  )
}

export default Plateau_jeux
