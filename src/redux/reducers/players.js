const playerInitialState = {
    players: [
        {name: 'LDK', score:5, id: 1},
        {name: 'OKE', score:6, id: 2},
        {name: 'DFK', score:7, id: 3},
        {name: 'WER', score:8, id: 4}
    ]
}

export const playerReducer = (state = playerInitialState, action) => {
    return state;
}