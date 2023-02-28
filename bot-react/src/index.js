import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import About from './routes/about';
import Contact from './routes/contact';
import CreateAccount from './routes/create-account.jsx';
import Home from './routes/home';
import Pics from './routes/pics';
import Root from './routes/root';


// starting to set up my routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }, 
      {
        path: 'pics',
        element: <Pics />
      },
      {
        path: 'create-account',
        element: <CreateAccount />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

