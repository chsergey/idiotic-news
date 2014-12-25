walk(document.body);

function walk(node) 
{
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			makeItCultural(node);
			break;
	}
}

function makeItCultural(textNode) 
{
	var text = textNode.nodeValue;


	text = text.replace(/Путин/g, "Обещалкин");
	text = text.replace(/свидетели/i, randomWord(["знакомые чуваки", "незнакомые чуваки"]));
	text = text.replace(/предположительно/i, randomWord(["вроде так", "может быть"]));
	text = text.replace(/новые исследования/i, randomWord(["посты на tumblr'е", "псто на лепре"]));
	text = text.replace(/восстановить/i, "отомстить за");
	text = text.replace(/космос/i, randomWord(["коооосмос", "море"]));
	text = text.replace(/google glass/i, randomWord(["virtual boy", "кц"]));
	text = text.replace(/смартфон/i, randomWord(["тамагочи", "телеграф"]));
	text = text.replace(/iphone/i, randomWord(["лопата", "огрызок"]));
	text = text.replace(/электрический/i, randomWord(["атомный", "на лошадинной тяге"]));
	text = text.replace(/электронный/i, randomWord(["паровой", "псто на лепре"]));
	text = text.replace(/депутаты/i, randomWord(["эльфийские лорды", "странные личности"]));
	text = text.replace(/депутат/i, randomWord(["эльфийский лорд", "хрен с горы"]));
	text = text.replace(/президент/i, randomWord(["урукхай", "черный властелин"]));
	text = text.replace(/автомобиль/i, randomWord(["кот", "котобус"]));
	text = text.replace(/выборы/i, randomWord(["еда на скорость", "прыжки в ширину"]));
	text = text.replace(/лидеры партий/i, randomWord(["духи реки", "пациенты"]));
	text = text.replace(/АНБ/g, randomWord(["КВН", "ЧГК"]));
	text = text.replace(/ФСБ/g, randomWord(["ПТУ", "ЖКХ"]));
	text = text.replace(/отказался давать комментарии/i, 'виновен и все прекрасно это знают');
	text = text.replace(/Новосибирск/g, 'Мордор');
	text = text.replace(/новосибирск/i, 'мордор');
	text = text.replace(/сбербанк/i, 'форд нокс');
	text = text.replace(/ипотека/i, 'рабсвто');
	text = text.replace(/ипотеки/i, 'рабсвта');
	text = text.replace(/газпром/i, 'жаба на трубе');
	text = text.replace(/украин/i, 'вражин');
	text = text.replace(/доллар /i, 'бусы ');
	text = text.replace(/рубль /i, 'тугрик ');
	text = text.replace(/футболист /i, 'калека ');
	text = text.replace(/футболистов/i, 'калек');
	text = text.replace(/футболист/i, 'калек');
	text = text.replace(/НАТО/g, 'Злые ЗЛЫЕ ДЯДЬКИ');
	text = text.replace(/нефть/i, 'печеньки');
	text = text.replace(/инфляция/i, 'повышенная пушстость');
	text = text.replace(/суд /i, 'граф Дракула ');
	text = text.replace(/НГС/g, 'Одна бабка сказала');
	text = text.replace(/Новый год/g, '14 дней запоя');

	
	
	


	textNode.nodeValue = text;
}

function randomWord(words)
{
	return words[Math.floor(Math.random() * words.length)];
}
