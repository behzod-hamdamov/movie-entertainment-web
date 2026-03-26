import { Routes, Route } from "react-router"

import {
  LoginPage,
  SignupPage
} from "./pages/index"

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} ></Route>
        <Route path="/" element={<SignupPage />} ></Route>
      </Routes>
    </>
  )
}

export default App
