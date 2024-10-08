import NotFoundPage from '../pages/NotFoundPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage.jsx'
import NotificationPage from '../pages/NotificationPage.jsx'
import SignupPage from '../pages/SignupPage.jsx'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.jsx'
import GoalsPage from '../pages/GoalsPage.jsx'
import ActivitiesPage from '../pages/ActivitiesPage.jsx'
import MetricsPage from '../pages/Metrics.jsx'
import TaskTablePage from '../pages/TaskTablePage.jsx'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage/>}></Route>
      <Route path='/' element={<Navigate to='/login' />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/notification' element={<NotificationPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      <Route path='/goals' element={<GoalsPage />} />
      <Route path='/activities' element={<ActivitiesPage />} />
      <Route path='/analytics' element={<MetricsPage />}></Route>
      <Route path='/tasks' element={<TaskTablePage />}></Route>
    </Routes>
  )
}

export default RoutesApp
