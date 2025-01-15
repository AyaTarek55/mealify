function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // change the icon based on the theme     optional
    const moonIcon = document.querySelector('.mood i');
    if (document.body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
    }
}