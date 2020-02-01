import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import {AddPlayerForm} from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {
    // state = {
    //     players: [
    //         {name: 'LDK', score:5, id: 1},
    //         {name: 'OKE', score:6, id: 2},
    //         {name: 'DFK', score:7, id: 3},
    //         {name: 'WER', score:8, id: 4}
    //     ]
    // }

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

    handleAddPlayer = (name) => {
        //console.log('handleAddPlayer: ', name);
        // name을 players 배열에 추가.
        this.setState(prevState => {
            const players = [...prevState.players]; // deep copy
            players.push({id: players[players.length-1].id+1, name: name, score: name.length});
            return {players: players};
            /*prevState.players.push({id: 5, name: name, score: 0});
            return {players: prevState.players};*/
        });
    }

    render() {
        console.log('App render');
        return (
            <div className="scoreboard">
                {/*<Header title="My Scoreboard" totalPlayers={11}/>*/}
                <Header title="My Scoreboard" players={this.props.players} />
                {
                    this.props.players.map((item) => (
                        <Player id={item.id} name={item.name} score={item.score} key={item.id}
                                changeScore={this.handleChangeScore}
                                removePlayer={this.handleRemovePlayer}/>
                    ))
                }
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        )
    }
}

// export default App;

const mapStateToProps = (state) => ({
  // 왼쪽 props, 오른쪽 store.state
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(App);


