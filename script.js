let isEditor = false;

let divisi = [
  {
    nama: "YN Transport",
    gambar: "https://via.placeholder.com/800x300",
    tagline: "Mobilitas Tanpa Batas",
    deskripsi: "Layanan transportasi darat profesional."
  }
];

/* MENU */
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function hideAll() {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
}

function showLayanan() {
  hideAll();
  document.getElementById("layanan").classList.remove("hidden");
  renderDivisi();
  closeMenu();
}

function showTentang() {
  hideAll();
  document.getElementById("tentang").classList.remove("hidden");
  closeMenu();
}

function showHubungi() {
  hideAll();
  document.getElementById("hubungi").classList.remove("hidden");
  closeMenu();
}

/* DIVISI */
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
      ${isEditor ? `<input type="file" onchange="uploadImage(event, ${index})">` : ""}
      <h2>${d.nama}</h2>
      ${isEditor ? `<input value="${d.tagline}" onchange="editTagline(this.value, ${index})">` : `<h3>${d.tagline}</h3>`}
      ${isEditor ? `<textarea onchange="editDesc(this.value, ${index})">${d.deskripsi}</textarea>` : `<p>${d.deskripsi}</p>`}
    </div>
  `;
}

/* EDITOR */
function editorLogin() {
  let pass = prompt("Password Editor:");
  if (pass === "editor123") {
    isEditor = true;
    alert("Login Editor Berhasil");
  }
}

function uploadImage(event, index) {
  const reader = new FileReader();
  reader.onload = e => {
    divisi[index].gambar = e.target.result;
    showDetail(index);
  };
  reader.readAsDataURL(event.target.files[0]);
}

function editTagline(val, index) {
  divisi[index].tagline = val;
}

function editDesc(val, index) {
  divisi[index].deskripsi = val;
}

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* LOGO EDIT */
document.getElementById("mainLogo").addEventListener("click", function() {
  if (isEditor) {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = function(e) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        document.getElementById("mainLogo").src = ev.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    };
    input.click();
  }
});
