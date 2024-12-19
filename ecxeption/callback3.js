function fetchData(callback) {
  const statusElement = document.getElementById("status");
  const loaderElement = document.getElementById("loader");

  console.log("Fetching data...");
  setTimeout(() => {
      const data = { id: 1, name: "Tatjana Saphira" };
      callback(data);

      // Hapus status dan loader setelah data diterima
      statusElement.textContent = "Data fetched successfully!";
      loaderElement.style.display = "none";
  }, 2000); // Simulasi waktu tunggu 2 detik
}

// Memanggil fungsi dengan callback
fetchData((data) => {
  console.log("Data received:", data);

  // Tampilkan data di halaman
  const resultElement = document.getElementById("result");
  resultElement.style.display = "block";
  resultElement.textContent = `ID: ${data.id}, Name: ${data.name}`;
});
