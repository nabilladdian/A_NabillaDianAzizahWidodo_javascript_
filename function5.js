const sayHello = (name = 'person') => `Hello ${name}!`;

// Contoh pemanggilan fungsi
console.log(sayHello("Hagrid")); // Output: "Hello Hagrid!"
console.log(sayHello("Luna"));   // Output: "Hello Luna!"
console.log(sayHello("nabilladian"));         // Output: "Hello World!"

// Menampilkan hasil di dalam halaman HTML
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
  <p>${sayHello("Hagrid")}</p>
  <p>${sayHello("Luna")}</p>
  <p>${sayHello()}</p>
`;