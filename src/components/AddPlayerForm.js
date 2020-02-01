import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value:''
    }

    // id는 파라미터 연습한 값임.
    handleValueChange = (e, id) => {
        console.log('handleValueChange: ', e);
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <form action="" className="form">
                <input type="text" className="input" value={this.state.value} onChange={(e, id) => this.handleValueChange(e, '12')}
                       placeholder="enter a player's name" />
                <input type="submit" className="input" value="Add Player" />
            </form>
        );
    }
}