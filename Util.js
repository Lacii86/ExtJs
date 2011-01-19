function Account(name, id, amount) {
	this.name = name;
	this.id = id;
	this.amount = amount;
	Account.prototype.toReadableForm = function() {
		return this.name + ' (' + this.id + ') ' + this.amount;
	};	
}

function createDate(date) {
	var year = parseInt(date.substring(0,4));
	var sMonth = date.substring(4,6);
	if (sMonth.substring(0,1) == '0') {
		sMonth = sMonth.substring(1,2);
	}
	var month = parseInt(sMonth) - 1;
	var day = parseInt(date.substring(6,8));
	var dt = new Date();
	dt.setFullYear(year, month, day);
	return dt;
}
	
String.prototype.startsWith = function(str) {
	return (this.match("^"+str)==str)
};

function numberToFormatted() {
	alert(arguments.lenght);			
	var str = field.getValue();		
	if (str.length > 3) {
		var firstLenght = str.lenght % 3;
		var iteration = str.lenght / 3;
		var result = '';
		result += str.subtring(firstLenght);
		for (i = firstLenght; i < str.length; i=i+3) {
			result += ' ' + substring(i,i+3);
		}
		alert(result);
	}			
}

function dateRenderer(val) {			
	return val.substring(0,4) + '.' + val.substring(4,6) + '.' + val.substring(6,8) + '.';
}