const buttonSabiranje = document.getElementById("sabiranje")
const buttonOduzimanje = document.getElementById("oduzimanje")
const buttonMnozenje = document.getElementById("mnozenje")
const buttonDeljenje = document.getElementById("deljenje")

function sabira() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanRezultat = document.getElementById("rezultat")

    const rezultat = Number(inputX.value) + Number(inputY.value)
    spanRezultat.innerText = rezultat
}

function oduzima() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanRezultat = document.getElementById("rezultat")

    const rezultat = Number(inputX.value) - Number(inputY.value)
    spanRezultat.innerText = rezultat
}

function mnozi() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanRezultat = document.getElementById("rezultat")

    const rezultat = Number(inputX.value) * Number(inputY.value)
    spanRezultat.innerText = rezultat
}

function deli() {
    const inputX = document.getElementById("x")
    const inputY = document.getElementById("y")
    const spanRezultat = document.getElementById("rezultat")

    const rezultat = Number(inputX.value) / Number(inputY.value)
    spanRezultat.innerText = rezultat
}



buttonSabiranje.onclick = sabira
buttonOduzimanje.onclick = oduzima
buttonMnozenje.onclick = mnozi
buttonDeljenje.onclick = deli