const array = ['zero', 'one', 'two', 'three', 'four'];

const proxy = new Proxy(array, {
    get(target, prop) {
        if (typeof prop === 'object' && prop !== null && 'id' in prop) {
            return target[prop.id];
        }
        return target[prop];
    }
});

// Пример использования
const key = { name: 'element', id: 3 };
console.log(proxy[key]); // 'three'
