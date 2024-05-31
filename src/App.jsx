import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from "./pages/home";
import FAQs from "./pages/faqs";
import ErrorPage  from './pages/404';
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import AboutUs from "./pages/aboutUs";

function App() {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: "/faqs", element: < FAQs /> },
    { path: "/contacto", element: <Contact /> },
    { path: "/donar", element: <Donate /> },
    { path: "/nosotros", element: <AboutUs /> },
    { path: "*", element: <ErrorPage /> },
  ];

  return (
    <Router>
      <Routes>
        { routes.map( route => {
          return <Route
              key={ route.path }
              path={ route.path }
              element={ route.element }
            />
          } )}
      </Routes>
    </Router>
  );
}

export default App;
