const category = {
    a: 1,
    b: 2
}

// for ~ in 연산자 : json Loop
for (let key in category) {
    console.log(key);
}

const fruits = ['a', 'b'];
for (let key in fruits) {
    console.log(fruits[key]);
}

// es6에서는 for, let ~ of 연산자로 사용. angular에서 많이 사용 됨.
for (let item of fruits) {
    console.log(item);
}