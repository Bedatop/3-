setTimeout(function () {
    setTimeout(function () {
        console.log('Таймер на 2000');
    }, 1000);
    console.log('Таймер на 5000');
}, 5000);

setTimeout(function () {
    console.log('Таймер на 2000');
}, 2000);

console.log('после SetTimeout');

console.log('до цикла');
console.time('Время выполнения цикла');
for (let i = 1; i < 3000000000; i++) {
    let a = i / i;
}
console.timeEnd('Время выполнения цикла');
console.log('после цикла');


// **********************
/* const queu [
    {
        fn: function() {
            console.log('Таймер');
        },
            delay: 5000,
                start: 51245545847545
    },
    {
        fn: function() {
            console.log('Таймер');
        },
            delay: 2000,
                start: 51245545847540
    }
] */