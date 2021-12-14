let userInput

while (userInput = prompt('Введите слово')) {
	if (!isNaN(userInput)) {
		alert('Недопустимое значение')
		continue;
	}
	break;
}

let result = getMiddle(userInput)
if(result.length == 2) 
{
	if(result[0] == result[1])
	{
		alert('Средние символы совпадают')
	}
	else
	{
		alert(result);
	}
}


function getMiddle(str) {
	return str.substr((Math.ceil(str.length / 2) - 1), (2 - str.length % 2));
}