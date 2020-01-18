import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
    state = {
        players: [
            {name: 'LDK', score:5, id: 1},
            {name: 'OKE', score:6, id: 2},
            {name: 'DFK', score:7, id: 3},
            {name: 'WER', score:8, id: 4}
        ]
    }

    handleRemovePlayer = (e, id) => {
        console.log('handleRemove :' + id);
        this.setState(prevState => {
            const players = prevState.players.filter(item => item.id !== id);
            return {players: players};
        })
    }

    handleChangeScore = (id, delta) => {
        /*console.log('handleChangeScore', id, delta);*/
        this.setState(prevState => {
            const players = [...prevState.players]; // deep copy
            players.forEach(item => {
                if (item.id === id) {
                    item.score += delta;
                }
            })
            return {players};
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="My Scoreboard" totalPlayers={11}/>
                {
                    this.state.players.map((item) => (
                        <Player id={item.id} name={item.name} score={item.score} key={item.id}
                                changeScore={this.handleChangeScore}
                                removePlayer={this.handleRemovePlayer}/>
                    ))
                }
            </div>
        )
    }
}

export default App;
