async function loadImages(urls) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const promises = urls.map((url, index) =>
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Ошибка загрузки изображения ${index}`);
                return response.blob();
            })
            .then(blob => {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(blob);
                return img;
            })
            .catch(error => {
                const errorMsg = document.createElement('div');
                errorMsg.textContent = error.message;
                return errorMsg;
            })
    );

    const images = await Promise.all(promises);
    images.forEach(el => container.appendChild(el));
}

// Пример использования
loadImages([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    
]);
