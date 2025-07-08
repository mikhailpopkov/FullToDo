import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Goals from "./pages/Goals";
import Job from "./pages/Job";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/"  element={<Home/>}/>
        <Route path="/finance" element={<Finance/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/job" element={<Job/>} />
      </Route>
    </Routes>
  )
}

export default App
