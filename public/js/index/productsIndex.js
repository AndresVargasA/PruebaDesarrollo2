const urlApi = "http://127.0.0.1:8000/api/v1/products"
const url = "http://127.0.0.1:8000/products/"
export const divApp= document.getElementById("app")


export const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

export const products = async () => {
    let infoProduct = `<div class="productos">`;
    fetch(urlApi).then(res => res.json()).then(data => {
        data.products.forEach(product => {
            let cantidad = 1
            infoProduct += `
            <div class="xd">
                <div class="divProducto" href="google.com">
                    <img class="imagenes" src="../img/${product.image_path}">
                </div>
                <div class="divInfoProducto">
                    <div class="descripcion">
                        <p class="desc">
                            <a href="${url}${product.id}">${product.name}</a>
                        </p>
                        <p class="price">
                            ${formatterPeso.format(product.price)}
                        </p>
                    </div>
                    <div class="btns-compra">
                        <div class="cantidad">
                            <div> <span id="resta">-</span> </div>
                            <div id="cantidad" name="cantidad">${cantidad}</div>
                            <div > <span id="suma">+</span> </div>
                        </div>
                        <div class="divAddCart">
                            <button type="submit" class="addCart" value=${product.id}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        infoProduct += '</div>';
        divApp.innerHTML += infoProduct;
    })
}
