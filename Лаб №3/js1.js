let userInputNumBatt, userInputPer, percent

while (userInputNumBatt = prompt('Введите количество батарей')) {
	if (userInputNumBatt == '' || isNaN(userInputNumBatt) || userInputNumBatt < 0) {
		alert('Недействительные входные данные')
		continue
	}
	break
}

while (userInputPer = prompt('Введите процент неисправных батарей')) {
	if (userInputPer === '' || isNaN(userInputPer) || userInputPer < 0 || userInputPer > 100) {
		alert('Недействительные входные данные')
    continue
	}
	break
}

let defectBatt = userInputNumBatt / 100 * userInputPer

alert('Количество батарей: ' + userInputNumBatt +
		'\nУровень брака: ' + userInputPer + '%' +
		'\nКоличество неисправных аккумуляторов: ' + Math.round(defectBatt) +
		'\nКоличество рабочих батарей: ' + Math.round(userInputNumBatt - defectBatt))