import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from "./pages/home";
import FAQs from "./pages/faqs";
import ErrorPage  from './pages/404';

function App() {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: "/faqs", element: < FAQs /> },
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
