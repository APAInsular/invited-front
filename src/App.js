import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterPartnerPage from './pages/RegisterPartnerPage';
import Login from './pages/LoginPartnerPage';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import MakeInvitationPage from './pages/MakeInvitationPage';
import TemplatesPage from './pages/TemplatesPage';
import RomanticTemplate from './templates/RomanticTemplate';

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
    path: "/invitation/:partnerName",
    element: <LandingPage />
  },
  {
    path: "/invitation/:partnerName/:template/form",
    element: <MakeInvitationPage />
  },
  {
    path: "/invitation/:partnerName/templates",
    element: <TemplatesPage />
  },
  {
    path: "/invitation/:partnerName/templates/:idTemplate",
    element: <RomanticTemplate />
  }
]);

function App() {
  return (
    <div>
      <NavigationBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
