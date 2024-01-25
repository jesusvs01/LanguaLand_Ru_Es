const termino = document.querySelector('.termino')
const definicion = document.querySelector('.definicion')
const revisarBoton = document.querySelector('.revisar')
const siguienteBoton = document.querySelector('.siguiente')

words = {
    "Encender/incluir": "Включать",
    Chinche: "Клоп",
    Cucharacha: "Таракан",
    Borde: "Край",
    "Apagar": "Выключать",
    "Arrastrar/gatear": "Ползать",
    Suelo: "Пол",
    Campo: "Поле",
    "Alcanzar, Llegar": "Добираться"
}

data = Object.entries(words)

function getRandomTerm(){
    randomTerm = data[Math.floor(Math.random() * data.length)]
    termino.innerHTML = `${randomTerm[1]}`;
    definicion.innerHTML = `${randomTerm[0]}`;
}

revisarBoton.addEventListener('click', function(){
    definicion.style.display = 'block';
})
siguienteBoton.addEventListener('click', function(){
    getRandomTerm();
    definicion.style.display = 'none';
})

getRandomTerm()