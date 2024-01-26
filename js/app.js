const termino = document.querySelector('.termino')
const definicion = document.querySelector('.definicion')
const revisarBoton = document.querySelector('.revisar')
const siguienteBoton = document.querySelector('.siguiente')

words = {
    "A menudo enciendo música cuando trabajo.": "Я часто включа́ю му́зыку, когда рабо́таю.",
    "En la habitación apareció una chinche.": "В ко́мнате появи́лся клоп.",
    "En la cocina ví una cucaracha.": "В кухне увидел тарака́на.",
    Borde: "Край",
    "Apagar": "Выключать",
    "Arrastrar/gatear": "Ползать",
    "En el suelo hay una bonita alfombra.": "На по́лу лежи́т кра́сивый ковро́к.",
    "En el pueblo cerca de mi casa hay un hermoso campo.": "В де́ревне рядом с мои́м домо́м есть красивое поле́",
    "Llegar a la universidad es importante para los estudiantes.": "До́бираться в университе́т - Э́то ва́жно для студе́нтов.",
    "Él tiene una estatura alta.": "У него́ высоки́й рост.",
    "En la tienda vi un elegante bastón de madera.": "В ма́газине я уви́дел сти́льную тро́сть из дерева́.",
    "Tacones Altos": "Туфли на каблуке",
    "Él siempre es muy cauteloso en sus decisiones.": "Он всегда очень осторо́жный в своих реше́ниях.",
    "Lentes/Anteojos": "Очки",
    "Frasco/Lata": "Он пошёл в магазин за ба́нкой туна́.",
    Previsor: "Предусмотрительный",
    "En la plaza había una columna/pilar con monumentos históricos.": "На пло́щади стоя́л сто́лп с исто́рическими па́мятниками.",
    Buscar: "Искать",
    Encontrar: "найти",
    sentir: "чувствовать",
    "Voy a intentar aprender a tocar la guitarra": "Я буду попытаться научиться игре на гитаре",
    "Esperamos mucho, y finalmente él llegó.": "Мы долго ждали, и, нако́нец, он пришёл.",
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