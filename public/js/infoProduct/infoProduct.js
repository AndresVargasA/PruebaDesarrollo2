import { navbar } from "../navbar.js";
import { formatterPeso } from "../index/productsIndex.js";

const urlApi = "http://127.0.0.1:8000/api/v1/products"
const url = "http://127.0.0.1:8000/products/"
const divApp = document.getElementById("app")
const title = document.getElementById("title")
// const valores = window.location.search;
let id = new URL(window.location).pathname.split("/");
id = id[id.length - 1]


divApp.innerHTML += navbar


const products = async () => {
    let modal = ``
    let PrincipalProduct = `<div class="flex-container">`;
    let AnothersProducts = `<div class="flex-container-down">`;
    fetch(`${urlApi}/${id}`).then(res => res.json()).then(data => {
        modal += `
        <div class="modal" id="modal">
            <div class="modal-content">
                <div class="texto">
                    <p>Producto añadido correctamente a su carrito de compras</p>
                </div>
                <div class="modal-center">
                    <div class="product-container">
                        <div  class="modal-img">
                            
                            <img src="../img/${data.product.image_path}">
                        </div>
                        <div class="modal-info">
                            {{-- info --}}
                            <p>Agregaste:</p>
                            <p>${data.product.name}</p>
                        </div>
                        <div class="modal-price">
                            {{-- price --}}
                            <p class="price">${formatterPeso.format(data.product.price)}</p>
                        </div>
                    </div>
                    <div class="sell-container">
                        <div>
                            <p class="negrita">Resumen de tu carrito</p>
                        </div>
                        <div>
                            <p>Subtotal:</p>
                            <p class="negrita">${formatterPeso.format(data.product.price)}</p>
                        </div>
                        <div>
                            <p>Transporte:</p>
                            <p class="negrita">Sin costo</p>
                        </div>
                        <div>
                            <p>IVA:</p>
                            <p class="negrita">Incluido</p>
                        </div>
                        <div>
                            <p>Total:</p>
                            <p class="negrita">${formatterPeso.format(data.product.price)}</p>
                        </div>
                        <div>
                            <p>Incluido IVA:</p>
                            <p class="negrita">$0</p>
                        </div>
                    </div>
                </div>
                <div class="modal-btns">
                    <button type="submit" class="pagar">pagar</button>
                    <button type="submit" class="addCart">Comprar ahora</button>
                </div>
            </div>
        </div>
        `
        divApp.innerHTML += modal
        title.innerHTML = data.product.name
        PrincipalProduct += `
        <div class="grid-item-up">
            <div class="grid-subitem-img">
                <img src="../img/${data.product.image_path}">
            </div>
            <div class="grid-subitem-info">
                <div class="desc">
                    ${data.product.name}
                </div>
                <div>
                    <div class="priceBtn">
                        
                        <div class="price">
                            ${formatterPeso.format(data.product.price)}
                        </div>
                        <div class="divAddCart">
                            <button type="submit" class="addCart">Comprar ahora</button>
                        </div>
                    </div>
                    <div class="priceBtn">
                        
                        <div>
                            <div class="cantidad">
                                <div id="resta"> - </div>
                                <div id="cantidad">1</div>
                                <div  id="suma"> + </div>
                            </div>
                        </div>
                        <div>
                            <div class="divAddCart">
                                <button type="submit" class="addCart">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="desc1">
                    ${data.product.description}
                </div>
                <div>
                    <p>${data.product.capacity}</p>
                    <p>Via de administracion: ${data.product.typeOfUse}</p>
                </div>
            </div>
        </div>
        `;
        divApp.innerHTML += PrincipalProduct;
        data.AnotherProducts.forEach(product => {
            AnothersProducts += `
                <div class="grid-container-products">
                    <div class="imagenProduct">
                        <img class="imagen_productos" src="../img/${product.image_path}">
                    </div>
                    <div>
                        <a href="${url}${product.id}">${product.name}</a>
                        <p class="price">${formatterPeso.format(product.price)}</p>
                    </div>
                    <div class="btnCar">
                        <button type="submit" class="addCart" value=${product.id}>Añadir al carrito</button>
                    </div>
                </div>
            `
        })
        divApp.innerHTML += AnothersProducts;
    })
}
products()