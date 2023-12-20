import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import ManagerDashboard from "../pages/manager/ManagerDashboard";
import UserDashboard from '../pages/user/UserDashboard';
import EventView from "../pages/manager/EventView";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/manager/dashboard' element={<ManagerDashboard />} />
        <Route path='/manager/event-view' element={<EventView />} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}