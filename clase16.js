var signo = prompt('¿Cual es tu signo?');

switch(signo) {
    case 'aries':
        console.log('Amor: examina sus sentimientos y halla lo que afecta a la pareja. La armonía finalmente se impondrá. Salud: sentirá gran vigor. Sorpresa: un conflicto familiar saldrá a la luz.')
        break;
    case 'tauro':
        console.log('Amor: recibe regalo inolvidable y debe tragarse sus indirectas. A veces, es mejor esperar. Salud: dolencia muscular se disipa. Sorpresa: un gesto amable resolverá muchas cosas.')
    case 'geminis':
    case 'géminis':
        console.log('Amor: enfatiza demasiado sus palabras y confunde a su pareja. Debe convencerla que la ama. Salud: su cuerpo le pide reposo. Sorpresa: llegará visita con lindas novedades.');
        break;
    case 'cancer':
    case 'cáncer':
        console.log('Amor: su pareja le apoyará en entredicho familiar. La atracción crece y las diferencias terminan. Salud: controle sus nervios. Sorpresa: un cambio resultará comprometedor.');
        break;
    case 'leo':
        console.log('Amor: la comunicación disuelve la distancia y consolida a la pareja. Propicio para charlar temas difíciles. Salud: ideal iniciar una dieta. Sorpresa: un ser querido le confiará secretos.');
        break;
    case 'virgo':
        console.log('Amor: con simpatía contribuirá a que la cita sea perfecta. Momento feliz, posible romance. Salud: habrá trastornos digestivos. Sorpresa: una gratificación traerá algo de dinero.');
        break;
    case 'libra':
        console.log('Amor: momentos de grato entendimiento. Su pareja le ayudará y alejará a los entrometidos. Salud: necesita dormir bien. Sorpresa: viaje imprevisto concretará un sueño.');
        break;
    case 'escorpio':
        console.log('Amor: un encuentro fortuito hará que conozca a un ser especial. Surgirá situación romántica. Salud: malestar pasajero. Sorpresa: llega una respuesta que disipará dudas.');
        break;
    case 'sagitario':
        console.log('Amor: intercambio afectivo pleno de afectuosa calidez. Terminan las peleas; se divierten. Salud: nervios alterados. Sorpresa: una ex pareja volverá con reclamos.');
        break;
    case 'capricornio':
        console.log('Amor: buenos augurios para los que inician una relación. Si está en pareja, reconciliación. Salud: distensión que alivia. Sorpresa: renacerá una olvidada vocación.');
        break;
    case 'acuario':
        console.log('Amor: su pareja le protegerá de personas maliciosas. Su ternura iluminará la intimidad. Salud: una consulta le tranquiliza. Sorpresa: incidente callejero iniciará amistad.');
        break;
    case 'piscis':
        console.log('Amor: su pareja responde con actitudes confusas. Actúe con mucho tacto; le quieren decir algo. Salud: dejará un hábito nocivo. Sorpresa: dato polémico dividirá a dos amigos.');
        break;
    default:
        console.log('No es un signo zodiacal válido')
        break;
}