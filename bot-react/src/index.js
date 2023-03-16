import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as 
 Route, createRoutesFromElements
} from "react-router-dom";
import ErrorPage from './error-page';
import About from './routes/about';
import Contact from './routes/contact';
import CreateAccount from './routes/create-account.jsx';
import Home from './routes/home';
import Pics from './routes/pics';
import Root from './routes/root_navbar';
// import { createContext, useContext } from 'react';
// import { AccountContext } from './routes/account-context';
// const UserContext  = createContext(null);


const router = createBrowserRouter (

 createRoutesFromElements( 
  
  <>
     
        <Route path="/" exact element={<Root />} errorElement={<ErrorPage />} >
           
          <Route index element={<Home />} />
          <Route path="home"  element={<Home />} />
          <Route path="create-account"  element={<CreateAccount />} />
          <Route path="pics"  element={<Pics />} />
          <Route path="contact"  element={<Contact />} />
          <Route path="about" element={<About />} />
        
        </Route>
      
      
 </> 
 )
 
);

// function IndexRouter()  {
//   return (
//       <Router>
//         <div>
//           <nav>
//           <Route path="home"  element={<Home />} />
//           <Route path="create-account"  element={<CreateAccount />} />
//           <Route path="pics"  element={<Pics />} />
//           <Route path="contact"  element={<Contact />} />
//           <Route path="about" element={<About />} />
//           </nav>
          
//         </div>

//       </Router>
      
      // <Route path="/" exact element={<Root />} errorElement={<ErrorPage />} >
        
      //     <Route path="home"  element={<Home />} />
      //     <Route path="create-account"  element={<CreateAccount />} />
      //     <Route path="pics"  element={<Pics />} />
      //     <Route path="contact"  element={<Contact />} />
      //     <Route path="about" element={<About />} />
        
      // </Route>

//   );
// }

// starting to set up my routes
// const router = createBrowserRouter([ 
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'home',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }, 
//       {
//         path: 'pics',
//         element: <Pics />
//       },
//       {
//         path: 'create-account',
//         element: <CreateAccount />
//       } 
//        ]
//   },
// ]);

// export default IndexRouter;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={IndexRouter} />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
