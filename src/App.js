import { BrowserRouter, Routes, Route } from "react-router-dom"

import gameOfThrones from './gameOfThrones'

import Home from "./components/pages/Home"
import House from "./components/pages/House"
import Houses from "./components/pages/Houses"
import Member from "./components/pages/Member"
import Header from "./components/partials/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses house={gameOfThrones} />} />
        <Route path="/houses/:houseId" element={<House house={gameOfThrones} />} />
        <Route path="/houses/:houseId/members/:memberId" element={<Member house={gameOfThrones}/>} />
      </Routes>
    </BrowserRouter>
  )
}