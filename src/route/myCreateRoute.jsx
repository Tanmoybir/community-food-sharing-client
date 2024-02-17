import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:'/addFood',
                element: <AddFood/>
            },
            {
                path:'/availableFood',
                element: <AvailableFood/>
            },
            {
                path:'/manageMyFoods',
                element: <ManageMyFoods/>
            },
            {
                path:'/myFoodRequest',
                element: <MyFoodRequest/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default myCreateRoute;