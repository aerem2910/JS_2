const array = ['a', 'b', 'c', 'd', 'e'];

const proxy = new Proxy(array, {
    get(target, prop) {
        const index = Math.round(Number(prop));
        if (!isNaN(index)) {
            return target[index];
        }
        return target[prop];
    }
});

// Пример использования
console.log(proxy[1.2]); // 'b'
console.log(proxy[3.8]); // 'e'
