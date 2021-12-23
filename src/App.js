import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import AllMeetupspage from "./pages/AllMeetups";
import Favouritespage from "./pages/Favourites";
import NewMeetuppage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return ( <
        div >
        <
        MainNavigation / >
        <
        Routes >
        <
        Route path = "/"
        element = { < AllMeetupspage / > }
        />{" "} <
        Route path = "/new-meetup"
        element = { < NewMeetuppage / > }
        />{" "} <
        Route path = "/favourites"
        element = { < Favouritespage / > }
        />{" "} <
        /Routes>{" "} <
        /div>
    );
}

export default App;