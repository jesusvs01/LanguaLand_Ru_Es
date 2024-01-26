const termino = document.querySelector('.termino')
const definicion = document.querySelector('.definicion')
const revisarBoton = document.querySelector('.revisar')
const siguienteBoton = document.querySelector('.siguiente')

words = {
    "A menudo enciendo música cuando trabajo.": "Я часто включа́ю му́зыку, когда рабо́таю.",
    "En la habitación apareció una chinche.": "В ко́мнате появи́лся клоп.",
    "En la cocina ví una cucaracha.": "В кухне увидел тарака́на.",
    "En el borde está una antigua casa con un hermoso jardín.": "На кра́ю стои́т ста́рый до́м с кра́сивым са́дом.",
    "Ella siempre apaga las luces antes de irse.": "Она всегда выключа́ет свет перед ухо́дом.",
    "Un niño pequeño sabe arrastrarse/gatear por el suelo.": "Маленький ребёнок умеет полза́ть по полу.",
    "En el suelo hay una bonita alfombra.": "На по́лу лежи́т кра́сивый ковро́к.",
    "En el pueblo cerca de mi casa hay un hermoso campo.": "В де́ревне рядом с мои́м домо́м есть красивое поле́",
    "Llegar a la universidad es importante para los estudiantes.": "До́бираться в университе́т - Э́то ва́жно для студе́нтов.",
    "Él tiene una estatura alta.": "У него́ высоки́й рост.",
    "En la tienda vi un elegante bastón de madera.": "В ма́газине я уви́дел сти́льную тро́сть из дерева́.",
    "Ella lleva zapatos de tacón alto para la boda de su amiga.": "Она носи́т ту́фли на каблу́ке к свадьбе́ свое́й подру́ги.",
    "Él siempre es muy cauteloso en sus decisiones.": "Он всегда очень осторо́жный в своих реше́ниях.",
    "Él siempre usa anteojos para leer.": "Он всегда носи́т о́чки для чте́ния.",
    "Él abrió un frasco de mermelada y compartió con todos.": "Он откры́л ба́нку с мармела́дом и подели́лся со всеми.",
    "Un conductor precavido siempre abrocha el cinturón de seguridad.": "Предусмо́трительный води́тель всегда пристегива́ет ремень безопа́сности.",
    "En la plaza había una columna/pilar con monumentos históricos.": "На пло́щади стоя́л сто́лп с исто́рическими па́мятниками.",
    "Buscamos nuestras llaves por la mañana.": "Мы ищем у́тром свои́ ключи́.",
    "Ella decidió encontrar un nuevo libro para leer.": "Она реши́ла найти́ новую кни́гу для чте́ния.",
    "Ella sentía alegría después de una buena noticia.": "Она чу́вствовала радость после хоро́шей новости.",
    "Voy a intentar aprender a tocar la guitarra": "Я буду попытаться научиться игре на гитаре",
    "Esperamos mucho, y finalmente él llegó.": "Мы долго ждали, и, нако́нец, он пришёл.",
    "Ella dio otro paso hacia adelante.": "Она сдела́ла ещё оди́н шаг вперёд.",
    "Él decidió escapar de los problemas y pasar el fin de semana en la naturaleza.": "Он реши́л убежа́ть от пробле́м и провести́ выходны́е в приро́де.",
    "Él estaba molesto después del examen.": "Он был в зо́ле после экза́мена.",
    "Él contó un mensaje importante.": "Он рассказа́л важно́е соо́бщение"
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