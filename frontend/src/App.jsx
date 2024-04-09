import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import FooterComponent from "./components/Footer"
import React from "react"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App