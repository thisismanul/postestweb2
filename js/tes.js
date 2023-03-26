const tombol = document.getElementById("masuk"); 
tombol.onclick = masuk; 
 
function masuk(e) { 
  e.preventDefault();
  var simpan_nama = localStorage.getItem('daf_username');
  var simpan_pass = localStorage.getItem('daf_pass');
  var namaku = localStorage.getItem('daf_nama');
  const nama = document.getElementById("login_user").value; 
  const passw = document.getElementById("login_password").value;  
 
  if (nama.value == simpan_nama && passw.value == simpan_pass) { 
    alert(`Hello Selamat Datang`);
    window.location.href = "index.html"; 
  } else { 
    alert("Login failed"); 
  } 
}