document.addEventListener("DOMContentLoaded", function () {

    // Tombol Hero
    const heroBtn = document.getElementById("heroBtn");
    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            alert("Terima kasih! Kami akan segera menghubungi Anda 🚀");
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Form validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Semua field wajib diisi!");
                return;
            }

            alert("Pesan berhasil dikirim ✔️");
            form.reset();
        });
    }

});
