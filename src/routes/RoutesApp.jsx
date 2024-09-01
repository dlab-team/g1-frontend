import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage.jsx";
import NotificationPage from "../pages/NotificationPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import SidebarComponent from "../components/Sidebar.jsx";


function Perfil() {
	return (
	  <div className=" bg-primary-50">
		<SidebarComponent/>
		<ProfilePage />
	  </div>
	);
  }

  function Notificaciones() {
	return (
	  <div>
		<SidebarComponent/>
		<NotificationPage />
	  </div>
	);
  }

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFoundPage/>}></Route>
			<Route path="/" element={<Navigate to="/login" />}></Route>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/profile" element={<Perfil/>} />
			<Route path="/signup" element={<SignupPage/>} />
			<Route path="/notification" element={<NotificationPage/>} />
			<Route path="/forgot-password" element={<ForgotPasswordPage/>} />
		</Routes>
	);
};

export default RoutesApp;
