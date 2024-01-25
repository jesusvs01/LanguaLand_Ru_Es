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
    "Alcanzar, Llegar": "Добираться",
    Alto: "Высокий",
    Bastón: "Трость",
    "Tacones Altos": "Туфли на каблуке",
    Cauteloso: "Осторожный",
    "Lentes/Anteojos": "Очки",
    "Frasco/Lata": "Банка",
    Previsor: "Предусмотрительный",
    Pilar: "Столп",
    Buscar: "Искать",
    Encontrar: "найти",
    sentir: "чувствовать",
    "Tratar, Intentar": "попытаться",
    Finalmente: "наконец",
    Paso: "шаг",
    "Escapar, Huir": "убежать",
    Enojado: "зол",
    Importante: "важного"
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