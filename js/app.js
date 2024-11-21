const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');

const agregarCarrito = (e) => {
    console.log(e);
};

document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
        agregarCarrito(e);
    };
});