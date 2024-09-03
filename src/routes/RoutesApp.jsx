import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage.jsx";
import NotificationPage from "../pages/NotificationPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ResetPasswordPage from "../pages/ResetPasswordPage.jsx";
import SidebarComponent from "../components/Sidebar.jsx";


function Perfil() {
	return (
		<div className=" bg-primary-50">
			<SidebarComponent />
			<ProfilePage />
		</div>
	);
}

function Notificaciones() {
	return (
		<div>
			<SidebarComponent />
			<NotificationPage />
		</div>
	);
}

function NotFound() {
	return (
		<div>
			<SidebarComponent />
			<NotFoundPage />
		</div>
	);
}

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />}></Route>
			<Route path="/" element={<Navigate to="/login" />}></Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/profile" element={<Perfil />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/notification" element={<Notificaciones />} />
			<Route path="/resetpassword" element={<ResetPasswordPage />} />
		</Routes>
	);
};

export default RoutesApp;
