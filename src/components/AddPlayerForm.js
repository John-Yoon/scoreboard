import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value:''
    }

    // id는 파라미터 연습한 값임.
    handleValueChange = (e, id) => {
        //console.log('handleValueChange: ', e);
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        // 폼이 다른페이지로 이동하는 기본 이벤트 막기
        // Vue에서는 @click.prevent <<-- 이벤트에 속성을 부여한다.
        e.preventDefault();
        e.stopPropagation(); // 이벤트를 해당 컴포넌트에서만 한정적으로 발생되도록 한다.

        const form = document.getElementById("form");
        const player = document.getElementById("player");

        console.log(player.validity.valid); // 9가지 패턴의 만족여부를 판단한다.
        console.log(form.checkValidity());

        if (!form.checkValidity()) {
            // Show error message!!!
            // 오픈소스를 찾아보면 많아요? ...........
            return;
        }

        this.props.addPlayer(this.state.value);
    }

    render() {
        return (
            <form id="form" action="" className="form" onSubmit={this.handleSubmit} noValidate >
                <input id="player" type="text" className="input" value={this.state.value} onChange={(e, id) => this.handleValueChange(e, '12')}
                       placeholder="enter a player's name" required />
                <input type="submit" className="input" value="Add Player" />
            </form>
        );
    }
}