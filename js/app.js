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
    "Él contó un mensaje importante.": "Он рассказа́л важно́е соо́бщение",
    "Él traerá un libro para leer.":"Он принесёт книгу, чтобы почитать.",
    "Él se acerca a la ventana para mirar la calle.":"Он подходит к окну, чтобы посмотреть на улицу.",
    "Hoy hace mucho frío.":"Сего́дня очень холо́дно.",
    "Hubo niebla por la mañana.":"У́тром был тума́н.",
    "Él la agarraba fuertemente de la mano.":"Он кре́пко держа́л её за руку́.",
    "Él tiraba de la manija, intentando abrir la cerradura.": "Он дёргал рукоя́тку, пыта́ясь открыва́ть замо́к.",
    "Ella encogía los hombros, sin saber qué decir.": "Она пожимала плечами, не зная, что сказать.",
    "Ella temblaba de frío, a pesar de llevar ropa abrigada":"Она дрожа́ла от хо́лода, несмотря́ на те́плую оде́жду.",
    "Golpeaba la puerta con fuerza porque había olvidado la llave.":"Он би́л в дверь с си́лой, потому что забы́л ключ.",
    "El lobo comenzó a aullar bajo la luz de la luna.":"Во́лк нача́л выть под лу́нным све́том.",
    "Él robó mi billetera en el metro.": "Он украл мой кошеле́к в метро́.",
    "Él sale del autobús después de un largo viaje.": "Он выле́зает из авто́буса после долго́го путеше́ствия.",
    "Al niño pequeño le gusta subir al sofá.":"Маленький ребёнок лю́бит лезть на дива́н.",
    "Él tiene los hombros muy anchos.":"У него́ очень ши́рокие плечи́.",
    "La puerta en la habitación es muy estrecha":"Дверь в комна́те очень у́зкая.",
    "El bebé comenzó a llorar después de perder su juguete.":"Младенец начал пла́кать после того́, как потеря́л игру́шку.",
    "Una persona sorda utiliza el lenguaje de señas para comunicarse":"Глухо́й челове́к использу́ет же́стовый язы́к для обще́ния.",
    "Perdió el autobús debido a la tardanza.":"Он пропусти́л авто́бус из-за опозда́ния.",
    "En verano nos gusta bañarnos en el mar.":"Лето́м мы лю́бим купа́ться в мо́ре.",
    "En la mesa había un frasco con caviar negro.":"На сто́ле стоя́ла ба́нка с чёрной икро́й.",
    "Ayer hicimos un guiso de carne delicioso.":"Мы гото́вили вчера́ вку́сное мя́сное жарко́е.",
    "Ella prepara masa para deliciosas galletas.":"Она гото́вит те́сто для вку́сных пече́нь.",
    "Ella corta cuidadosamente las frutas en la cocina.":"Она осторо́жно ре́жет фрукты на кухне́."
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
