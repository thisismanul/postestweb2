const tombol = document.getElementById("daftar");
tombol.onclick = daftar;

function daftar(e){
    e.preventDefault();
    let nama = document.getElementById("daf_nama").value;
    let email = document.getElementById("daf_username").value;
    let pass = document.getElementById("daf_pass").value;

    localStorage.setItem("Nama", nama);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);

    alert("Berhasil Daftar")
    window.location.href = "login.html";
}