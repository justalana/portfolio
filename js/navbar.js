// JavaScript to toggle mobile menu on button click after navbar is loaded
fetch('./components/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Load the navbar HTML into the page
        document.getElementById('navbar-container').innerHTML = data;

        // Add event listener to the menu button once navbar is loaded
        const menuBtn = document.getElementById('menu-btn');
        menuBtn.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');  // Toggle the mobile menu visibility
        });
    })
    .catch(err => console.error("Error loading navbar:", err));
