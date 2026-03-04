let isAdmin = false;

let divisi = [
  {
    nama: "YN Transport",
    gambar: "https://via.placeholder.com/800x300",
    tagline: "Mobilitas Tanpa Batas",
    deskripsi: "Layanan transportasi darat profesional.",
    layanan: 120,
    jarak: 450000,
    kontak: "transport@ynglobal.com"
  },
  {
    nama: "YN Logistic",
    gambar: "https://via.placeholder.com/800x300",
    tagline: "Distribusi Cepat & Aman",
    deskripsi: "Solusi logistik modern.",
    layanan: 89000,
    jarak: 1200000,
    kontak: "logistic@ynglobal.com"
  }
];

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

function toggleLayanan() {
  hideAll();
  document.getElementById("layanan").classList.remove("hidden");
  renderDivisi();
}

function showTentang() {
  hideAll();
  document.getElementById("tentang").classList.remove("hidden");
}

function showHubungi() {
  hideAll();
  document.getElementById("hubungi").classList.remove("hidden");
}

function hideAll() {
  document.getElementById("layanan").classList.add("hidden");
  document.getElementById("detail-divisi").classList.add("hidden");
  document.getElementById("tentang").classList.add("hidden");
  document.getElementById("hubungi").classList.add("hidden");
}

function renderDivisi() {
  const list = document.getElementById("divisi-list");
  list.innerHTML = "";

  divisi.forEach((d, index) => {
    list.innerHTML += `
      <div class="divisi-card" onclick="showDetail(${index})">
        <h3>${d.nama}</h3>
        <p>${d.tagline}</p>
      </div>
    `;
  });
}

function showDetail(index) {
  hideAll();
  const d = divisi[index];
  const detail = document.getElementById("detail-divisi");
  detail.classList.remove("hidden");

  detail.innerHTML = `
    <div class="detail-box">
      <img src="${d.gambar}">
      ${isAdmin ? `<input type="file" onchange="uploadImage(event, ${index})">` : ""}
      <h2>${d.nama}</h2>
      <h3>${d.tagline}</h3>
      <p>${d.deskripsi}</p>

      <h4>Data Operasional</h4>
      <p>Total Layanan: ${d.layanan}</p>
      <p>Total Jarak: ${d.jarak} KM</p>

      ${isAdmin ? `<button onclick="tambahData(${index})">Tambah Data</button>` : ""}

      <h4>Hubungi Kami</h4>
      <p>${d.kontak}</p>
    </div>
  `;
}

function tambahData(index) {
  divisi[index].layanan += 100;
  divisi[index].jarak += 1000;
  showDetail(index);
}

function uploadImage(event, index) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    divisi[index].gambar = e.target.result;
    showDetail(index);
  };
  reader.readAsDataURL(file);
}

function adminLogin() {
  let pass = prompt("Masukkan password admin:");
  if (pass === "admin123") {
    isAdmin = true;
    alert("Login Admin Berhasil");
  } else {
    alert("Password salah");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
