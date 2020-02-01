// type은 필수, 그 다음부터는 정의되지 않았기 때문에 임의로 사용가능.
export const addPlayer = (name) => ({
    type: 'ADD_PLAYER',
    name
});