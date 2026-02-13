document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const themeToggle = document.getElementById('theme-toggle-btn');

if (localStorage.getItem('selected-theme') === 'dark-mode') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('selected-theme', 'dark-mode');
    } else {
        localStorage.setItem('selected-theme', 'light-mode');
    }
});

const contactForm = document.getElementById('Kontak');
const hasilPesan = document.getElementById('hasil-pesan');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const Nama = contactForm.querySelector('input[type="text"]').value;
    const Pesan = contactForm.querySelector('textarea').value;
    

    hasilPesan.innerHTML = `<p>Terima kasih, ${Nama}! Pesan Anda telah diterima.</p>
                            <p>Pesan: ${Pesan}</p>`;
    contactForm.reset();
});