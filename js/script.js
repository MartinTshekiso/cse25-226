

// Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeFormValidation();
    initializeAnimations();
    initializeGallery();
    initializeCarousel();
    setActiveNavLink();
});

// Form Validation
// Initialize Bootstrap form validation
// Prevents form submission if form is invalid
function initializeFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

// Scroll Animations
// Add fade-in animations to elements when they scroll into view
// Improves visual appeal and user engagement
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.card, .dog-card, .service-card, .testimonial-card, .process-step').forEach(el => {
        observer.observe(el);
    });
}

// Gallery Lightbox
// Initialize gallery with lightbox/modal functionality
// Clicking an image opens it in a fullscreen modal
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create modal container if it doesn't exist
    if (!document.querySelector('#galleryModal')) {
        createGalleryModal();
    }
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openGalleryModal(this, index, galleryItems.length);
        });
    });
}

// Create gallery modal HTML structure
function createGalleryModal() {
    const modalHTML = `
        <div id="galleryModal" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content bg-light border-0 rounded-custom">
                    <div class="modal-body p-0">
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"></button>
                        <img id="modalImage" src="" alt="Gallery Image" class="w-100 rounded-custom">
                        <div class="text-center p-3">
                            <small id="imageCounter" class="text-muted"></small>
                        </div>
                    </div>
                    <div class="modal-footer border-0 justify-content-center gap-2">
                        <button id="prevImage" class="btn btn-outline-primary btn-sm">← Previous</button>
                        <button id="nextImage" class="btn btn-outline-primary btn-sm">Next →</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Open gallery modal and display image
function openGalleryModal(item, index, total) {
    const img = item.querySelector('img');
    const modal = document.querySelector('#galleryModal');
    const modalImage = document.querySelector('#modalImage');
    const imageCounter = document.querySelector('#imageCounter');
    
    modalImage.src = img.src;
    imageCounter.textContent = `Image ${index + 1} of ${total}`;
    
    // Setup navigation buttons
    document.querySelector('#prevImage').onclick = () => {
        if (index > 0) {
            const prevItem = document.querySelectorAll('.gallery-item')[index - 1];
            openGalleryModal(prevItem, index - 1, total);
        }
    };
    
    document.querySelector('#nextImage').onclick = () => {
        if (index < total - 1) {
            const nextItem = document.querySelectorAll('.gallery-item')[index + 1];
            openGalleryModal(nextItem, index + 1, total);
        }
    };
    
    // Show modal using Bootstrap
    const bsModal = bootstrap.Modal.getOrCreateInstance(modal);
    bsModal.show();
}

// Carousel Auto-play
// Initialize carousel auto-play functionality
// Carousels will automatically rotate through slides
function initializeCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        // Auto-play with 5-second interval
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true,
            pause: 'hover'
        });
        
        // Add keyboard controls hint
        carousel.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                bsCarousel.prev();
            } else if (e.key === 'ArrowRight') {
                bsCarousel.next();
            }
        });
    });
}

// Navigation Active Link
// Set active navigation link based on current page
// Highlights the current page in the navigation bar
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Get the href attribute
        let href = link.getAttribute('href');
        
        // Compare with current page
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Adoption Form Handler
// Handle adoption form submission
// Validates form and shows success message
function handleAdoptionSubmit(event) {
    const form = event.target;
    
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        // Show success message (in real app, this would send data to server)
        event.preventDefault();
        showSuccessMessage('Thank you for your adoption request! We will contact you soon.');
        form.reset();
        form.classList.remove('was-validated');
    }
    
    form.classList.add('was-validated');
}

// Contact Form Handler
// Handle contact form submission
// Validates form and shows success message
function handleContactSubmit(event) {
    const form = event.target;
    
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        // Show success message (in real app, this would send data to server)
        event.preventDefault();
        showSuccessMessage('Thank you for contacting PawConnect Botswana! We will get back to you soon.');
        form.reset();
        form.classList.remove('was-validated');
    }
    
    form.classList.add('was-validated');
}

// Success Message Display
// Display a success message at the top of the page
// Auto-dismisses after 5 seconds
function showSuccessMessage(message) {
    // Create alert container
    const alertHTML = `
        <div class="alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3" 
             role="alert" style="z-index: 9999; width: 90%; max-width: 500px;">
            <strong>Success!</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    // Insert alert
    document.body.insertAdjacentHTML('afterbegin', alertHTML);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        const alert = document.querySelector('.alert-success');
        if (alert) {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }
    }, 5000);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Image Preloading
// Preload images for gallery and carousel
// Improves performance and user experience
function preloadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        const src = img.getAttribute('data-src');
        const newImg = new Image();
        newImg.onload = function() {
            img.src = src;
            img.removeAttribute('data-src');
        };
        newImg.src = src;
    });
}


function initializeTestimonialRotation() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length <= 1) return;
    
    let currentIndex = 0;
    
    setInterval(() => {
        // Hide all testimonials
        testimonials.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        });
        
        // Show current testimonial with animation
        testimonials[currentIndex].style.display = 'block';
        testimonials[currentIndex].classList.add('fade-in');
        
        // Move to next testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;
    }, 6000);
    
    // Show first testimonial
    if (testimonials[0]) {
        testimonials[0].style.display = 'block';
    }
}

// Mobile Menu Collapse
// Close mobile menu when a link is clicked
// Improves mobile user experience
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            }).hide();
        }
    });
});

// Back to Top Button

function initializeBackToTop() {
    const backToTopBtn = document.querySelector('#backToTopBtn');
    if (!backToTopBtn) {
        // Create button if it doesn't exist
        const btnHTML = `
            <button id="backToTopBtn" class="btn btn-primary rounded-circle position-fixed bottom-0 end-0 mb-4 me-4" 
                    style="width: 50px; height: 50px; display: none; z-index: 100;" title="Back to Top">
                ↑
            </button>
        `;
        document.body.insertAdjacentHTML('beforeend', btnHTML);
    }
    
    const button = document.querySelector('#backToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize back to top button on page load
initializeBackToTop();
