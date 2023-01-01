import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import MainPage from "./pages/MainPage"
import Technologies from "./pages/Technologies"
import Concepts from "./pages/Concepts"
import Sources from "./pages/Sources"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="concepts" element={<Concepts />} />
          <Route path="sources" element={<Sources />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
