var signoMas=1;
var choiceSkill1=0; 
var choiceSkill2=0; 
var choiceSkill3=0; 
var choiceSkill4=0;
var choiceSkill5=0;  
var choiceSkill6=0; 
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
		document.getElementById("lbldano12").innerHTML="Da\361o :";
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
			document.getElementById("lblChang3").innerHTML="30% de Man\341";
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
					document.getElementById("lblChang4").innerHTML=costoBsouls;
					document.getElementById("lblChang5").innerHTML=turBsouls;
					document.getElementById("lbldano12").innerHTML="Da\361o :";
					
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
					document.getElementById("lbldano12").innerHTML="Da\361o :";
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
					document.getElementById("lbldano12").innerHTML="Da\361o :";
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
					document.getElementById("lblChang3").innerHTML="si tiene man\341 igual o mayor al da\361o";
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
	if(signoMas >0 && signoMas < podeDisponibles) 
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
		asignar(signoMas,contador);	
	}
	else
		if(signoBoton == "-" && signoMas==1) 
		{
			document.getElementById("btnSelectkill").innerHTML="+";
			choiceSkill1=0;
			contador--;
			document.getElementById("lblCantPod").innerHTML=contador+"/3";
		}
		else
			if(signoBoton == "+" && signoMas==2 && contador < cantidadPoderes)
			{
				document.getElementById("btnSelectkill").innerHTML="-";
				choiceSkill2=1;
				contador++;
				asignar(signoMas,contador);
				document.getElementById("lblCantPod").innerHTML=contador+"/3";
			}
			else
				if(signoBoton == "-" && signoMas==2) 
				{
					document.getElementById("btnSelectkill").innerHTML="+";
					choiceSkill2=0;
					contador--;
					document.getElementById("lblCantPod").innerHTML=contador+"/3";
					
				}
				else
					if(signoBoton == "+" && signoMas==3 && contador < cantidadPoderes)
					{
						document.getElementById("btnSelectkill").innerHTML="-";
						choiceSkill3=1;
						contador++;
						document.getElementById("lblCantPod").innerHTML=contador+"/3";
						asignar(signoMas,contador);
					}
					else
						if(signoBoton == "-" && signoMas==3)  
						{
							document.getElementById("btnSelectkill").innerHTML="+";
							choiceSkill3=0;
							contador--;
							document.getElementById("lblCantPod").innerHTML=contador+"/3";
						}
						else
							if(signoBoton == "+" && signoMas==4 && contador < cantidadPoderes)
							{
								document.getElementById("btnSelectkill").innerHTML="-";
								choiceSkill4=1;
								contador++;
								document.getElementById("lblCantPod").innerHTML=contador+"/3";
								asignar(signoMas,contador);	
							}
							else
								if(signoBoton == "-" && signoMas==4) 
								{
									document.getElementById("btnSelectkill").innerHTML="+";
									choiceSkill4=0;
									contador--;
									document.getElementById("lblCantPod").innerHTML=contador+"/3";
								}
								else
									if(signoBoton == "+" && signoMas==5 && contador < cantidadPoderes) 
									{
										document.getElementById("btnSelectkill").innerHTML="-";
										choiceSkill5=1;
										contador++;
										document.getElementById("lblCantPod").innerHTML=contador+"/3";
										asignar(signoMas,contador);		
									}
									else
										if(signoBoton == "-" && signoMas==5) 
										{
											document.getElementById("btnSelectkill").innerHTML="+";
											choiceSkill5=0;
											contador--;
											document.getElementById("lblCantPod").innerHTML=contador+"/3";
										}
										else
											if(signoBoton == "+" && signoMas==6 && contador < cantidadPoderes) 
											{
												document.getElementById("btnSelectkill").innerHTML="-";
												choiceSkill6=1;
												contador++;
												document.getElementById("lblCantPod").innerHTML=contador+"/3";
												asignar(signoMas,contador);
											}
											else
												if(signoBoton == "-" && signoMas==6) 
												{
													document.getElementById("btnSelectkill").innerHTML="+";
													choiceSkill6=0;
													contador--;
													document.getElementById("lblCantPod").innerHTML=contador+"/3";
												}
}