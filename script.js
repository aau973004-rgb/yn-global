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
    deskripsi: "Solusi logistik modern dan terpercaya.",
    layanan: 89000,
    jarak: 1200000,
    kontak: "logistic@ynglobal.com"
  }
];

function toggleLayanan() {
  document.getElementById("layanan").classList.toggle("hidden");
  renderDivisi();
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
  const d = divisi[index];
  const detail = document.getElementById("detail-divisi");
  detail.classList.remove("hidden");

  detail.innerHTML = `
    <div class="detail-box">
      <img src="${d.gambar}">
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
