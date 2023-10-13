function validateForm() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama === "" || email === "" || alamat === "") {
    alert("Harap Isi Data Anda dengan Lengkap");
    return false;
  } else {
    alert("Data Anda Akan Saya Gunakan dengan Bijak (Optional)");
  }

  return true;
}
