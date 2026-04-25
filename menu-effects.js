/* theme switch start*/
let darkMode = localStorage.getItem('dark-mode');
const themeSwitch = document.querySelector('#theme-button');

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}

if (darkMode === "active") {
    enableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode !== 'active') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
/*theme switch end*/
