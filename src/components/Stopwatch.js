import React from 'react';

export class Stopwatch extends React.Component {
    // Life cycle
    tickRef;
    state = {
        isRunning: false,
        timer: 0
    }
    // Use effect Hook?? (페이지 렌더링...?)
    /*tick  = () => {
        if (this.state.isRunning) {
            this.setState(prevState => {
                return {
                    timer: prevState.timer+1
                }
            })
        }
    }*/

    // The function had called, after render this DOM object.
    // Rest API calls, 3rd Lib loading..
    componentDidMount() {
        this.tickRef = window.setInterval(() => {
            if (this.state.isRunning) {
                this.setState(prevState => {
                    return {
                        timer: prevState.timer+1
                    }
                })
            }
        }, 1000);
    }
    // 리소스 해제, DOM이 제거되기전에 호출..
    // Before unload, Unmount Hook 사용하세요???
    componentWillUnmount() {
        clearInterval(this.tickRef);
    }

    handleStopwatch = () => {
        console.log('handleStopwatch');
        this.setState(prevState => {
            return {
                isRunning: !prevState.isRunning
            }
        })
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={this.handleStopwatch}>
                    {
                        this.state.isRunning ? 'Stop' : 'Start'
                    }
                </button>
                <button onClick={() => this.setState({timer: 0})} >Reset</button>
            </div>
        );
    }
}