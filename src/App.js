import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterPartnerPage from './pages/RegisterPartnerPage';
import Login from './pages/LoginPartnerPage';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import MakeInvitationPage from './pages/MakeInvitationPage';
import TemplatesPage from './pages/TemplatesPage';
import Dashboard from './pages/Dashboard';
import UserList from './components/UserList';
import InvitationList from './components/InvitationList';
import Invitations from './pages/Invitations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/register",
    element: <RegisterPartnerPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/:partnerName",
    element: <LandingPage />
  },
  {
    path: "/:partnerName/invitation/:templateName/form",
    element: <MakeInvitationPage />
  },
  {
    path: "/invitation/:partnerName/templates",
    element: <TemplatesPage />
  },
  {
    path: "/invitacion/:partnerName/:idWedding",
    element: <Invitations />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/dashboard/users",
    element: <UserList />
  },
  {
    path: "/dashboard/invitations",
    element: <InvitationList />
  }
]);

function App() {
  // Verifica si estamos en una ruta que empieza con "/invitacion/"
  const pathname = window.location.pathname;
  const regex = /\/invitacion\/[^\/]+\/[^\/]+/;
  const isInvitationRoute = regex.test(pathname);

  return (
    <div>
      {/* Solo muestra el NavigationBar si no estamos en una ruta de invitación */}
      {isInvitationRoute ? null : <NavigationBar />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
