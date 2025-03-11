function* primeGenerator() {
    const primes = [];
    let num = 2;

    while (true) {
        if (primes.every(p => num % p !== 0)) {
            primes.push(num);
            yield num;
        }
        num++;
    }
}

// Пример использования
const primeGen = primeGenerator();
for (let i = 0; i < 10; i++) {
    console.log(primeGen.next().value);
}
