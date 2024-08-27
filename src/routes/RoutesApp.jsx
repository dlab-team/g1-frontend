import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProfilePage from '../pages/profile/ProfilePage.jsx';


const RoutesApp = () => {
        return (
                <Routes>
                        <Route path="*" element={<NotFoundPage />}></Route>
                        {/* ejemplo:  <Route path="/" element={<Index/>}></Route> */}
                        <Route path="/" element={<Navigate to="/login" />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route path="/profile" element={<ProfilePage />} />
                </Routes>
        )
}

export default RoutesApp