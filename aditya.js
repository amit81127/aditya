// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for Hero section
    const typingTextElement = document.getElementById('typing-text');
    const phrases = ["Developer", "Programmer", "Innovator", "Problem Solver"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        let displayText = '';

        if (isDeleting) {
            displayText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        typingTextElement.textContent = displayText;

        let typingSpeed = 100; // Speed of typing
        if (isDeleting) {
            typingSpeed /= 2; // Faster deleting
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1500; // Pause at end of phrase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect(); // Start the typing effect

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    });

    closeMobileMenuButton.addEventListener('click', () => {
        hideMobileMenu();
    });

    // Function to hide mobile menu (used by links too)
    window.hideMobileMenu = function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Section reveal on scroll (Intersection Observer)
    const sections = document.querySelectorAll('.section-hidden');
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1 // 10% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                entry.target.classList.remove('section-hidden');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Project Modal Logic
    const projectModal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.modal .close-button');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDescription = document.getElementById('modal-project-description');
    const modalDetails = document.getElementById('modal-project-details');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');

    // Sample project data (you would replace this with your actual project details)
    const projectDetails = {
        1: {
            title: "Responsive Website Design",
            description: "This project involved creating a fully responsive website from scratch, ensuring optimal viewing and interaction across various devices (desktops, tablets, and mobile phones). It showcases modern HTML5 structure, semantic CSS3 styling, and basic JavaScript for interactive elements.",
            details: `
                <p class="mb-2"><strong>Technologies Used:</strong> HTML5, CSS3 (Tailwind CSS), JavaScript.</p>
                <p class="mb-2"><strong>Key Features:</strong> Responsive navigation, image galleries, contact form validation, smooth scrolling, and dynamic content loading.</p>
                <p><strong>Challenges & Solutions:</strong> Faced challenges with cross-browser compatibility and optimizing images for performance. Resolved by using browser-agnostic CSS properties and implementing lazy loading for images.</p>
                <p class="mt-4"><a href="#" target="_blank" class="text-blue-600 hover:underline">View Live Demo</a> | <a href="#" target="_blank" class="text-blue-600 hover:underline">GitHub Repo</a></p>
            `
        },
        2: {
            title: "Java Desktop Application",
            description: "Developed a desktop application using Java Swing for a simple inventory management system. This application allows users to add, view, update, and delete product records, demonstrating strong understanding of GUI development and data persistence.",
            details: `
                <p class="mb-2"><strong>Technologies Used:</strong> Java, Java Swing, JDBC (for database connectivity, e.g., SQLite).</p>
                <p class="mb-2"><strong>Key Features:</strong> User-friendly graphical interface, CRUD operations for inventory items, basic search functionality, and error handling.</p>
                <p><strong>Challenges & Solutions:</strong> Managing state within the Swing application and ensuring data integrity. Implemented MVC (Model-View-Controller) pattern for better separation of concerns and robust error handling mechanisms.</p>
                <p class="mt-4"><a href="#" target="_blank" class="text-blue-600 hover:underline">View Demo (Video/Screenshots)</a> | <a href="#" target="_blank" class="text-blue-600 hover:underline">GitHub Repo</a></p>
            `
        },
        3: {
            title: "Python Data Analysis Script",
            description: "A Python script designed to automate the process of cleaning, transforming, and analyzing a given dataset. It generates insightful visualizations and summary statistics, useful for quick data exploration.",
            details: `
                <p class="mb-2"><strong>Technologies Used:</strong> Python, Pandas, Matplotlib, NumPy.</p>
                <p class="mb-2"><strong>Key Features:</strong> Data loading from CSV/Excel, handling missing values, outlier detection, statistical summaries, and generating various plots (histograms, scatter plots, box plots).</p>
                <p><strong>Challenges & Solutions:</strong> Optimizing performance for large datasets and choosing appropriate visualizations. Utilized vectorized operations in Pandas and carefully selected plot types to convey information effectively.</p>
                <p class="mt-4"><a href="#" target="_blank" class="text-blue-600 hover:underline">View Notebook/Code</a> | <a href="#" target="_blank" class="text-blue-600 hover:underline">GitHub Repo</a></p>
            `
        }
    };

    viewProjectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.closest('.project-card').dataset.projectId;
            const project = projectDetails[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modalDetails.innerHTML = project.details; // Use innerHTML for rich text
                projectModal.classList.add('flex', 'show'); // Show with flex and 'show' class for animation
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.classList.remove('show');
        setTimeout(() => {
            projectModal.classList.remove('flex'); // Hide after animation
        }, 300); // Match transition duration
    });

    // Close modal if clicked outside content
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove('show');
            setTimeout(() => {
                projectModal.classList.remove('flex');
            }, 300);
        }
    });

    // Form Validation and Submission
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Reset errors
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');
        formMessage.classList.add('hidden');

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.classList.remove('hidden');
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            messageError.classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            console.log('Form Submitted:', {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            });

            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.classList.remove('hidden');
            formMessage.classList.add('bg-green-500');
            formMessage.classList.remove('bg-red-500');
            contactForm.reset(); // Clear the form

            // Hide message after a few seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);

        } else {
            formMessage.textContent = 'Please correct the errors in the form.';
            formMessage.classList.remove('hidden');
            formMessage.classList.add('bg-red-500');
            formMessage.classList.remove('bg-green-500');
        }
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
