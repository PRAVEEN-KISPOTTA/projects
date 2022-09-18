function wish1(){
	alert('good morning');
}

function wish2(){
	console.log('absolutely right...');
	alert('good evening');
}

var value = document.getElementById('btn2');

value.addEventListener('click', wish2);
value.addEventListener('click', wish1)