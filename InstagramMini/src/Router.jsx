// import all the compontents/elements we want to set our paths t
import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Search from './components/Search/Search.jsx' ;
import Explore from "./components/Explore/Exolore.jsx";
import Reels from "./components/Reels/Reels.jsx";
import Messages from "./components/Messages/Messages.jsx";
import Notifications from "./components/Notifications/Notifications.jsx";
import Create from "./components/Create/Create.jsx";
import Profile from "./components/Profile/Profile.jsx";
import More from "./components/More/More.jsx";
import Layout from "./components/Layout/Layout.jsx" ;
import { element } from "prop-types";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },{
                path: "search",
                element: <Search/>
            },{
                path: "explore",
                element: <Explore/>
            },{
                path: "reels",
                element: <Reels/>
            },{
                path: "messages",
                element: <Messages/>
            },{
                path: "notifications",
                element: <Notifications/>
            },{
                path: "create",
                element: <Create/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "more",
                element: <More/>
            },
        ]
    },
],);


// export-Types: named, default Functions are mostly named default while objects, variables are named exports. function xyz(){} export default xyz; (vs) export const abc = abc({}) ;  this dosent require a line at the end.

// import for default export...(without {} -> simple name of component/function and from "file-name")
// import for named (import {nameOfComponent} from "file-name")