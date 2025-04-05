// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            document.querySelector('.hidden.md\\:flex').classList.toggle('hidden');
            document.querySelector('.hidden.md\\:flex').classList.toggle('block');
        });
    }

    // Product quantity controls
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (this.classList.contains('decrease')) {
                value = value > 1 ? value - 1 : 1;
            } else {
                value = value + 1;
            }
            
            input.value = value;
        });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            let isValid = true;

            if (!name.value.trim()) {
                name.classList.add('border-red-500');
                isValid = false;
            } else {
                name.classList.remove('border-red-500');
            }

            if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
                email.classList.add('border-red-500');
                isValid = false;
            } else {
                email.classList.remove('border-red-500');
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});