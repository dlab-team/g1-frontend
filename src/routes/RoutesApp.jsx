import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  )
}

export default RoutesApp