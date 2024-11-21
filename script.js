const menuButton = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const closeMenu = document.getElementById('closeMenu')

menuButton.addEventListener('click', () => {
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px'; // Oculta el menú
    } else {
        sidebar.style.right = '0px'; // Muestra el menú
    }
});

closeMenu.addEventListener('click', () => {
    sidebar.style.right = '-250px'; // Siempre oculta el menú
});
