let botao = document.getElementById('adicionar');
let res = document.getElementById('res');
let tarefasAdicionadas = 0; // Contador de tarefas
let containerAtual;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

botao.addEventListener('click', () => {
    let entrada = document.getElementById('inputTarefa').value;
    if (entrada.trim() !== "") {
        tarefasAdicionadas++;

        
        if (tarefasAdicionadas % 5 === 1) {
            containerAtual = document.createElement('div');
            containerAtual.classList.add('post-it');
            containerAtual.style.backgroundColor = getRandomColor();
            res.appendChild(containerAtual);
        }

        
        let novaTarefa = document.createElement('div');
        novaTarefa.classList.add('tarefa-item');
        
        
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        
        let tarefaTexto = document.createElement('span');
        tarefaTexto.textContent = entrada;

        
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                tarefaTexto.style.textDecoration='line-through';
            } else {
                tarefaTexto.style.textDecoration=none
            }
        });

        
        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(tarefaTexto);

        
        containerAtual.appendChild(novaTarefa);

        
        document.getElementById('inputTarefa').value = "";
    }
});







  
    


 