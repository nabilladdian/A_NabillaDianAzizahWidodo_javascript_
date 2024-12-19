function divideNumbers() {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultElement = document.getElementById("result");
  
    try {
      // Cek apakah input adalah angka
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Input harus berupa angka.");
      }
  
      // Konversi input menjadi angka
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      // Cek apakah pembagi adalah nol
      if (number2 === 0) {
        throw new Error("Tidak dapat membagi dengan nol.");
      }
  
      // Lakukan pembagian
      const result = number1 / number2;
      resultElement.textContent = `Hasil: ${result.toFixed(2)}`;
    } catch (error) {
      // Tampilkan pesan kesalahan
      resultElement.textContent = `Error: ${error.message}`;
    }
  }