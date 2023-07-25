import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import IncomePage from "./pages/IncomePage"
import ExpensePage from "./pages/ExpensePage"
import About from "./pages/About"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
