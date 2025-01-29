import { createBrowserRouter } from "react-router-dom";
import { PrimaryLayout } from "../layout/PrimaryLayout";
import { Tasks } from "../pages/Tasks";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimaryLayout />,
        children: [
            {
                path: "/",
                element: <Tasks />,
            }
        ]},
]);

export default router;