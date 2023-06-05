const textCarousel = document.querySelector('.text-carousel');
const texts = ['Beda Jurusan', 'Pindah Jalur Karir', 'Baru Lulus Kuliah','Kurang Pengalaman','Budget Pas Pas','Gak Punya Privilege']; // Ganti dengan teks yang Anda inginkan

let index = 0;

function changeText() {
  textCarousel.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2000); // Ganti teks setiap 2 detik (2000 milidetik)