// DATA DIVISI (BISA DITAMBAH TERUS)
let divisi = [
  {
    nama: "YN Transport",
    layanan: 120,
    jarak: 450000,
  },
  {
    nama: "YN Logistic",
    layanan: 89000,
    jarak: 1200000,
  },
  {
    nama: "YN Airline",
    layanan: 15000,
    jarak: 980000,
  },
  {
    nama: "YN of The Seas",
    layanan: 5000,
    jarak: 300000,
  }
];

const container = document.getElementById("divisi-container");

function renderDivisi() {
  container.innerHTML = "";

  divisi.forEach((d, index) => {
    const card = document.createElement("div");
    card.classList.add("divisi-card");

    card.innerHTML = `
      <h3>${d.nama}</h3>
      <p>Jumlah Layanan: ${d.layanan}</p>
      <p>Total Jarak Tempuh: ${d.jarak} KM</p>
      <button onclick="tambahData(${index})">Tambah Data</button>
    `;

    container.appendChild(card);
  });
}

function tambahData(index) {
  divisi[index].layanan += 100;
  divisi[index].jarak += 1000;
  renderDivisi();
}

renderDivisi();