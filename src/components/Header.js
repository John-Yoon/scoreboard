import React from "react";
import {Stats} from "./Stats";

export const Header = (props) => {
    /*console.log(props);*/
    return (
        <header className="header">
            <Stats players={props.players}></Stats>
            <h1 className="h1">{props.title}</h1>
            {/*<span className="stats">Players: {props.totalPlayers}</span>*/}
        </header>
    )
}