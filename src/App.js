import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './context/AuthContext';
import NavigationBar from './components/NavigationBar';
import RegisterPartnerPage from './pages/RegisterPartnerPage';
import Login from './pages/LoginPartnerPage';
import LandingPage from './pages/LandingPage';
import MakeInvitationPage from './pages/MakeInvitationPage';
import TemplatesPage from './pages/TemplatesPage';
import Dashboard from './pages/Dashboard';
import UserList from './components/UserList';
import InvitationList from './components/InvitationList';
import Invitations from './pages/Invitations';
import LegalNotice from './pages/legalPages/LegalNotice';
import PrivacyPolicy from './pages/legalPages/PrivacyPolicy';
import ConditionsOfUse from './pages/legalPages/ConditionsOfUse';
import CookiesPolicy from './pages/legalPages/CookiesPolicy';
import ThankYouPage from './pages/ThankYouPage';
import AboutUs from './pages/AboutUs';
import Crowfunding from './pages/Crowfunding';
import ContactPage from './pages/ContactPage';
import AppLayout from './layouts/AppLayout';
import TemplateGallery from './pages/TemplateGallery';

const router = createBrowserRouter([
  // Redirigir raíz a español
  {
    path: "/",
    element: <Navigate to="/es" replace />
  },

  // Rutas con idioma
  {
    path: "/:lang",
    element: <AppLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "register", element: <RegisterPartnerPage /> },
      { path: "login", element: <Login /> },
      { path: ":partnerName", element: <LandingPage /> },
      { path: ":partnerName/invitation/:templateName/form", element: <MakeInvitationPage /> },
      { path: "invitation/:partnerName/templates", element: <TemplatesPage /> },
      { path: "invitacion/:partnerName/:idWedding", element: <Invitations /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/users", element: <UserList /> },
      { path: "dashboard/invitations", element: <InvitationList /> },
      { path: "aviso-legal", element: <LegalNotice /> },
      { path: "politica-de-privacidad", element: <PrivacyPolicy /> },
      { path: "terminos-y-condiciones", element: <ConditionsOfUse /> },
      { path: "politica-de-cookies", element: <CookiesPolicy /> },
      { path: "thankyou", element: <ThankYouPage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "crowfunding", element: <Crowfunding /> },
      { path: "contact", element: <ContactPage /> },
      { path: "gallery", element: <TemplateGallery /> }
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;