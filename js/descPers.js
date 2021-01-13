function DescripcionPers(per) 
{
	if(per==2) 
	{
		document.getElementById("SpritedescPer").src="sprites/LeonmonD.png";
		document.getElementById("lblNombre").innerHTML="Bert";
		document.getElementById("lblHP").innerHTML=vidatotalNPC;
		document.getElementById("lblMn").innerHTML="Infinito";
		document.getElementById("lblPA").innerHTML=MinAtaque1NPC+" - "+MaxAtaque1NPC;
		document.getElementById("dpimg1").src="sprites/btnAtk1.png";
		document.getElementById("dpimg2").src="sprites/placaje.png";
		document.getElementById("dpimg3").src="sprites/BeSouls.png";
		
		document.getElementById("dpimg4").style.visibility="hidden"; //para ocultar porque no tiene un cuarto poder
		
	}
	else
		if(per ==1)  
		{
		document.getElementById("SpritedescPer").src="sprites/Jotaro.png";
		document.getElementById("lblNombre").innerHTML=nombrepj;
		document.getElementById("lblHP").innerHTML=vidatotalPJ;
		document.getElementById("lblMn").innerHTML=manaTotal;
		document.getElementById("lblPA").innerHTML=MinAtaque1PJ+" - "+MaxAtaque1PJ;
		document.getElementById("dpimg1").src="sprites/btnAtk1.png";
		document.getElementById("dpimg2").src=spriteATK2;
		document.getElementById("dpimg3").src=spriteATK3;
		
		document.getElementById("dpimg4").style.visibility="visible";
		document.getElementById("dpimg4").src=spriteATK4;
		}
}