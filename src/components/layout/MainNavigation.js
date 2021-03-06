import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return ( <
        header className = { classes.header } >
        <
        div className = { classes.logo } > ECU Meetups < /div>{" "} <
        nav >
        <
        ul >
        <
        li >
        <
        Link to = "/" > All Meetups < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/new-meetup" > Add New meetup < /Link>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/favourites" > My favourites < /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /nav>{" "} <
        /header>
    );
}

export default MainNavigation;