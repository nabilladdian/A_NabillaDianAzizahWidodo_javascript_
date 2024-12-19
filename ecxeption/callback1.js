// Fungsi untuk menampilkan pesan di browser
function myDisplayer(message) {
    // Menampilkan pesan di console
    console.log(message);
    // Menampilkan pesan di alert
    alert(message);
}

// Fungsi yang pertama
function myFirst() {
    myDisplayer("Goodbye");
}

// Fungsi yang kedua dengan callback
function mySecond(callback) {
    myDisplayer("Hello");
    callback(); // Memanggil callback (myFirst)
}

// Memanggil mySecond dengan myFirst sebagai callback
mySecond(myFirst);
