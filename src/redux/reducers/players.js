const playerInitialState = {
    players: [
        {name: 'LDK', score:5, id: 1},
        {name: 'OKE', score:6, id: 2},
        {name: 'DFK', score:7, id: 3},
        {name: 'WER', score:8, id: 4}
    ]
}

export const playerReducer = (state = playerInitialState, action) => {
    let players = null;
    switch (action.type) {
        case 'ADD_PLAYER':
            players = [...state.players]; // deep copy
            players.push({id: players[players.length-1].id+1, name: action.name, score: action.name.length});
            return {
                ...state,
                players
            };
        case 'CHANGE_SCORE':
            //const players = [...state.players];
            players = [...state.players];

            players.forEach(item => {
                if (item.id === action.id) {
                    item.score += action.delta;
                }
            })

            return {
                ...state,
                players: players
            }
        default:
            return state;
    }
}