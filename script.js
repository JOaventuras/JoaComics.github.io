
//SISTEMA DE OCULTAR HEADER AL SCROLLEAR
document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        var scrolled = window.scrollY > 30;
        header.classList.toggle('scrolled', scrolled);
    });
});



//SISTEMA DE ETIQUETAS CHECKBOXES
document.addEventListener("DOMContentLoaded", function () {
    const checkboxesFiltros = document.querySelectorAll('.filtro-menu input');
    const checkboxesTipos = document.querySelectorAll('.libro-tipo input');
    const libros = document.querySelectorAll('.libro');

    checkboxesFiltros.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            actualizarLibros();
        });
    });

    checkboxesTipos.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            actualizarLibros();
        });
    });

    const imagenFiltros = document.querySelector('.color-invertido');

    // Agregamos un evento de clic a la imagen para desactivar todos los checkboxes
    imagenFiltros.addEventListener('click', function () {
        checkboxesFiltros.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        checkboxesTipos.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        actualizarLibros();
    });

    function actualizarLibros() {
        const etiquetasSeleccionadasFiltros = obtenerEtiquetasSeleccionadas(checkboxesFiltros);
        const etiquetasSeleccionadasTipos = obtenerEtiquetasSeleccionadas(checkboxesTipos);

        libros.forEach(function (libro) {
            const etiquetasLibro = obtenerEtiquetasLibro(libro);
            const deberiaMostrar = (etiquetasSeleccionadasFiltros.length === 0 || etiquetasSeleccionadasFiltros.some(etiqueta => etiquetasLibro.includes(etiqueta))) &&
                (etiquetasSeleccionadasTipos.length === 0 || etiquetasSeleccionadasTipos.some(etiqueta => etiquetasLibro.includes(etiqueta)));

            libro.style.display = deberiaMostrar ? 'block' : 'none';
        });
    }

    function obtenerEtiquetasSeleccionadas(checkboxes) {
        return Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
    }

    function obtenerEtiquetasLibro(libro) {
        const clasesLibro = Array.from(libro.classList);
        return clasesLibro.filter(clase => clase !== 'libro');
    }
});





//FILTROS EN LINKS DEL MENU HEADER

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el valor del parámetro "filtro" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const filtro = urlParams.get('filtro');

    if (filtro) {
        // Filtrar las tarjetas de productos según el valor del filtro
        filtrarProductos(filtro);
    }
});

function filtrarProductos(filtro) {
    // Seleccionar todas las tarjetas de productos
    const tarjetas = document.querySelectorAll('.libro');

    // Mostrar u ocultar tarjetas según el filtro
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains(filtro) || filtro === 'Todos') {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}







//COMMON HEADER

// common.js
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el encabezado en el elemento con id="header-container"
    var headerContainer = document.getElementById("header-container");
    headerContainer.innerHTML = `
    <header>
    <h1>JOA CÓMICS</h1>
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li class="dropdown">
                <a href="comic.html" class="dropbtn">Cómic</a>
                <div class="dropdown-content">
                    <a href="comic.html?filtro=dc">DC</a>
                    <a href="comic.html?filtro=marvel">Marvel</a>
                    <a href="comic.html?filtro=batman">Batman</a>
                    <a href="comic.html?filtro=flash">Flash</a>
                    <a href="comic.html?filtro=simpsons">Simpsons</a>

                </div>
            </li>                    
            <li><a href="comic.html?filtro=manga">Manga</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>




    `;
});

// common.js
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el encabezado en el elemento con id="header-container"
    var footerContainer = document.getElementById("footer-container");
    footerContainer.innerHTML = `
    <header>
    <h1>JOA CÓMICS</h1>
    <nav>
        <ul>
            <li><a href="index.html"><B>Inicio</B></a></li>
            <li class="dropdown">
                <a href="comic.html" class="dropbtn">Cómic</a>
                <div class="dropdown-content">
                    <a href="comic.html?filtro=dc">DC</a>
                    <a href="comic.html?filtro=marvel">Marvel</a>
                    <a href="comic.html?filtro=batman">Batman</a>
                    <a href="comic.html?filtro=flash">Flash</a>
                    <a href="comic.html?filtro=simpsons">Simpsons</a>

                </div>
            </li>                    
            <li><a href="comic.html?filtro=manga">Manga</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>




    `;
});
















//CAMBIAR FONDO SEGUN CHECKBOX ACTIVADO

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.filtro-menu input');
    const body = document.body;

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            actualizarFondo();
        });
    });

    function obtenerEtiquetasSeleccionadas() {
        return Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
    }

    function actualizarFondo() {
        const etiquetasSeleccionadas = obtenerEtiquetasSeleccionadas();

        // Limpiamos las clases que comienzan con "filtro-"
        body.className = body.className.replace(/\bfiltro-\S+/g, '');

        // Agregamos las clases individuales para cada etiqueta seleccionada
        etiquetasSeleccionadas.forEach(etiqueta => {
            body.classList.add('filtro-' + etiqueta);
        });
    }
});

//AGREGAR AL CARRITO

document.addEventListener("DOMContentLoaded", function () {
    const botonesCarrito = document.querySelectorAll('.agregar-carrito');
    const carrito = [];

    botonesCarrito.forEach(function (boton) {
        boton.addEventListener('click', function () {
            const productoId = boton.closest('.libro').dataset.id;
            const producto = obtenerProductoPorId(productoId);

            if (producto) {
                carrito.push(producto);
                calcularTotal(carrito);
            }
        });
    });

    function obtenerProductoPorId(id) {
        // Implementa lógica para obtener información del producto por su ID
        // Por ahora, usaremos un objeto de ejemplo
        const productos = {
            "1": { id: "1", nombre: "JoJos 1-1", precio: 1000 },
            "2": { id: "2", nombre: "JoJos 1-2", precio: 1000 },
            "3": { id: "3", nombre: "JoJos 1-3", precio: 1000 },

            // Agrega más productos según sea necesario
        };

        return productos[id];
    }

    function calcularTotal(carrito) {
        // Implementa lógica para calcular el total y mostrarlo
        // Por ahora, simplemente mostraremos el total en la consola
        const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        console.log("Total del carrito: $" + total);
    }
});

