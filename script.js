let input = document.getElementById("input")

let butao = document.getElementById("butao")

let lista = document.getElementById("lista")

butao.addEventListener("click", function () {
    let li = document.createElement("li")
    li.innerHTML = input.value;
    lista.appendChild(li);
    input.value = ""
})

input.addEventListener("keydown", function (evento) {

    if (evento.key == "Enter") {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        lista.appendChild(li);
        input.value = ""
    }
})