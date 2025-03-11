const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

const proxy = new Proxy(array, {
    get(target, prop) {
        if (Array.isArray(prop)) {
            const maxIndex = Math.max(...prop);
            return target[maxIndex];
        }
        return target[prop];
    }
});

// Пример использования
const indexArray = [1, 4, 2];
console.log(proxy[indexArray]); // 'four'
