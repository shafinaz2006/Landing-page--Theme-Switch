const toggleSwitch = document.querySelector('#checkbox');
const modeSelect = document.querySelector('#modeSelect');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        modeSelect.innerText = 'Light Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        modeSelect.innerText = 'Dark Mode';
    }
})