import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

function Menu_start() {

  const navig = useNavigate()
  
  const navig_jeu = useCallback(() => {
    navig("/plateau_jeux")
  },[])

  return (
    <>
      <div className="div_start">
        <button onClick={navig_jeu}>start</button>
      </div>
    </>
  )
}

export default Menu_start
