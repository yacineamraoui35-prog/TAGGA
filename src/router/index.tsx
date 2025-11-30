import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// Pages
import HomePage from '../pages/HomePage';
import SendParcelPage from '../pages/SendParcelPage';
import FindTravelerPage from '../pages/FindTravelerPage';
import BecomeTravelerPage from '../pages/BecomeTravelerPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import SenderDashboard from '../pages/sender/SenderDashboard';
import TravelerDashboard from '../pages/traveler/TravelerDashboard';
import PaymentPage from '../pages/PaymentPage';
import ContactPage from '../pages/ContactPage';
import TermsPage from '../pages/legal/TermsPage';
import PrivacyPage from '../pages/legal/PrivacyPage';
import LegalNoticePage from '../pages/legal/LegalNoticePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'send-parcel',
        element: <SendParcelPage />,
      },
      {
        path: 'find-traveler',
        element: <FindTravelerPage />,
      },
      {
        path: 'become-traveler',
        element: <BecomeTravelerPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'sender/dashboard',
        element: <SenderDashboard />,
      },
      {
        path: 'traveler/dashboard',
        element: <TravelerDashboard />,
      },
      {
        path: 'payment/:parcelId',
        element: <PaymentPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'legal',
        element: <LegalNoticePage />,
      },
    ],
  },
]);
