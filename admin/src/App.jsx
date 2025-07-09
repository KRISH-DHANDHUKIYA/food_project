import Sidebar from "./components/Sidebar"
import Add from "./Pages/Add"
import List from "./Pages/List"
import Orders from "./Pages/Orders"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <main>
        <div className="bg-deep text-[#404040]">
          <div className="mx-auot max-w-[1440px] flex flex-col sm:flex-row">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
