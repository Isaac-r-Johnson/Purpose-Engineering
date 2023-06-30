var dropdownMenu = document.getElementById('dropdown-menu');

const down = () => {
    dropdownMenu.classList.remove('off');
    dropdownMenu.classList.add('on');
}

const up = () => {
    dropdownMenu.classList.remove('on');
    dropdownMenu.classList.add('off');
}