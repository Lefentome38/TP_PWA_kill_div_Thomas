import { useNavigate } from "react-router-dom"

function End() {
  const navig = useNavigate()

  return (
    <>
      <div>
      <p>gagné</p>
      <button onClick={() => navig("/")}>retour menu</button>
      </div>
    </>
  )
}

export default End
