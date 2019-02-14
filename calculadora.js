class Operacion{
	constructor(num1,num2) //no se pone punto y coma, en los parentesis se3 ponen las variables
	{
		this.number1=num1;
		this.number2=num2;
	}
	sumar(){
		let objetoautilizar=this;
		return new Promise(function(resolve,reject){
			try{
				resolve(objetoautilizar.number1+objetoautilizar.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	restar(){
		let objetoautilizar=this;
		return  new Promise(function(resolve,reject){
			try{
				resolve(objetoautilizar.number1-objetoautilizar.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	multiplicar(){
		let objetoautilizar=this;
		return  new Promise(function(resolve,reject){
			try{
				resolve(objetoautilizar.number1*objetoautilizar.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	dividir(){
		let objetoautilizar=this;
		return  new Promise(function(resolve,reject){
			try{
				resolve(objetoautilizar.number1/objetoautilizar.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}

let signo=" ";
let num1=0;
let num2=0;
let conca="";

function pan(n){ //MUESTRE LOS NUMEROS
	conca+=n;
	document.getElementById("respuesta").innerHTML=conca;
}

function vaciar(o){
	signo=o;
	num1=Number(conca);
	document.getElementById("respuesta").innerHTML=conca;
	conca=" ";
}


function result(){ //para que pueda dar el resultado
	num2=Number(conca);
	document.getElementById("respuesta").innerHTML=num2;
	conca="";

	let claseoperacion= new Operacion(num1,num2);
//onclickbotonigual//
switch (signo){ 
	case"+":
	claseoperacion.sumar().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
	break;
	case"-":
	claseoperacion.restar().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
	break;
	case"*":
	claseoperacion.multiplicar().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
	case"/":
	claseoperacion.dividir().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
break;
default:
console.log("default");
break;
}

}
