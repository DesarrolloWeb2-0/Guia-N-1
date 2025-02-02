document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos con la clase '.item'
    const items = document.querySelectorAll('.item');

    // Añadir un evento de clic a cada tarjeta
    items.forEach(function(item) {
        const icon = item.querySelector('span'); // Buscar el icono dentro de cada tarjeta

        // Verificar si el icono existe
        if (icon) {
            icon.addEventListener('click', function(event) {
                event.stopPropagation(); // Evitar que el clic en el icono active otros eventos del contenedor

                // Determinar la URL que se debe abrir según la tarjeta
                let url = '';

                // Puedes asignar URLs de forma dinámica si las tienes guardadas en atributos data-url, por ejemplo.
                if (item.querySelector('h3').innerText === 'What is HTML') {
                    url = 'https://www.w3schools.com/html/';
                } else if (item.querySelector('h3').innerText === 'What is CSS') {
                    url = 'https://www.w3schools.com/css/';
                } else if (item.querySelector('h3').innerText === 'What is JavaScript') {
                    url = 'https://www.w3schools.com/js/';
                } else if (item.querySelector('h3').innerText === 'What is Framework') {
                    url = 'https://www.w3schools.com/whatis/whatis_framework.asp';
                } else if (item.querySelector('h3').innerText === 'What is PHP') {
                    url = 'https://www.php.net/';
                } else if (item.querySelector('h3').innerText === 'What is SQL') {
                    url = 'https://www.w3schools.com/sql/';
                } else if (item.querySelector('h3').innerText === 'What is Python') {
                    url = 'https://www.python.org/';
                } else if (item.querySelector('h3').innerText === 'What is Java') {
                    url = 'https://www.java.com/';
                } else if (item.querySelector('h3').innerText === 'What is C++') {
                    url = 'https://www.cplusplus.com/';
                }

                // Verificar que la URL esté definida y redirigir
                if (url) {
                    window.open(url, '_blank'); // Abrir la URL en una nueva pestaña
                }
            });
        }
    });
});
