const array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

const proxy = new Proxy(array, {
    get(target, prop) {
        if (typeof prop === 'string') {
            const vowelCount = countVowels(prop);
            return target[vowelCount];
        }
        return target[prop];
    }
});

// Пример использования
console.log(proxy['hello']); // 'two' (2 гласные)
console.log(proxy['bcdfg']); // 'zero' (0 гласных)
