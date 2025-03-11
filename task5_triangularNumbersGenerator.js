function* triangularNumbers() {
    let n = 1;
    while (true) {
        yield (n * (n + 1)) / 2;
        n++;
    }
}

// Пример использования
const triGen = triangularNumbers();
for (let i = 0; i < 10; i++) {
    console.log(triGen.next().value);
}
