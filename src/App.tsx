import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Menu_start from "./route_page/Menu_start"
import Plateau_jeux from "./route_page/Plateau_jeux"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Menu_start/>
    },
    {
      path:"/plateau_jeux",
      element: <Plateau_jeux/>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
