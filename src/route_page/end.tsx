import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function End() {

  const [table_score,SetTable_score] = useState<string[]>([])

  useEffect(()=>{
    let res: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      let x = localStorage.getItem(i.toString())
      if(x){
        res = [x , ...res]
      }
    }
    SetTable_score(res)
  },[])

  const delete_localStorage = useCallback(()=>{
    localStorage.clear()
  },[])

  const navig = useNavigate()
  const params = useParams()

  return (
    <>
      <div>
        <p>gagné</p>
        <p>votre temps de jeu: {params.timer}s</p>
        <button onClick={() => navig("/")}>retour menu</button>
        <button onClick={delete_localStorage}>delete</button>
        <div className="tableau_score">
          {table_score.map((name:any,i:number)=>
            <p key={i}> {i+1} | {name} </p>
          )}
        </div>

      </div>
    </>
  )
}

export default End