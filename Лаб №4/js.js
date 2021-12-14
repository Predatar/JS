let mas = []

let a, n = 0, strSplit

while (isNaN(a = prompt('Введите роль'))) {
	if (a !== '') {
		mas.push(new Object({name: a, replica: []}))
		mas[n].name = a
		n++
	}
}

n = 1

while (isNaN(a = prompt('Введите реплику'))) {
	if (a !== '') {
		strSplit = a.trim();
		strSplit = strSplit.split(':')

		for (var i = 0; i < mas.length; i++) {
			if (strSplit[0].includes(mas[i].name.trim())) {
				strSplit.shift();
				mas[i].replica.push(n + ')' + strSplit.join(' '))
			}
		}
		n++
		
	}
}

for (var i = 0; i < mas.length; i++) {
	alert(mas[i].name + ':\n' + mas[i].replica)
}