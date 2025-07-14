const posts = [
  {
    title: "Gunung Tampomas",
    date: "14 Juli 2025",
    excerpt: "Pegunungan Tampomas salah satu gunung yang ada diSumedang...",
    content: `
    <p>Perjalanan pertama di Gunung Tampomas</p>

    <p>Gunung Tampomas adalah sebuah gunung berapi andesit yang terletak di Jawa Barat, tepatnya di sebelah utara kawasan perkotaan Sumedang (6.77°S 107.95°E). Stratovolkano dengan ketinggian 1684 meter di atas permukaan laut ini memiliki aliran lava aktif di sisi timur lerengnya.[1] Terdapat juga sumber air panas yang keluar di daerah sekitar kaki gunung. Gunung Tampomas termasuk dalam area Taman Wisata Alam Gunung Tampomas.</p>

    <h3>Letak Geografis</h3>
    <p>Gunung Tampomas berada di utara wilayah Kabupaten Sumedang. Secara administratif, kawasan Gunung Tampomas berada di lima kecamatan, yaitu Buahdua, Conggeang, Paseh, Cimalaka dan Tanjungkerta. Luas area TWA Gunung Tampomas adalah 1.250 hektar.[2]</p>
    <img src="images/puncak.jpg" alt="Pendaki Gunung Tampomas"/>
    <h3>Puncak Tampomas</h3>
    <p>Puncak Gunung Tampomas (penduduk setempat menyebutnya Sanghiyang Taraje) adalah sebuah lahan luas setinggi 1684 mdpl seluas 1 hektare yang berada di ujung paling atas Gunung Tampomas. Lokasi ini memiliki estetika tinggi karena dari tempat ini wisatawan dapat menikmati pemandangan indah ke arah Kota Sumedang dan sekitarnya. Adanya lubang-lubang kawah dan batu-batu besar berwarna hitam manambah kekayaan imajinasi bagi yang melihatnya.</p>

    <h3>Penutup</h3>
    <p>Terima kasih sudah mampir dan membaca! Saya harap kamu bisa mendapatkan inspirasi atau manfaat dari tulisan-tulisan di blog ini. Jangan ragu untuk eksplor artikel lainnya, dan semoga semangat belajar kita terus menyala!</p>

    <p><em>Salam Pendaki,<br>Andi</em></p>
  `,
    image: "images/Gunungtampomas.jpg",
    tags: ["Umum", "Explore"]
  },
  {
    title: "Belajar HTML & CSS",
    date: "13 Juli 2025",
    content: "HTML dan CSS adalah dasar dari website.",
    image: "https://picsum.photos/800/300?random=2",
    tags: ["HTML", "CSS", "Pemula"]
  },
  {
    title: "Belajar JavaScript Dasar",
    date: "12 Juli 2025",
    content: "Gunakan JavaScript untuk membuat situs interaktif.",
    image: "https://picsum.photos/800/300?random=3",
    tags: ["JavaScript", "Interaktif"]
  }
];

const container = document.getElementById("blog-posts");

if (container) {
  posts.forEach((post, index) => {
    const article = document.createElement("article");
    article.className = "post";

    // Tag HTML
    const tagHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");

    // Tombol hanya untuk postingan pertama
    const buttonHTML = index === 0
      ? `<button onclick="bukaDetail(${index})">Baca Selengkapnya</button>`
      : "";

    // Gabungkan isi postingan
    article.innerHTML = `
      <img src="${post.image}" alt="Gambar ${post.title}">
      <h2>${post.title}</h2>
      <p><em>${post.date}</em></p>
      <div class="tags">${tagHTML}</div>
      <p>${post.excerpt}</p>
      ${buttonHTML}
`;
    container.appendChild(article);
  });
}

// Fungsi untuk buka detail post
function bukaDetail(index) {
  localStorage.setItem("post-detail", JSON.stringify(posts[index]));
  window.location.href = "post.html";
}
