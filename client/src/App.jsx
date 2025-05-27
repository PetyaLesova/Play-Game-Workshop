import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

import * as authService from "./services/authService.js"
import AuthContext from "./contexts/authContexts.js"
import Path from "./paths.js"

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import GameList from "./components/game-list/GameList.jsx"
import GameCreate from "./components/game-create/GameCreate.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import GameDetails from "./components/game-details/GameDetails.jsx"


function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})

  const loginSubmitHandler = async(values) => {
    console.log(values);
    const result = await authService.login(values.email, values.password)
    console.log(result);
    setAuth(result)
    navigate(Path.Home)
  }

  return (

    <AuthContext.Provider value={{loginSubmitHandler}}> 

    <div id="box">
     
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="games" element={<GameList/>}/>
        <Route path="/games/create" element={<GameCreate/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="register" element={<Register/>}/>
        <Route path="games/:gameId" element={<GameDetails/>}/>
        
      </Routes>
      
    </div>
    </AuthContext.Provider>
  )
}

export default App
//1;24