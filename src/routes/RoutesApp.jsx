import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Index from "../pages/Index";

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  )
}

export default RoutesApp