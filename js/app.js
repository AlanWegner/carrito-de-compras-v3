const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const fragment = document.createDocumentFragment();

let carritoArray = [];

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    const posicion = carritoArray.findIndex((item) => item.titulo === producto.titulo);

    if (posicion === -1) {
        carritoArray.push(producto)
    } else {
        carritoArray[posicion].cantidad++;
    };
    mostrarCarrito();
};

const mostrarCarrito = () => {

    carrito.textContent = '';

    carritoArray.forEach ((item) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.list-group-item .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('.lead span').textContent = item.precio * item.cantidad;

        clone.querySelector('.btn-success').dataset.id = item.id;
        clone.querySelector('.btn-danger').dataset.id = item.id;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
};

const btnAgregar = (e) => {
    carritoArray = carritoArray.map((item) => {
        if (e.target.dataset.id === item.id) {
            item.cantidad++;
        }
        return item;
    });
    mostrarCarrito();
};

document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
        agregarCarrito(e);
    };

    if (e.target.matches('.list-group-item div .btn-success')) {
        btnAgregar(e);
    };
});