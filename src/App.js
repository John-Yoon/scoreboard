import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
    state = {
        players: [
            {name: 'LDK', id: 1},
            {name: 'OKE', id: 2},
            {name: 'DFK', id: 3},
            {name: 'WER', id: 4}
        ]
    }

    handleRemovePlayer = (e, id) => {
        console.log('handleRemove :' + id);
        this.setState(prevState => {
            const players = prevState.players.filter(item => item.id !== id);
            return {players: players};
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="My Scoreboard" totalPlayers={11}/>
                {
                    this.state.players.map((item) => (
                        <Player id={item.id} name={item.name} key={item.id} removePlayer={this.handleRemovePlayer}/>
                    ))
                }
            </div>
        )
    }
}

export default App;
