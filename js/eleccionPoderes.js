var signoMas=1;
var choiceSkill1=0; // placaje
var choiceSkill2=0; // Maná Plus
var choiceSkill3=0; // BeSouls
var choiceSkill4=0; // Blood Shot
var choiceSkill5=0; // heart light  
var choiceSkill6=0; //Magic Shield
var contador=0;
var podeDisponibles=6;
var cantidadPoderes=3;

function chageSkill(signo)
{
	if(signo == 1)
	{
		document.getElementById("imgChange").src=spritePlacaje;
		document.getElementById("lblChang1").innerHTML=nomPlacaje;
		document.getElementById("lblChang2").innerHTML=efecPlacaje;
		document.getElementById("lblChang3").innerHTML="(MinAtk+5) - (MaxAtk+5)";
		document.getElementById("lblChang4").innerHTML=costoPlacaje;
		document.getElementById("lblChang5").innerHTML=turReqPlacaje;
		document.getElementById("lbldano12").innerHTML="Da&ntilde;o :";
		if(choiceSkill1 == 0)
		{
			document.getElementById("btnSelectkill").innerHTML="+";
		}
		else
			if(choiceSkill1 == 1)
			{
				document.getElementById("btnSelectkill").innerHTML="-";
			}
	}
	else
		if(signo==2)
		{
			document.getElementById("imgChange").src=spriteRegen;
			document.getElementById("lblChang1").innerHTML=nomRegen;
			document.getElementById("lblChang2").innerHTML=efecRegen;
			document.getElementById("lblChang3").innerHTML="30% de maná";
			document.getElementById("lblChang4").innerHTML=costoRegen;
			document.getElementById("lblChang5").innerHTML=turReqRegen
			document.getElementById("lbldano12").innerHTML="Adicional :";
			if(choiceSkill2 == 0)
			{
				document.getElementById("btnSelectkill").innerHTML="+";
			}
			else
				if(choiceSkill2 == 1)
				{
					document.getElementById("btnSelectkill").innerHTML="-";
				}
        }
			else
				if(signo == 3)
				{
					document.getElementById("imgChange").src=spriteBsouls;
					document.getElementById("lblChang1").innerHTML=nomBsouls;
					document.getElementById("lblChang2").innerHTML=efecBsouls;
					document.getElementById("lblChang3").innerHTML="(MinAtk+10)-(MaxAtk+10)";
					document.getElementById("lblChang4").innerHTML=manaBeSouls;
					document.getElementById("lblChang5").innerHTML=turBsouls;
					document.getElementById("lbldano12").innerHTML="Daño :";
					
					if(choiceSkill3 == 0)
					{
						document.getElementById("btnSelectkill").innerHTML="+";
					}
					else
						if(choiceSkill3 == 1)
						{
							document.getElementById("btnSelectkill").innerHTML="-";
						}
				}
				if(signo == 4) //Blood Shot
				{
					document.getElementById("imgChange").src=spriteBloodS;
					document.getElementById("lblChang1").innerHTML=nomBloodS;
					document.getElementById("lblChang2").innerHTML=efecBloodS;
					document.getElementById("lblChang3").innerHTML="Vida jugador/2";
					document.getElementById("lblChang4").innerHTML=costoBloodS;
					document.getElementById("lblChang5").innerHTML=turBloodS;
					document.getElementById("lbldano12").innerHTML="Daño :";
					if(choiceSkill4 == 0)
					{
						document.getElementById("btnSelectkill").innerHTML="+";
					}
					else
						if(choiceSkill4 == 1)
						{
							document.getElementById("btnSelectkill").innerHTML="-";
						}
				}
				if(signo == 5) //Heart Ligth
				{
					document.getElementById("imgChange").src=spriteheartL;
					document.getElementById("lblChang1").innerHTML=nomheartL;
					document.getElementById("lblChang2").innerHTML=efecheartL;
					document.getElementById("lblChang3").innerHTML="Inmoviliza 2 turnos al contrario";
					document.getElementById("lblChang4").innerHTML=costoheartL;
					document.getElementById("lblChang5").innerHTML=turheartL;
					document.getElementById("lbldano12").innerHTML="Daño :";
					if(choiceSkill5 == 0)
					{
						document.getElementById("btnSelectkill").innerHTML="+";
					}
					else
						if(choiceSkill5 == 1)
						{
							document.getElementById("btnSelectkill").innerHTML="-";
						}
				}
				if(signo == 6)
				{
					document.getElementById("imgChange").src=spriteShieldM;
					document.getElementById("lblChang1").innerHTML=nomShieldM;
					document.getElementById("lblChang2").innerHTML=efecShieldM;
					document.getElementById("lblChang3").innerHTML="si tiene maná igual o mayor al daño";
					document.getElementById("lblChang4").innerHTML=costoShieldM;
					document.getElementById("lblChang5").innerHTML=turShieldM;
					document.getElementById("lbldano12").innerHTML="Condicion :";
					if(choiceSkill6 == 0)
					{
						document.getElementById("btnSelectkill").innerHTML="+";
					}
					else
						if(choiceSkill6 == 1)
						{
							document.getElementById("btnSelectkill").innerHTML="-";
						}
				}
				
}
function sumar()
{
	if(signoMas >0 && signoMas < podeDisponibles) //4 porque hay 4 poderes por el momento aca
	{
		signoMas++;
		chageSkill(signoMas);
	}

}
function restar()
{
	if(signoMas >1)
	{
		signoMas--;
		chageSkill(signoMas);
	}

}
function agregarPoder()
{
	var signoBoton=document.getElementById("btnSelectkill").innerHTML;
	
	if(signoBoton == "+" && signoMas==1 && contador < cantidadPoderes)
	{
		document.getElementById("btnSelectkill").innerHTML="-";
		choiceSkill1=1;
		contador++;
		document.getElementById("lblCantPod").innerHTML=contador+"/3";
		asignar(signoMas,contador);//alert(contador);		
	}
	else
		if(signoBoton == "-" && signoMas==1) //placaje
		{
			document.getElementById("btnSelectkill").innerHTML="+";
			choiceSkill1=0;
			contador--;//alert("aca tendria q decrecer "+contador);
			document.getElementById("lblCantPod").innerHTML=contador+"/3";
		}
		else
			if(signoBoton == "+" && signoMas==2 && contador < cantidadPoderes)
			{
				document.getElementById("btnSelectkill").innerHTML="-";
				choiceSkill2=1;
				contador++;//alert(contador);
				asignar(signoMas,contador);
				document.getElementById("lblCantPod").innerHTML=contador+"/3";
			}
			else
				if(signoBoton == "-" && signoMas==2)  //Maná Plus
				{
					document.getElementById("btnSelectkill").innerHTML="+";
					choiceSkill2=0;
					contador--;
					document.getElementById("lblCantPod").innerHTML=contador+"/3";
					//alert(contador);
				}
				else
					if(signoBoton == "+" && signoMas==3 && contador < cantidadPoderes)
					{
						document.getElementById("btnSelectkill").innerHTML="-";
						choiceSkill3=1;
						contador++;
						document.getElementById("lblCantPod").innerHTML=contador+"/3";
						asignar(signoMas,contador);//alert(contador);
					}
					else
						if(signoBoton == "-" && signoMas==3)  //BeSouls
						{
							document.getElementById("btnSelectkill").innerHTML="+";
							choiceSkill3=0;
							contador--;
							document.getElementById("lblCantPod").innerHTML=contador+"/3";
						}
						else
							if(signoBoton == "+" && signoMas==4 && contador < cantidadPoderes)   //Blood Shot
							{
								document.getElementById("btnSelectkill").innerHTML="-";
								choiceSkill4=1;
								contador++;
								document.getElementById("lblCantPod").innerHTML=contador+"/3";
								asignar(signoMas,contador);//alert("blood shot"+contador);		
							}
							else
								if(signoBoton == "-" && signoMas==4) //Blood Shot
								{
									document.getElementById("btnSelectkill").innerHTML="+";
									choiceSkill4=0;
									contador--;//alert("aca tendria q decrecer "+contador);
									document.getElementById("lblCantPod").innerHTML=contador+"/3";
								}
								else
									if(signoBoton == "+" && signoMas==5 && contador < cantidadPoderes) //Heart Ligth
									{
										document.getElementById("btnSelectkill").innerHTML="-";
										choiceSkill5=1;
										contador++;
										document.getElementById("lblCantPod").innerHTML=contador+"/3";
										asignar(signoMas,contador);//alert(contador);		
									}
									else
										if(signoBoton == "-" && signoMas==5) 
										{
											document.getElementById("btnSelectkill").innerHTML="+";
											choiceSkill5=0;
											contador--;//alert("aca tendria q decrecer "+contador);
											document.getElementById("lblCantPod").innerHTML=contador+"/3";
										}
										else
											if(signoBoton == "+" && signoMas==6 && contador < cantidadPoderes) //Heart Ligth
											{
												document.getElementById("btnSelectkill").innerHTML="-";
												choiceSkill6=1;
												contador++;
												document.getElementById("lblCantPod").innerHTML=contador+"/3";
												asignar(signoMas,contador);//alert(contador);		
											}
											else
												if(signoBoton == "-" && signoMas==6) 
												{
													document.getElementById("btnSelectkill").innerHTML="+";
													choiceSkill6=0;
													contador--;//alert("aca tendria q decrecer "+contador);
													document.getElementById("lblCantPod").innerHTML=contador+"/3";
												}
}
