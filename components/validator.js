(function(window){

var validator = {};

validator.isEmailAddress = function(input) {

input = input || "";
var index = input.indexOf('@')
return index>0 && index<input.length-1 && index === input.lastIndexOf('@');
};

/*Australian number format: 0400 000 000*/
validator.isPhoneNumber = function(input) {

input = input || '';

arr = input.split(' ');

return arr.length===3 && arr[0].index(0)===0 && arr[0].length===4 && arr[1].length===3 && arr[2].length===3;
};

validator.withoutSymbols = function(input) {


input = input || '';
var all = "the quick brown fox jumps over the lazy dog 0123456789";
input = input.toLowerCase().split('');

var arr=[];
for(var i=0;i<input.length;i++) {

	if(all.indexOf(input[i])>-1){
		arr.push(input[i]);
	}
}
return arr.join('');

};

validator.isDate = function(input) {
return !isNaN(Date.parse(input));

};

validator.isBeforeDate =  function(input, reference) {
	if(input!=='' && reference !== '') {
		if(Date.parse(input) < Date.parse(reference)) {
			return true;
		} 
	}
	else{
	  	throw new Error("test");
	}
	return false;
};

validator.isAfterDate =  function(input, reference) {
	if(input!=='' && reference !== '') {
		if(Date.parse(input) > Date.parse(reference)) {
			return true;
		}
	}
	else{
	  	throw new Error("Some error has occurred.");
	}
	return false;
};

validator.isBeforeToday =  function(input) {
	if(input!=='') {
		if(Date.parse(input) - Date.parse(new Date()) < 0) {
			return true;
		}
	}
	return false;
};

validator.isAfterToday = function(input)  {
	if(input!=='') {
		if(Date.parse(input) -  Date.parse(new Date()) > 0) {
			return true;
		}
	}
	return false;
};

validator.isEmpty =  function(input) {
	if(input!=null) {
		if(input ==='' || input.trim(' ').length == 0) {
			return true;
		}
	}
	return false;
};

validator.contains =  function(input, words) {
	var arrWords = input.split(' ');
	for(var i=0; i<arrWords.length; i++) {
		for(var j=0; j<words.length; j++) {
			if(words[j].toLowerCase() === arrWords[i].replace(/,/g,'').replace(/"/g,'').toLowerCase()) {
				return true;
			}
		}
	}
	return false;	
};

validator.lacks = function(input, words) {
	var arrWords = input.split(' ');
	for(var i=0; i<arrWords.length; i++) {
		for(var j=0; j<words.length; j++) {
			if(words[j].toLowerCase() === arrWords[i].replace(/,/g,'').replace(/"/g,'').toLowerCase()) {
				return false;
			}
		}
	}
	return true;	
};

validator.isComposedOf =  function(input, strings) {

	var modifiedArr = [];
	var arrIndex= [];
	var temp;
//Sort strings in decreasing order of length.
	for(var i=0;i<strings.length;i++) {
		for(var j=i+1;j<strings.length;j++) {
			if(strings[i].length >= strings[j].length) {
				temp=i;
				prevtemp=j;
			}
			else {
				temp=j;
				prevtemp=i;
			}
		}

		if(arrIndex.indexOf(temp)<0){
			arrIndex.push(temp);
			modifiedArr.push(strings[temp]);
		}
		else {
			if(arrIndex.indexOf(prevtemp)>=0) {
				prevtemp = 0;
			}
			arrIndex.push(prevtemp);
			modifiedArr.push(strings[prevtemp]);
		}
	}

for(var i=0;i<modifiedArr.length;i++) {
	if(input.indexOf(modifiedArr[i]) >=0) {
		input = input.replace(new RegExp(modifiedArr[i],'g'), '')
	}
}

input = input.replace(/\W/g,'');
if(input.length>0) {
	return false;
}
return true;
};

validator.isLength = function(input, n) {

	if(input.length<=n){
		return true;
	}
	return false;
};

validator.isOfLength = function(input, n) {

	if(input.length>=n){
		return true;
	}
	return false;
};


validator.isBetween =  function(input, floor, ceil) {

	if(input>=floor && input<=ceil) {
		return true;
	}
	return false;
};

validator.isAlphanumeric = function(input) {
	if(input.length>=0) {

		if(input.length===0) {
			return true;
		}
		input = input.split('');
		for(var i=0;i<input.length;i++) {

			if(!(/[a-z]|[A-Z]|[0-9]/i).test(input[i])) {
				return false;
			}
		}
		return true;
	}
};

validator.isCreditCard =  function(input) {
	if((input.length===16 && input.replace('-','').length===16) || (input.length ===19) && input.split('-').length===4) {

		for(var i=0;i<input.length;i++) {

			if(!(/[0-9]|\-|[a-z]|[A-Z]/).test(input[i])) {
				return false;
			}
		}
		return true;
	}
	else {
		return false;
	}
};

validator.isHex = function(input) {
	if(input.length === 7 || input.length === 4) {
		if(input.indexOf('#') === 0){
			input = input.slice(1).toUpperCase();

			for(var i=0;i<input.length;i++) {
				if(!(/[0-9]|[A-Z]/).test(input[i])) {
					return false;
				}
			}
			return true;
		}
	}
	return false;
};

validator.isRGB = function(input) {
	
	if(!(input.slice(0, 4)=== 'rgb(' && input.slice(-1)===')')) {
		return false;
	}
	input = input.slice(4, -1);
	inputArr = input.split(',');

	for (var i = 0; i < 3; i++) {
		  inputArr[i] = parseInt(inputArr[i].trim());
		  if(!(inputArr[i]>=0 && inputArr[i]<=255)) {
		  	return false;
		  }
	}
	return true;
};

validator.isHSL = function(input) {
	
	if(!(input.slice(0, 4)=== 'hsl(' && input.slice(-1)===')')) {
		return false;
	}
	input = input.slice(4, -1);
	inputArr = input.split(',');
	
	if(inputArr.length>3) {
		return false;
	}

	inputArr[0] = parseInt(inputArr[0].trim());
	if(!((inputArr[0]>=0 && inputArr[0]<=360) &&(inputArr[1]>=0 && inputArr[1]<=1) &&(inputArr[1]>=0 && inputArr[1]<=1))) {
	  	return false;
	}
	return true;
};

validator.isColor = function(input) {

	if(validator.isHex(input) || validator.isRGB(input) || validator.isHSL(input)) {
		return true;
	}
	return false;
};

validator.isTrimmed = function(input) {
	
	var inputArr = input.split(' ');
	for (var i = 0; i < inputArr.length; i++) {
		if(inputArr[i].length==0)
			return false;
	};
	return true;
};

window.validator = validator;
})(window)