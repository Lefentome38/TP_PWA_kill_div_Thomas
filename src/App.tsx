import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Menu_start from "./route_page/Menu_start"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Menu_start/>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
