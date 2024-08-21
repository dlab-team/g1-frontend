import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const RoutesApp = () => {
  return (
    <Routes>
        {/* ejemplo:  <Route path="/" element={<Index/>}></Route> */}
        <Route path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  )
}

export default RoutesApp