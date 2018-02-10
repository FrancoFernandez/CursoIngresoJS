function Mostrar()
{
//tomo la edad  

	var edad

	edad= document.getElementById('edad').value;

	if(edad<13)
	{

		alert("Es menor");
	}

	if(edad>17)
	{

		alert("Es mayor");

	}

	if(edad>12 && edad<18)
	{

		alert("Es adolescente");
	}



}//FIN DE LA FUNCIÓN