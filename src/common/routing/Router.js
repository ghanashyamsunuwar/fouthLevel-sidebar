import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from './web'
import FirstPage from '../../ui/pages/FirstPage'
import SecondPage from '../../ui/pages/SecondPage'
import ThirdPage from '../../ui/pages/ThirdPage'
import FourthPage from '../../ui/pages/FourthPage'
import Sidebar from '../../ui/module/components/Sidebar';

export const router = createBrowserRouter ([

    {
        path: webRoutes.general,
        element: <Sidebar/>
    },
    {
      path: webRoutes.firstlevel,
      element: <FirstPage/>  
    },
    {
        path:webRoutes.secondlevel,
        element: <SecondPage/>
    },
    {
        path: webRoutes.thirdlevel,
        element: <ThirdPage/>
    },
    {
        path: webRoutes.fourthlevel,
        element: <FourthPage/>
    }
]);
