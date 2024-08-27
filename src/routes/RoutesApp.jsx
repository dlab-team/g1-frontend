import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage.jsx";
import NotificationPage from "../pages/NotificationPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ResetPasswordPage from "../pages/ResetPasswordPage.jsx";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFoundPage />}></Route>
			<Route path="/" element={<Navigate to="/login" />}></Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/notification" element={<NotificationPage />} />
			<Route path="/resetpassword" element={<ResetPasswordPage/>} />
		</Routes>
	);
};

export default RoutesApp;
