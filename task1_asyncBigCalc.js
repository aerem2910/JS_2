function heavyComputation(base, exponent) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = BigInt(base) ** BigInt(exponent);
            resolve(result);
        }, 0); // имитация асинхронности без блокировки
    });
}

// Пример использования
heavyComputation(2, 1000000n).then(result => {
    console.log("Результат вычисления:", result);
});
