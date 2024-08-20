import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  )
}

export default RoutesApp