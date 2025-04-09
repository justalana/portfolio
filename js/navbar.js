fetch('./components/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;
                document.getElementById('menu-btn').addEventListener('click', () => {
                    const menu = document.getElementById('mobile-menu');
                    menu.classList.toggle('hidden');
                });
            })
            .catch(err => console.error("Error loading navbar:", err));