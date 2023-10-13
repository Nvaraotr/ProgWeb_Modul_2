document
  .getElementById("jumlahkanButton")
  .addEventListener("click", function () {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var hasil = num1 + num2;

    alert("Hasil Penjumlahan = " + hasil);
  });

document.getElementById("ulangButton").addEventListener("click", function () {
  var num1Input = document.getElementById("num1");
  var num2Input = document.getElementById("num2");

  num1Input.value = "";
  num2Input.value = "";

  num1Input.focus();
});
