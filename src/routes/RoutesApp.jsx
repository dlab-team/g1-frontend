import { Route, Routes } from "react-router-dom";
import PerfilPage from '../pages/perfil/PerfilPage.jsx';

const RoutesApp = () => {
  return (
    <Routes>
        {/* ejemplo:  <Route path="/" element={<Index/>}></Route> */}
        <Route path="/perfil" element={<PerfilPage />} />
    </Routes>
  )
}

export default RoutesApp