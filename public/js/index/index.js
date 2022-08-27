import { navbar } from "../navbar.js"
import { slider } from "./slider.js"
import { products } from "./productsIndex.js"

const divApp = document.getElementById("app")

divApp.innerHTML += navbar
divApp.innerHTML += slider
await products()