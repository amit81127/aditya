<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aditya Yadav - Portfolio</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Custom CSS -->
    <link rel="stylesheet" href="aditya.css">
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
      /* style.css */

/* Google Fonts - Inter is loaded in HTML, but good practice to note here too */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'); */

body {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
    background-color: #f8fafc; /* Light background */
    color: #334155; /* Dark text */
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #e2e8f0;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background: #60a5fa;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: #3b82f6;
}

/* Typing effect for Hero section */
.typing-text::after {
    content: '|';
    animation: blink-caret 0.75s infinite;
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #60a5fa; }
}

/* Project card hover effect */
.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Skill card hover effect */
.skill-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Section reveal animation */
.section-hidden {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Simple modal styles */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #ffffff;
    margin: auto;
    padding: 30px;
    border-radius: 15px;
    width: 90%;
    max-width: 700px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    position: relative;
    transform: scale(0.95);
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.modal.show .modal-content {
    transform: scale(1);
    opacity: 1;
}

.close-button {
    color: #aaa;
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;
}

.close-button:hover,
.close-button:focus {
    color: #60a5fa;
    text-decoration: none;
    cursor: pointer;
}
/* Contact Form Styling */
form[action="https://submit-form.com/0PaBDdHZU"] {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(60, 120, 255, 0.08);
  max-width: 500px;
  margin: 0 auto;
}

form[action="https://submit-form.com/0PaBDdHZU"] label {
  font-weight: 600;
  color: #2563eb;
  text-align: left;
  margin-bottom: 0.3rem;
}

form[action="https://submit-form.com/0PaBDdHZU"] input,
form[action="https://submit-form.com/0PaBDdHZU"] textarea {
  padding: 0.8rem 1rem;
  border: 2px solid #dbeafe;
  border-radius: 0.7rem;
  font-size: 1rem;
  background: #f1f5f9;
  transition: border-color 0.2s;
  outline: none;
}

form[action="https://submit-form.com/0PaBDdHZU"] input:focus,
form[action="https://submit-form.com/0PaBDdHZU"] textarea:focus {
  border-color: #2563eb;
  background: #fff;
}

form[action="https://submit-form.com/0PaBDdHZU"] button[type="submit"] {
  background: linear-gradient(90deg, #2563eb 60%, #9333ea 100%);
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 0;
  border: none;
  border-radius: 0.7rem;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(60, 120, 255, 0.12);
  transition: background 0.2s, transform 0.2s;
}

form[action="https://submit-form.com/0PaBDdHZU"] button[type="submit"]:hover {
  background: linear-gradient(90deg, #9333ea 60%, #2563eb 100%);
  transform: scale(1.04);
}
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <!-- Top Bar (Navigation) -->
    <header class="bg-white shadow-md fixed w-full z-50 py-4 px-6 md:px-10 rounded-b-xl">
        <nav class="container mx-auto flex justify-between items-center">
            <a href="#hero" class="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">Aditya Yadav</a>
            <div class="hidden md:flex space-x-8">
                <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300">About</a>
                <a href="#skills" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Skills</a>
                <a href="#projects" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Projects</a>
                <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</a>
            </div>
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </nav>
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 hidden flex-col items-center justify-center space-y-6 text-xl">
            <button id="close-mobile-menu" class="absolute top-6 right-8 text-gray-700 focus:outline-none">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300" onclick="hideMobileMenu()">About</a>
            <a href="#skills" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300" onclick="hideMobileMenu()">Skills</a>
            <a href="#projects" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300" onclick="hideMobileMenu()">Projects</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 font-medium transition duration-300" onclick="hideMobileMenu()">Contact</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center px-4 overflow-hidden">
        <div class="relative z-10">
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                Hi, I'm Aditya Yadav
            </h1>
            <p class="text-xl md:text-3xl font-light mb-8">
                A passionate <span id="typing-text" class="typing-text font-semibold text-yellow-300"></span>
            </p>
            <a href="#projects" class="inline-block bg-white text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                View My Work
            </a>
        </div>
        <!-- Background shapes for visual appeal -->
        <div class="absolute inset-0 z-0 opacity-20">
            <div class="absolute w-64 h-64 bg-white rounded-full -top-16 -left-16 blur-2xl"></div>
            <div class="absolute w-96 h-96 bg-blue-400 rounded-full -bottom-32 -right-32 blur-2xl"></div>
            <div class="absolute w-48 h-48 bg-purple-300 rounded-full top-1/4 right-1/4 blur-2xl"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6 md:px-10 bg-white section-hidden">
        <div class="container mx-auto max-w-4xl text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div class="flex flex-col md:flex-row items-center justify-center md:space-x-10">
    <div class="mb-6 md:mb-0 flex-shrink-0 flex justify-center items-center">
        <img src="https://i.ibb.co/NfwLZRB/Whats-App-Image-2025-08-01-at-11-17-02-b69a7625.jpg"
             alt="Aditya Yadav"
             class="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover shadow-xl border-4 border-blue-200 mx-auto transition-transform duration-300 hover:scale-105 hover:border-blue-400">
    </div>
    <div class="text-lg leading-relaxed text-gray-700 text-left md:max-w-xl animate-fadeIn">
        <p class="mb-4 hover:text-blue-600 transition-colors duration-300">
            Hello! I'm <span class="font-bold text-blue-700">Aditya Yadav</span>, currently pursuing my <span class="font-semibold">B.Tech in Computer Science and Engineering</span> from <span class="font-semibold">Axis Institute of Technology and Management</span>. My journey in technology is driven by a deep curiosity and a passion for building innovative solutions.
        </p>
        <p class="mb-4 hover:text-blue-600 transition-colors duration-300">
            I thrive on transforming complex ideas into functional and user-friendly applications. My academic background has equipped me with strong problem-solving skills and a solid understanding of core computer science principles.
        </p>
        <p class="hover:text-blue-600 transition-colors duration-300">
            I am always eager to learn new technologies and apply my knowledge to real-world challenges. Let's create something amazing together!
        </p>
    </div>
</div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6 md:px-10 bg-gray-100 section-hidden">
        <div class="container mx-auto max-w-5xl text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-12">My Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                <!-- Skill Card Template -->
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=HTML" alt="HTML Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">HTML</h3>
                </div>
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=CSS" alt="CSS Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">CSS</h3>
                </div>
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=JS" alt="JavaScript Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">JavaScript</h3>
                </div>
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=Java" alt="Java Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Java</h3>
                </div>
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=C++" alt="C++ Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">C++</h3>
                </div>
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=C" alt="C Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">C</h3>
                </div>
                <div class="skill-card bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50">
                    <img src="https://placehold.co/60x60/3b82f6/ffffff?text=Py" alt="Python Icon" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold text-gray-800">Python</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 md:px-10 bg-white section-hidden">
        <div class="container mx-auto max-w-6xl text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-12">My Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- Project Card 1 -->
                <div class="project-card bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:translate-y-[-5px] hover:shadow-xl cursor-pointer" data-project-id="1">
                    <img src="https://placehold.co/400x250/60a5fa/ffffff?text=Web+Dev+Project" alt="Project 1" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-3">Responsive Website Design</h3>
                    <p class="text-gray-600 mb-4">A fully responsive website built with HTML, CSS (Tailwind CSS), and JavaScript, demonstrating modern web design principles.</p>
                    <button class="view-project-btn bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">View Details</button>
                </div>
                <!-- Project Card 2 -->
                <div class="project-card bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:translate-y-[-5px] hover:shadow-xl cursor-pointer" data-project-id="2">
                    <img src="https://placehold.co/400x250/60a5fa/ffffff?text=Java+App" alt="Project 2" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-3">Java Desktop Application</h3>
                    <p class="text-gray-600 mb-4">A robust Java application featuring a clean GUI and efficient data handling, showcasing object-oriented programming concepts.</p>
                    <button class="view-project-btn bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">View Details</button>
                </div>
                <!-- Project Card 3 -->
                <div class="project-card bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:translate-y-[-5px] hover:shadow-xl cursor-pointer" data-project-id="3">
                    <img src="https://placehold.co/400x250/60a5fa/ffffff?text=Python+Script" alt="Project 3" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-3">Python Data Analysis Script</h3>
                    <p class="text-gray-600 mb-4">A Python script designed for data cleaning and analysis, utilizing libraries like Pandas and Matplotlib for insights.</p>
                    <button class="view-project-btn bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium">View Details</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Project Detail Modal -->
    <div id="project-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h3 id="modal-project-title" class="text-3xl font-bold text-gray-900 mb-4"></h3>
            <p id="modal-project-description" class="text-gray-700 text-lg mb-6"></p>
            <div id="modal-project-details" class="text-gray-600 text-base">
                <!-- Additional details will be inserted here -->
            </div>
        </div>
    </div>

    <!-- Contact Section (Form) -->
    <section id="contact" class="py-20 px-6 md:px-10 bg-gray-100 section-hidden">
        <div class="container mx-auto max-w-2xl text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-12">Get in Touch</h2>
           <form action="https://submit-form.com/0PaBDdHZU">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Name" required="" />
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email" required="" />
  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Message"
    required=""
  ></textarea>
  <button type="submit">Send</button>
</form>
            <div id="form-message" class="mt-6 p-4 rounded-lg text-white hidden"></div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 px-6 md:px-10 text-center rounded-t-xl">
        <div class="container mx-auto">
            <p>&copy; <span id="current-year"></span> Aditya Yadav. All rights reserved.</p>
            <div class="flex justify-center space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/aditya-yadav-742913336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " class="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
                <a href="https://github.com/AdityaYadav0007" class="text-gray-400 hover:text-white transition duration-300">GitHub</a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">Twitter</a>
            </div>
        </div>
    </footer>

    <!-- Custom JavaScript -->
    <script>
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

    </script>
</body>
</html>
