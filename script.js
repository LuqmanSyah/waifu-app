// Fungsi untuk mengambil gambar dari API Waifu Pics
async function getWaifuImage() {
  try {
    const response = await fetch("https://api.waifu.pics/nsfw/blowjob");
    const data = await response.json();
    const imageUrl = data.url;

    // Buat elemen img dan atur src-nya
    const img = document.createElement("img");
    img.src = imageUrl;

    // Tambahkan elemen img ke dalam dokumen (misalnya, ke dalam div dengan id "waifu-image")
    const waifuImageDiv = document.getElementById("waifu-image");
    waifuImageDiv.appendChild(img);
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil gambar:", error);
  }
}

// Panggil fungsi untuk mendapatkan gambar saat halaman dimuat
window.onload = getWaifuImage;
