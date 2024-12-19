function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a * b;
  }
  
  // Contoh pemanggilan fungsi
  console.log(multiply(2, 3)); // 6
  console.log(multiply(9, 9)); // 81
  console.log(multiply(5, 4)); // 20
  
  // Menampilkan hasil di dalam halaman HTML
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>multiply(2, 3) = ${multiply(2, 3)}</p>
    <p>multiply(9, 9) = ${multiply(9, 9)}</p>
    <p>multiply(5, 4) = ${multiply(5, 4)}</p>
  `;