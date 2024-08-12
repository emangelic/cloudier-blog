//document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const heroDiv = document.querySelector('.hero');

    let isDarkMode = false;

    themeToggleBtn.addEventListener('click', function() {
        console.log("Mode: ", isDarkMode);
        isDarkMode = !isDarkMode;
        console.log("Mode: ", isDarkMode);
        updateTheme();
    });

    function updateTheme() {
        if (isDarkMode) {
            //document.body.classList.add('dark-mode');
            heroDiv.classList.add('dark-mode');
            themeToggleBtn.textContent = 'Light Mode';
        } else {
           // document.body.classList.remove('dark-mode');
            heroDiv.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Dark Mode';
        }
    }
//});