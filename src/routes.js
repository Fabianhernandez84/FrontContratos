/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";


import ListarUsuarios from "views/Usuarios/ListarUsuarios";

import ListarTerceros from "views/Terceros/ListarTerceros";
import CrearTerceros from "views/Terceros/CrearTerceros";
import EditarTerceros from "views/Terceros/EditarTerceros";
import VerTerceros from "views/Terceros/VerTerceros"


import CrearContratos from "views/Contratos/CrearContratos";
import EditarContratos from "views/Contratos/EditarContratos";
import ListarContratos from "views/Contratos/ListarContratos";
import VerContratos from "views/Contratos/VerContratos"

import CrearReferencia from "views/Referencias/CrearReferencia"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
    type:"menu",
  },
  {
      path: "/contratos/lista",
      name: "Contratos",
      icon: "nc-icon nc-book-bookmark",
      component: <ListarContratos />,
      layout: "/admin",
      type:"menu",
  },
  {
    path: "/terceros/lista",
    name: "Terceros",
    icon: "nc-icon nc-single-02",
    component: <ListarTerceros />,
    layout: "/admin",
    type:"menu",
  }, 
 
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-book-bookmark",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  {
    path: "/usuarios/listar",
    name: "Usuarios",    
    icon: "nc-icon nc-circle-10",
    component: <ListarUsuarios />,
    layout: "/admin",
    type:"menu",
  },
  {
    path: "/terceros/crear",
    name: "Crear Terceros",  
    component: <CrearTerceros />,
    layout: "/admin",
   
  },
  {
    path: "/terceros/editar/:id",
    name: "Editar Terceros",  
    component: <EditarTerceros />,
    layout: "/admin",
   
  },
  {
    path: "/terceros/ver/:id",
    name: "Ver Terceros",  
    component: <VerTerceros />,
    layout: "/admin",
   
  },
  {
    path: "/contratos/ver/:id",
    name: "Ver Contratos",  
    component: <VerContratos />,
    layout: "/admin",
   
  },
  {
    path: "/contratos/editar/:id",
    name: "Editar Contratos",  
    component: <EditarContratos />,
    layout: "/admin",
   
  },
  {
    path: "/contratos/crear",
    name: "Crear Contratos",  
    component: <CrearContratos />,
    layout: "/admin",   
  },
  {
    icon: "nc-icon nc-badge",
    path: "/referencias/crear/:id",
    name: "Crear Referencias",  
    component: <CrearReferencia />,
    layout: "/admin",       
  },
 
];
export default routes;
