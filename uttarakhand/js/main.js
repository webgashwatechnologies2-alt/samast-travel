document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('enquiryModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const body = document.body;

    // Function to open modal
    const openModal = () => {
        modal.classList.add('active');
        body.classList.add('modal-open');
    };

    // Function to close modal
    const closeModal = () => {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
    };

    // Open modal after 1 second
    setTimeout(openModal, 1000);

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navInfo = document.getElementById('navInfo');

    if (menuToggle && navInfo) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navInfo.classList.toggle('active');
            
            // Toggle Icon
            const icon = menuToggle.querySelector('i');
            if(navInfo.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu on click outside
        document.addEventListener('click', (e) => {
            if (!navInfo.contains(e.target) && !menuToggle.contains(e.target)) {
                navInfo.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    const openTriggers = document.querySelectorAll('.open-modal-trigger');
    openTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close on click outside content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Form Handling
    const enquiryForm = document.querySelector('.enquiry-body form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            console.log('Enquiry form submitted');
        });
    }

    // Hero element animations (keeping existing ones if relevant)
    const animElements = document.querySelectorAll('.welcome-box, .location-bar, .price-guarantee, .hero-cta');
    animElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Itinerary Toggle Logic
    const itineraryBtns = document.querySelectorAll('.view-itinerary-btn');
    itineraryBtns.forEach(btn => {
        btn.onclick = () => {
            const list = btn.previousElementSibling;
            if (list && list.tagName === 'UL') {
                const isExpanded = list.classList.toggle('expanded');
                btn.classList.toggle('active');
                
                // Toggle text
                if (isExpanded) {
                    btn.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
                } else {
                    btn.innerHTML = 'View Full Itinerary <i class="fa-solid fa-chevron-down"></i>';
                }
            }
        };
    });
});
