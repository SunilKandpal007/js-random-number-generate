/* generate random numbers */

function fincalRandom(){

    // num1 = Number(document.getElementById('fvalue').value);

    document.getElementById('result2').style.color='white';
    document.getElementById('result2').style.background='green';

    document.getElementById('result2').innerHTML = `Generated random value is: ${Math.floor(Math.random()*9999)+1}`;
}

function clearRandom(){
	document.getElementById('result2').innerHTML = " ";
	document.getElementById('result2').style.background = 'none';
}