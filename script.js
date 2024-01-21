let input = document.getElementById("input")

let butao = document.getElementById("butao")

let lista = document.getElementById("lista")

//let remover = document.getElementById("remover")

//let li;

//remover.style.display = "none"

/*function criarLi() {
    

    let li = document.createElement("li")
}*/


butao.addEventListener("click", function () {
    let li = document.createElement("li")
    li.innerHTML = input.value;
    lista.appendChild(li);
    input.value = ""
    /*remover.style.display = "inline-block"*/
})

/*
remover.addEventListener("click", function () {

    lista.remove(li)
    remover.style.display = "none"
})*/

input.addEventListener("keydown", function (evento) {

    if (evento.key == "Enter") {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        lista.appendChild(li);
        input.value = ""
    }
})