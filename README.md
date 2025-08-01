<!-- Save this as index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Aditya Yadav - Portfolio</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Font - Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet"/>

  <style>
    body {
      font-family: 'Inter', sans-serif;
      scroll-behavior: smooth;
      background-color: #f8fafc;
      color: #334155;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #e2e8f0;
    }
    ::-webkit-scrollbar-thumb {
      background: #60a5fa;
    }

    .typing-text::after {
      content: '|';
      animation: blink-caret 0.75s infinite;
    }

    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #60a5fa; }
    }

    .section-hidden {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .section-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.6);
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 15px;
      max-width: 700px;
      width: 90%;
      transform: scale(0.95);
      opacity: 0;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    }

    .modal.show .modal-content {
      transform: scale(1);
      opacity: 1;
    }

    .close-button {
      position: absolute;
      top: 15px;
      right: 25px;
      font-size: 30px;
      cursor: pointer;
      color: #aaa;
    }

    .close-button:hover {
      color: #60a5fa;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: #fff;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 24px rgba(60, 120, 255, 0.08);
    }

    form input,
    form textarea {
      padding: 0.8rem 1rem;
      border: 2px solid #dbeafe;
      border-radius: 0.7rem;
      background: #f1f5f9;
    }

    form input:focus,
    form textarea:focus {
      border-color: #2563eb;
      background: #fff;
      outline: none;
    }

    form button {
      background: linear-gradient(90deg, #2563eb 60%, #9333ea 100%);
      color: white;
      font-weight: 700;
      padding: 0.9rem;
      border-radius: 0.7rem;
      cursor: pointer;
    }

    form button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow-md fixed top-0 w-full z-50 py-4 px-6 md:px-10 rounded-b-xl">
    <nav class="container mx-auto flex justify-between items-center">
      <a href="#hero" class="text-2xl font-bold text-blue-600">Aditya Yadav</a>
      <div class="hidden md:flex gap-6">
        <a href="#about" class="hover:text-blue-500">About</a>
        <a href="#skills" class="hover:text-blue-500">Skills</a>
        <a href="#projects" class="hover:text-blue-500">Projects</a>
        <a href="#contact" class="hover:text-blue-500">Contact</a>
      </div>
      <button id="mobile-menu-button" class="md:hidden">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>
  </header>

  <!-- Hero -->
  <section id="hero" class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center px-4">
    <div>
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Aditya Yadav</h1>
      <p class="text-xl md:text-3xl mb-8">A passionate <span id="typing-text" class="typing-text text-yellow-300 font-bold"></span></p>
      <a href="#projects" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition">View My Work</a>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="py-20 px-6 md:px-10 bg-white section-hidden">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">About Me</h2>
      <div class="flex flex-col md:flex-row items-center justify-center gap-10">
        <img src="https://i.ibb.co/NfwLZRB/Whats-App-Image-2025-08-01-at-11-17-02-b69a7625.jpg" alt="Aditya Yadav" class="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-300 shadow-lg" />
        <p class="text-gray-700 text-lg leading-relaxed text-left">
          Hello! I'm <strong class="text-blue-700">Aditya Yadav</strong>, a B.Tech CSE student at Axis Institute of Technology and Management. I love building efficient, scalable, and beautiful web applications.
        </p>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="py-20 px-6 bg-gray-100 section-hidden">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">My Skills</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <!-- Skill Cards -->
        <div class="bg-white p-6 rounded-xl shadow-lg">HTML</div>
        <div class="bg-white p-6 rounded-xl shadow-lg">CSS</div>
        <div class="bg-white p-6 rounded-xl shadow-lg">JavaScript</div>
        <div class="bg-white p-6 rounded-xl shadow-lg">Java</div>
        <div class="bg-white p-6 rounded-xl shadow-lg">C++</div>
        <div class="bg-white p-6 rounded-xl shadow-lg">Python</div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="py-20 px-6 bg-white section-hidden">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">My Projects</h2>
      <div class="grid md:grid-cols-3 gap-10">
        <!-- Example Project Card -->
        <div class="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 class="text-2xl font-semibold">Responsive Website</h3>
          <p class="text-gray-600 mt-2">Built using HTML, Tailwind CSS, JavaScript</p>
        </div>
        <!-- Add more projects as needed -->
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-20 px-6 bg-gray-100 section-hidden">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">Get in Touch</h2>
      <form id="contact-form" action="https://submit-form.com/0PaBDdHZU">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <div id="name-error" class="text-red-500 text-sm hidden"></div>

        <input type="email" id="email" name="email" placeholder="Email" required />
        <div id="email-error" class="text-red-500 text-sm hidden"></div>

        <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
        <div id="message-error" class="text-red-500 text-sm hidden"></div>

        <button type="submit">Send</button>
      </form>
      <div id="form-message" class="mt-4 p-4 rounded-lg text-white hidden"></div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white text-center py-6">
    <p>&copy; <span id="current-year"></span> Aditya Yadav. All rights reserved.</p>
  </footer>

  <!-- JavaScript -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Typing Text
      const typingText = document.getElementById('typing-text');
      const phrases = ['Developer', 'Programmer', 'Learner'];
      let i = 0, j = 0, isDeleting = false;

      const type = () => {
        typingText.textContent = phrases[i].slice(0, j);
        if (!isDeleting) {
          j++;
          if (j === phrases[i].length + 1) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
          }
        } else {
          j--;
          if (j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
          }
        }
        setTimeout(type, isDeleting ? 50 : 100);
      };
      type();

      // Reveal Sections
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section-hidden').forEach(section => observer.observe(section));

      // Contact Form Validation
      const form = document.getElementById('contact-form');
      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const messageError = document.getElementById('message-error');
      const formMessage = document.getElementById('form-message');

      form.addEventListener('submit', e => {
        e.preventDefault();
        let isValid = true;
        nameError.textContent = emailError.textContent = messageError.textContent = '';
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');
        formMessage.classList.add('hidden');

        if (form.name.value.trim() === '') {
          nameError.textContent = 'Name is required';
          nameError.classList.remove('hidden');
          isValid = false;
        }

        if (!form.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          emailError.textContent = 'Valid email required';
          emailError.classList.remove('hidden');
          isValid = false;
        }

        if (form.message.value.trim() === '') {
          messageError.textContent = 'Message is required';
          messageError.classList.remove('hidden');
          isValid = false;
        }

        if (isValid) {
          formMessage.textContent = 'Message sent!';
          formMessage.classList.remove('hidden');
          formMessage.classList.add('bg-green-500');
          form.reset();
          setTimeout(() => formMessage.classList.add('hidden'), 4000);
        }
      });

      // Footer Year
      document.getElementById('current-year').textContent = new Date().getFullYear();
    });
  </script>
</body>
</html>
