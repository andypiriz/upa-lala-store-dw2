let ruta = window.location.href;
let dividirRuta = ruta.split("=");

let idProducto = dividirRuta[1];
idProducto = parseInt(idProducto);

let producto;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === idProducto) {
        producto = productos[i];
        break;
    }

}

// ----------- Mostrar producto según el id
function mostrarProducto() {
    //----- Nombre -----
    let nombreProducto = document.getElementById("nombre");
    nombreProducto.innerHTML = producto.nombre;
    //----- Descripción -----
    let descripcionProducto = document.getElementById("descripcion");
    descripcionProducto.innerHTML = producto.descripcion;

    //----- Tabla -----

    //----- Lista de detalles -----
    let listaDetalle = document.getElementById("detalles");

    let liCategoria = document.createElement("li");
    liCategoria.innerHTML = producto.categoria;

    let liEstado = document.createElement("li");
    liEstado.innerHTML = producto.estado;

    listaDetalle.append(liCategoria);
    listaDetalle.append(liEstado);

    //----- Div precio y botón -----
    let divInterior = document.getElementById("btn-y-precio");

    //----- Botón -----
    let carritoBtn = document.createElement("a");
    carritoBtn.classList.add("btn-carrito");

    let iconoCarrito = document.createElement("img");
    iconoCarrito.setAttribute("src", "../imgs/agregar-a-carrito.svg");

    carritoBtn.append(iconoCarrito);
    divInterior.append(carritoBtn);

}
mostrarProducto();

// ----------- Mostar las fotos del producto
let divImgGrande = document.getElementById("imagen-grande");

function agregarImgBtn() {
    let imgsProducto = producto.imagen;

    for (let i = 0; i < imgsProducto.length; i++) {
        const imgs = imgsProducto[i];

        let divImgsChicas = document.getElementById("imagenes-chicas");

        let imgProducto = document.createElement("img");
        imgProducto.setAttribute("src", `../imgs/${imgsProducto[i]}`);
        imgProducto.style.cursor = "pointer";
        imgProducto.addEventListener("click", mostrarImagen);
        divImgsChicas.append(imgProducto);
    }
    // Mostrar la primer imagen por defecto
    let defaultImg = document.createElement("img");
    defaultImg.setAttribute("src", `../imgs/${imgsProducto[0]}`);

    divImgGrande.append(defaultImg);

}
agregarImgBtn();


// ----------- Muestro la imagen grande del producto
function mostrarImagen(evento) {

    let imagenChica = evento.target;
    let rutaImg = imagenChica.getAttribute("src");

    let imagenGrande = document.createElement("img");
    imagenGrande.setAttribute("src", `${rutaImg}`);

    divImgGrande.innerHTML = "";
    divImgGrande.append(imagenGrande);
}

// ----------- Mostrar productos relacionados
function mostrarRelacionados(lista) {
    let divRelacionados = document.getElementById("productos-relacionados");

    for (let i = 0; i < lista.length; i++) {
        const producto = lista[i];

        let imgRelacionado = document.createElement("img");
        imgRelacionado.setAttribute("src", `../imgs/${producto.imagen[0]}`);

        divRelacionados.append(imgRelacionado);

    }
}
// ----------- Agregar los productos relacionados
function productosRelacionados() {

    let categoriaProducto = producto.categoria;

    let relacionados = [];


    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (producto.categoria === categoriaProducto && producto.id != idProducto) {
            relacionados.push(producto);
        }

    }
    mostrarRelacionados(relacionados);
}
productosRelacionados();