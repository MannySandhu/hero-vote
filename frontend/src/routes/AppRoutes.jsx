import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Vote from "../pages/Vote";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/vote" element={<Vote />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
