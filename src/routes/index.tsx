import {RouterProvider, createBrowserRouter, Navigate} from "react-router-dom";
import Home from "../screens/Home";

const Routes = () => {
    const router = createBrowserRouter([
        {path: '/', Component: Home},
        {path: '/*', element: <Navigate to="/" replace/>}
    ]);


    return <RouterProvider router={router}/>
}

export default Routes;