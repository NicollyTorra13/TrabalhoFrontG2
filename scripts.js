

const key = "ba9ee88806027113b528e55625163e7c"

function DadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
console.log(dados)

}


async function BuscarCidade(cidade){
 const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=> resposta.json())
 console.log(dados.name)
 DadosNaTela(dados)
 
}




function botaoBusca() {
    const cidade = document.querySelector(".input-cidade").value

    BuscarCidade(cidade)
}