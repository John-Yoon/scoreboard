import React from "react";
import {Counter} from './Counter';

export const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={(e) => props.removePlayer(e, props.id)}>x</button>
                {props.name}
            </span>
            <Counter/>
        </div>
    )
}