const container = document.getElementById("detail-post");
const post = JSON.parse(localStorage.getItem("post-detail"));

if (post) {
  const tagHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");

  container.innerHTML = `
    <article class="post">
      <img src="${post.image}" alt="Gambar ${post.title}">
      <h2>${post.title}</h2>
      <p><em>${post.date}</em></p>
      <div class="tags">${tagHTML}</div>
      <p>${post.content}</p>
      <a href="index.html" class="back-link">← Kembali ke Daftar</a>
    </article>
  `;
} else {
  container.innerHTML = "<p>Postingan tidak ditemukan.</p>";
}
