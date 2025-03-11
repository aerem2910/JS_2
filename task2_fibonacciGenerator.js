function* fibonacciGenerator() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Пример использования
const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}
