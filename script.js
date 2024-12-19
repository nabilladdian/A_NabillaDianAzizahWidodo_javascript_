function fetchData(callback) {
    setTimeout(() => {
        const data = {
            message: "Data fetched successfully!"
        };
        callback(data);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');
    const resultElement = document.getElementById('result');
    const loaderElement = document.getElementById('loader');

    fetchData((data) => {
        statusElement.textContent = 'Data fetched!';
        resultElement.textContent = data.message;
        resultElement.style.display = 'block';
        loaderElement.style.display = 'none';
    });
});
