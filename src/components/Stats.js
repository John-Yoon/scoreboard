import React from 'react';
import _ from 'lodash';
export const Stats = (props) => {
    let totalPlayers = 0;
    let totalScore = 0;
    // Calc Logic
    totalPlayers = props.players.length;
    // Loop Logic
    /*props.players.forEach(player => {
        totalScore += player.score;
    });*/
    // lodash 사용방법...
    totalScore = _.sumBy(props.players, 'score');

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Total score:</td>
                <td>{totalScore}</td>
            </tr>
            </tbody>
        </table>
    );
}