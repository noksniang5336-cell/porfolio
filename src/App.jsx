import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Accueil from "./Page/Accueil";
import Layout from "./composants/Layout";
import Project from "./Page/Project";
import Apropos from "./Page/Apropos";
import Contact from "./Page/Contact";
import Detail from "./Page/Detail";
import Competences from "./composants/Competences";






function App () {

 const router = createBrowserRouter([
    
    { element:<Layout/>,
      children:[
        {path:"/",element:<Accueil/>},
        {path:"/Project",element:<Project/>},
        {path:"/Apropos",element:<Apropos/>},
        {path:"/Contact",element:<Contact/>},
        {path:"/projet/:id", element:<Detail/>},
        { path: "/Competences", element: <Competences /> },

        {path:"/Apropos", element:<Apropos />} 

      ]

    }

  ]);


  return (
    <RouterProvider router ={router}/>
   
  );

}
export default App;