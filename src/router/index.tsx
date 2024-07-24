import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, Auth, Reject, Accept, Vakansi, Statistiks} from "@pages";
import Layout from '@layout'
import App from "../App";


export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
           <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/dashboard/*" element={<Layout/>}>
                    <Route index element={<Vakansi/>}/>
                    <Route path="reject" element={<Reject/>}/>
                    <Route path="accept" element={<Accept/>}/>
                    <Route path="statistikalar" element={<Statistiks/>}/>
                </Route>
           </Route>
        )
    )
    return <RouterProvider router={root} />
}