const container = document.getElementById('div')

const input = document.getElementById("input")

const butao = document.getElementById("butao")


butao.addEventListener("click", function () {
    const btn_excluir = document.createElement('button')
    const div = document.createElement('div');
    div.style.marginBottom = '10px'
    div.style.marginTop = '10px'

    const p = document.createElement('p')
    p.style.fontSize = '30px';
    p.textContent = input.value
    p.style.display = 'inline-block';

    
    btn_excluir.textContent = 'Excluir'

    btn_excluir.addEventListener('click', () => {
        div.removeChild(p);
        div.removeChild(btn_excluir);
    });


    input.value = '';

    btn_excluir.textContent = 'Excluir'
    btn_excluir.style.display = 'inline-block'
    btn_excluir.style.marginLeft = '20px'
    btn_excluir.style.backgroundColor = 'red'
    btn_excluir.style.color = 'white'
    btn_excluir.style.border = 'none'
    btn_excluir.style.padding = '5px'
    btn_excluir.style.borderRadius = '10px'
    
    btn_excluir.style.top = '10px'
    btn_excluir.style.left = '10px'

    div.appendChild(p);
    div.appendChild(btn_excluir);
    container.appendChild(div)
    input.value = ""
    input.focus()

})

input.addEventListener("keydown", function (evento) {

    if (evento.key == "Enter") {
        const btn_excluir = document.createElement('button')
        const div = document.createElement('div');
        div.style.marginBottom = '10px'
        div.style.marginTop = '10px'
        
        const p = document.createElement('p')
        p.style.fontSize = '30px';
        p.textContent = input.value
        p.style.display = 'inline-block';
    
        
        btn_excluir.textContent = 'Excluir'
    
        btn_excluir.addEventListener('click', () => {
            div.removeChild(p);
            div.removeChild(btn_excluir);
        });
    
    
        input.value = '';
    
        btn_excluir.textContent = 'Excluir'
        btn_excluir.style.display = 'inline-block'
        btn_excluir.style.marginLeft = '20px'
        btn_excluir.style.backgroundColor = 'red'
        btn_excluir.style.color = 'white'
        btn_excluir.style.border = 'none'
        btn_excluir.style.padding = '5px'
        btn_excluir.style.borderRadius = '10px'
        
        btn_excluir.style.top = '10px'
        btn_excluir.style.left = '10px'

        div.appendChild(p);
        div.appendChild(btn_excluir);
        container.appendChild(div)
        input.value = ""
        input.focus()
    }
})