const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: e.target.dataset.precio,
    }
};

document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
        agregarCarrito(e);
    };
});