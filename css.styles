// ========================================
// DTEF Website - JavaScript
// ========================================

// ========================================
// Form Validation
// ========================================

// Application Form Validation
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!this.checkValidity() === false) {
            event.stopPropagation();
        }
        
        this.classList.add('was-validated');
        
        // If form is valid, show success message
        if (this.checkValidity() === false) {
            console.log('Form has validation errors');
        } else {
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                // Reset form after 2 seconds
                setTimeout(() => {
                    this.reset();
                    this.classList.remove('was-validated');
                    successMessage.classList.add('d-none');
                }, 2000);
            }
        }
    }, false);
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!this.checkValidity() === false) {
            event.stopPropagation();
        }
        
        this.classList.add('was-validated');
        
        if (this.checkValidity() === false) {
            console.log('Form has validation errors');
        } else {
            const successMessage = document.getElementById('contactSuccess');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                setTimeout(() => {
                    this.reset();
                    this.classList.remove('was-validated');
                    successMessage.classList.add('d-none');
                }, 3000);
            }
        }
    }, false);
}

// Applicant Login Form Validation
const applicantLoginForm = document.getElementById('applicantLoginForm');
if (applicantLoginForm) {
    applicantLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!this.checkValidity() === false) {
            event.stopPropagation();
        }
        
        this.classList.add('was-validated');
        
        if (this.checkValidity() === false) {
            console.log('Form has validation errors');
        } else {
            const successMessage = document.getElementById('loginSuccess');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                setTimeout(() => {
                    // Redirect to dashboard
                    window.location.href = 'dashboard.html';
                }, 1500);
            }
        }
    }, false);
}

// Admin Login Form Validation
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!this.checkValidity() === false) {
            event.stopPropagation();
        }
        
        this.classList.add('was-validated');
        
        if (this.checkValidity() === false) {
            console.log('Form has validation errors');
        } else {
            const successMessage = document.getElementById('loginSuccess');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                setTimeout(() => {
                    // Redirect to admin dashboard
                    alert('Admin login successful! Redirecting to admin dashboard...');
                    // window.location.href = 'admin/dashboard.html';
                }, 1500);
            }
        }
    }, false);
}

// ========================================
// FAQ Search Functionality
// ========================================

const faqSearch = document.getElementById('faqSearch');
if (faqSearch) {
    faqSearch.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const buttonText = item.querySelector('.accordion-button').textContent.toLowerCase();
            const bodyText = item.querySelector('.accordion-body').textContent.toLowerCase();
            
            if (buttonText.includes(searchTerm) || bodyText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Scroll Animation
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards, mission cards, etc.
document.querySelectorAll('.feature-card, .mission-card, .value-card, .program-card, .quick-access-card').forEach(el => {
    observer.observe(el);
});

// ========================================
// Active Navigation Link
// ========================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ========================================
// File Upload Preview
// ========================================

const fileInputs = document.querySelectorAll('input[type="file"]');
fileInputs.forEach(input => {
    input.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const fileName = file.name;
            const fileSize = (file.size / 1024).toFixed(2); // Convert to KB
            
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                this.setCustomValidity('File size must not exceed 5MB');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
            
            // Show file info
            console.log(`File: ${fileName}, Size: ${fileSize}KB`);
        }
    });
});

// ========================================
// Email Validation
// ========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// Phone Number Formatting
// ========================================

const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove non-numeric characters
        let value = this.value.replace(/\D/g, '');
        
        // Format as phone number
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + ' ' + value.slice(3);
            } else {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
            }
        }
        
        this.value = value;
    });
});

// ========================================
// Date Validation
// ========================================

const dateInputs = document.querySelectorAll('input[type="date"]');
dateInputs.forEach(input => {
    input.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const today = new Date();
        
        // For birth date, ensure person is at least 16 years old
        if (this.id === 'dateOfBirth') {
            const age = today.getFullYear() - selectedDate.getFullYear();
            const monthDiff = today.getMonth() - selectedDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
                age--;
            }
            
            if (age < 16) {
                this.setCustomValidity('You must be at least 16 years old');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }
        }
        
        // For start date, ensure it's in the future
        if (this.id === 'startDate') {
            if (selectedDate < today) {
                this.setCustomValidity('Start date must be in the future');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }
        }
    });
});

// ========================================
// Dropdown Menu Functionality
// ========================================

const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = this.nextElementSibling;
        if (menu && menu.classList.contains('dropdown-menu')) {
            menu.classList.toggle('show');
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// ========================================
// Notification System
// ========================================

function showNotification(message, type = 'info', duration = 3000) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, duration);
}

// ========================================
// Local Storage for Form Data
// ========================================

// Save form data to local storage
function saveFormData(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        localStorage.setItem(`form_${formId}`, JSON.stringify(data));
    }
}

// Load form data from local storage
function loadFormData(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const savedData = localStorage.getItem(`form_${formId}`);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const field = form.elements[key];
                if (field) {
                    field.value = data[key];
                }
            });
        }
    }
}

// Auto-save form data on input
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('input', function() {
        saveFormData(this.id);
    });
});

// Load form data on page load
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form[id]');
    forms.forEach(form => {
        loadFormData(form.id);
    });
});

// ========================================
// Print Functionality
// ========================================

function printPage() {
    window.print();
}

// ========================================
// Accessibility Enhancements
// ========================================

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
    }
    
    // Tab key for form navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

// Remove keyboard-nav class on mouse click
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ========================================
// Performance Optimization
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Error Handling
// ========================================

window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
    // You can send error logs to a server here
});

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DTEF Website loaded successfully');
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});

// ========================================
// Export Functions for External Use
// ========================================

window.DTEF = {
    showNotification: showNotification,
    validateEmail: validateEmail,
    saveFormData: saveFormData,
    loadFormData: loadFormData,
    printPage: printPage
};
