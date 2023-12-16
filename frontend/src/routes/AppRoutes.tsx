import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import ManagerDashboard from "../pages/manager/ManagerDashboard";
import UserDashboard from '../pages/user/UserDashboard';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/manager/dashboard' element={<ManagerDashboard />} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}