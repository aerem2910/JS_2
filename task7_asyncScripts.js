async function loadScripts(urls) {
    try {
        const loadPromises = urls.map(url =>
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`Ошибка загрузки скрипта ${url}`);
                    return response.text();
                })
                .then(code => ({ code, loadTime: Date.now() }))
        );

        const loadedScripts = await Promise.all(loadPromises);

        loadedScripts.sort((a, b) => a.loadTime - b.loadTime);

        loadedScripts.forEach(({ code }) => {
            const script = document.createElement('script');
            script.textContent = code;
            document.body.appendChild(script);
        });

        console.log('Все скрипты успешно загружены');
    } catch (error) {
        console.error('Ошибка при загрузке скриптов:', error.message);
        const errorMsg = document.createElement('div');
        errorMsg.textContent = 'Ошибка при загрузке одного из скриптов!';
        document.body.appendChild(errorMsg);
    }
}

// Пример использования
loadScripts([
    'https://example.com/script1.js',
    'https://example.com/script2.js'
   
]);
