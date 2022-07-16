import Navbar from "./Navbar"
import Tintuc from "./pages/Tintuc"
import Home from "./pages/Home"
import Gioithieu from "./pages/Gioithieu"
import Sanpham from "./pages/Sanpham"
import Hotro from "./pages/Hotro"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioithieu" element={<Gioithieu/>} />
          <Route path="/tintuc" element={<Tintuc/>} />
          <Route path="/sanpham" element={<Sanpham/>} />
          <Route path="/hotro" element={<Hotro/>} />
        </Routes>
      </div>
    </>
  )
}

export default App