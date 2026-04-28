import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/dashboard"
import Laporan from "./pages/laporan/laporan"
import Pengaturan from "./pages/pengaturan/pengaturan"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/pengaturan" element={<Pengaturan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App