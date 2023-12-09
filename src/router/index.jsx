import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import DetailPage from '../pages/DetailPage';
import Layout from '../components/Layout';
import JobPage from '../pages/JobPage';
import Login from "../pages/Auth/Login/Login"
import Register from "../pages/Auth/Registrasi/Register"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/job',
        element: <JobPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/job/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
