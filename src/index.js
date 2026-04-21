import "./style.css"
import yoshi from "../assets/profile-mk-yoshi.babe07bc.7fdea5d658b63e27.png"

const img = document.createElement('img')
img.src = yoshi
img.alt = "Yoshi Profile Icon"
document.getElementsByTagName('div')[0].appendChild(img)

function hello(){
    console.log("hello world!")
}
hello()

async function showStats1() {
    const { default: byeBye } = await import("./statistics.js");
    console.log("Result 1:", byeBye(10, 9, 5));
}

async function showStats2() {
    const { default: someFunc } = await import("./someFunc.js");
    console.log("Result 2:", someFunc(1, 2, 5));
}

showStats1();
showStats2();
