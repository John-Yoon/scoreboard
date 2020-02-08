// type은 필수, 그 다음부터는 정의되지 않았기 때문에 임의로 사용가능.
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./ActionTypes";

export const addPlayer = (name) => ({
    type: ADD_PLAYER,
    name
});

export const changeScore = (id, delta) => {
    return {
        type: CHANGE_SCORE,
        id: id,
        delta: delta
    }
};

export const removePlayer = (id) => ({
    type: REMOVE_PLAYER,
    id
})