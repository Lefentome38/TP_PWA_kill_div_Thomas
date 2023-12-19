import { useNavigate, useParams } from "react-router-dom"

function End() {
  const navig = useNavigate()
  const params = useParams()
  return (
    <>
      <div>
      <p>gagné</p>
      <p>{params.timer}</p>
      <button onClick={() => navig("/")}>retour menu</button>
      </div>
    </>
  )
}

export default End