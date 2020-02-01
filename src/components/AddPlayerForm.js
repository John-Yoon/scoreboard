import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value:''
    }

    // id는 파라미터 연습한 값임.
    handleValueChange = (e, id) => {
        console.log('handleValueChange: ', e);
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        // 폼이 다른페이지로 이동하는 기본 이벤트 막기
        // Vue에서는 @click.prevent <<-- 이벤트에 속성을 부여한다.
        e.preventDefault();
        e.stopPropagation(); // 이벤트를 해당 컴포넌트에서만 한정적으로 발생되도록 한다.
        this.props.addPlayer(this.state.value);
    }

    render() {
        return (
            <form action="" className="form" onSubmit={this.handleSubmit}>
                <input type="text" className="input" value={this.state.value} onChange={(e, id) => this.handleValueChange(e, '12')}
                       placeholder="enter a player's name" />
                <input type="submit" className="input" value="Add Player" />
            </form>
        );
    }
}