function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("apto", "nao-apto")
    
}

function avaliar(){
    const numeroTempo = document.getElementById('numeroTempo')
    const resultado = document.getElementById('resultadoAptidao')

    removerClasses()
    if (numeroTempo.value < 14){
        resultado.textContent = 'Apto'
        resultado.classList.add('apto')
    } else{
        resultado.textContent = 'Não apto'
        resultado.classList.add('nao-apto')
    }

    tempo.value = ''
    tempo.focus()
}