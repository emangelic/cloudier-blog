document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    let isDarkMode = false;

    themeToggleBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        updateTheme();
    });

    function updateTheme() {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Dark Mode';
        }
    }
});