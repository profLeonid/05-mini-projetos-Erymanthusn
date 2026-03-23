'use strict'

const select1 = document.getElementById("tipoVertebra")
const select2 = document.getElementById("classeAnimal")
const select3 = document.getElementById("alimentacao")
const resultado = document.getElementById("resultado")

select1.addEventListener("change", () => {
    const valor = select1.value

    // limpa o select2
    select2.innerHTML = '<option disabled selected>--Escolha--</option>'

    if (valor === "vertebrado") {
        const opcoes = ["Ave", "Mamífero"]

        opcoes.forEach(item => {
            const option = new Option(item, item.toLowerCase());
            select2.add(option)
        })

    } else if (valor === "invertebrado") {
        const opcoes = ["Inseto", "Anelideo"];

        opcoes.forEach(item => {
            const option = new Option(item, item.toLowerCase())
            select2.add(option)
        })
    }
})
select2.addEventListener("change", () => {
    const valor2 = select2.value

    // limpa o select3
    select3.innerHTML = '<option disabled selected>--Escolha--</option>'

    //Verifica opção Ave
    if (valor2 === "ave") {
        const opcoes = ["Carnivoro", "Onivoro"]

        opcoes.forEach(item => {
            const option = new Option(item, item.toLowerCase());
            select3.add(option)
        })
    
    //Verifica opção Mamifero
    } else if (valor2 === "mamífero") {
        const opcoes = ["Onivoro", "Herbivoro"];

        opcoes.forEach(item => {
            const option = new Option(item, item.toLowerCase())
            select3.add(option)
        })

    //Verifica opção Inseto
    } else if (valor2 === "inseto") {
        const opcoes = ["Hematofago", "Herbivoro"];

        opcoes.forEach(item => {
            const option = new Option(item, item.toLowerCase())
            select3.add(option)
        })
    }

    //Verifica opção Anelideo
    else if (valor2 === "anelideo") {
        const opcoes = ["Hematofago", "Onivoro"];

        opcoes.forEach(item => {
            const option = new Option(item, item.toLowerCase())
            select3.add(option)
        })
    }
})
resultado.classList.add("visivel")

function resultadoAnimal(){

    const select1 = document.getElementById("tipoVertebra")
    const select2 = document.getElementById("classeAnimal")
    const select3 = document.getElementById("alimentacao")
    const resultado = document.getElementById("resultado")

    resultado.classList.remove(
        "resultado-vertebrado-ave",
        "resultado-vertebrado-mamifero",
        "resultado-invertebrado-inseto",
        "resultado-invertebrado-anelideo"
       
    )

    if (select1.value == 'vertebrado' && select2.value == 'ave' && select3.value == 'carnivoro'){
        resultado.classList.add("resultado-vertebrado-ave")
            resultado.textContent = `Aguia`
    }
    if (select1.value == 'vertebrado' && select2.value == 'ave' && select3.value == 'onivoro'){
        resultado.classList.add("resultado-vertebrado-ave")
            resultado.textContent = `Pomba`
    }
    if (select1.value == 'vertebrado' && select2.value == 'mamífero' && select3.value == 'onivoro'){
        resultado.classList.add("resultado-vertebrado-mamifero")
            resultado.textContent = `Homem`
    }
    if (select1.value == 'vertebrado' && select2.value == 'mamífero' && select3.value == 'herbivoro'){
        resultado.classList.add("resultado-vertebrado-mamifero")
            resultado.textContent = `Vaca`
    }
    if (select1.value == 'invertebrado' && select2.value == 'inseto' && select3.value == 'hematofago'){
        resultado.classList.add("resultado-invertebrado-inseto")
            resultado.textContent = `Pulga`
    }
    if (select1.value == 'invertebrado' && select2.value == 'inseto' && select3.value == 'herbivoro'){
        resultado.classList.add("resultado-invertebrado-inseto")
            resultado.textContent = `Lagarta`
    }
    if (select1.value == 'invertebrado' && select2.value == 'anelideo' && select3.value == 'hematofago'){
        resultado.classList.add("resultado-invertebrado-anelideo")
            resultado.textContent = `Sanguessuga`
    }
    if (select1.value == 'invertebrado' && select2.value == 'anelideo' && select3.value == 'onivoro'){
        resultado.classList.add("resultado-invertebrado-anelideo")
            resultado.textContent = `Minhoca`
    }
    resultado.classList.add("visivel")
}