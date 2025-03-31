import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

import CookieConsent from "react-cookie-consent";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/register", element: <RegisterPartnerPage /> },
  { path: "/login", element: <Login /> },
  { path: "/:partnerName", element: <LandingPage /> },
  { path: "/:partnerName/invitation/:templateName/form", element: <MakeInvitationPage /> },
  { path: "/invitation/:partnerName/templates", element: <TemplatesPage /> },
  { path: "/invitacion/:partnerName/:idWedding", element: <Invitations /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/users", element: <UserList /> },
  { path: "/dashboard/invitations", element: <InvitationList /> },
  { path: "/aviso-legal", element: <LegalNotice /> },
  { path: "/politica-de-privacidad", element: <PrivacyPolicy /> },
  { path: "/terminos-y-condiciones", element: <ConditionsOfUse /> },
  { path: "/politica-de-cookies", element: <CookiesPolicy /> },
  { path: "/thankyou", element: <ThankYouPage /> }
]);

function App() {
  const pathname = window.location.pathname;
  const regex = /\/invitacion\/[^\/]+\/[^\/]+/;
  const isInvitationRoute = regex.test(pathname);

  console.log(document.cookie)

  return (
    <AuthProvider>
      {/* <>
        <CookieConsent
          location="bottom"
          buttonText="Acepto"
          cookieName="invitedCookieConsent"
          style={{ background: "#F19292", fontFamily: "Montserrat, sans-serif" }}
          buttonStyle={{
            background: "#2F2F2F",
            color: "#fff",
            fontSize: "14px",
            fontFamily: "Montserrat, sans-serif"
          }}
          expires={150}
        >
          Este sitio utiliza cookies para mejorar tu experiencia.{" "}
          <a
            href="/politica-de-cookies"
            style={{ color: "#ffffff", textDecoration: "underline" }}
          >
            Más información
          </a>
        </CookieConsent>
      </> */}

      <div className='d-flex flex-column min-vh-100'>
        {!isInvitationRoute && (
          <NavigationBar />
        )}
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
