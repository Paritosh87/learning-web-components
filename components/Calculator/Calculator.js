(function(window){

var calc = {};

calc.btnClick = function(value) {

	if(value === 'C') {
		document.getElementById('txtCalc').value = '';
		return;
	}
	else if(value === 'D') {
		var txtValue = document.getElementById('txtCalc').value;
		document.getElementById('txtCalc').value = txtValue.substring(0,txtValue.length-1);
		return;
	}
	else if(value === '=') {
		var txtValue = document.getElementById('txtCalc').value;
		document.getElementById('txtCalc').value = eval(txtValue);
		return;
	}
	else {
		document.getElementById('txtCalc').value += value;
	}
}

window.calc = calc;	
})(window)