// popup form =======>
const overlay = document.getElementById('enquiryOverlay');
const closeBtn = document.getElementById('closeModal');
const titleEl = document.getElementById('modalPackageName');
const subtitleEl = document.getElementById('modalDuration');
const inputEl = document.getElementById('modalPackageInput');

// Open modal on any Enquire button
document.querySelectorAll('.open-quote-modal').forEach(btn => {
    btn.addEventListener('click', function () {
        const pkgName = this.dataset.package || 'CharDham Tour Packages';
        const duration = this.dataset.duration || '';
        titleEl.textContent = pkgName;
        subtitleEl.textContent = duration ? '📅 ' + duration : '';
        inputEl.value = pkgName;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close on X button
closeBtn.addEventListener('click', closeModal);

// Close on overlay backdrop click
overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// testimonial slider ======= >
const track = document.querySelector(".review-track");

track.innerHTML += track.innerHTML;

let position = 0;
const speed = 0.5;

function verticalSlider() {

    position += speed;

    if (position >= track.scrollHeight / 1) {
        position = 0;
    }

    track.style.transform = `translateY(-${position}px)`;

    requestAnimationFrame(verticalSlider);

}

verticalSlider();
