///placaje/////////////

var spritePlacaje="sprites/placaje.png";  
var MinatkPlacaje=MinAtaque1PJ+5;       
var MaxatkPlacaje=MaxAtaque1PJ+5;
var nomPlacaje="Placaje";
var efecPlacaje="Una serie de ataques elemento viento";   
var manaPlacaje=5;
var costoPlacaje=manaPlacaje+" Man\341";
var turReqPlacaje=2;

///Regen Maná//////////////
 
var spriteRegen="sprites/iconoMana.png";  
var MinatkRegen=parseInt((30*manaTotal)/100); //recupera el 30% de la cantidad maxima
var MaxatkRegen=0;
var nomRegen="Maná Plus";
var efecRegen="Regenera una parte del Man\341";
var manaRegen=0;  
var costoRegen=0;
var turReqRegen=2;

/////BeSouls//////////////////                     
var spriteBsouls="sprites/BeSouls.png";  
var MinatkBsouls=MinAtaque1PJ+10;
var MaxatkBsouls=MaxAtaque1PJ+10;
var nomBsouls="BeSouls";
var efecBsouls="Ataca al enemigo con la energia de mil almas en pena";
var manaBeSouls=15;  
var costoBsouls=manaBeSouls+" Man\341";
var turBsouls=3;

////Blood Shot/////////////////                     

var spriteBloodS="sprites/BloodShot.png";
var MinatkBloodS=parseInt(cantHPPj/2);
var MaxatkBloodS=cantHPPj/2;
var nomBloodS="Blood Shot";
var efecBloodS="Intercambia la mitad de tu vida por un ataque divino";
var manaBloodS=30;
var costoBloodS=manaBloodS+" Man\341";
var turBloodS=4;

////Heart Light//////////   

var spriteheartL="sprites/heartL.png";
var MinatkheartL=2;  //que son los turnos que va a cegar al npc
var MaxatkheartL=2;
var nomheartL="Heart Light";
var efecheartL="Luz cegadora que deja fuera de combate al enemigo por 2 turnos";
var manaheartL=25;
var costoheartL=manaheartL+" Man\341";
var turheartL=4;

////Magic Shield ///////////////////              poder2(MinatkShieldM,MaxatkShieldM,manaShieldM,costoShieldM,turShieldM,nomShieldM,spriteShieldM,efecShieldM,6);

var spriteShieldM="sprites/MagicShield.png";
var MinatkShieldM=0;
var MaxatkShieldM=2;  //aca los turnos que dura el escudo
var nomShieldM="MagShield";
var efecShieldM="Escudo que anula el ataque enemigo a cambio de man\341 por 2 turnos";
var manaShieldM=30;   //0 porque el gasto va a ser el ataque enemigo
var costoShieldM=manaShieldM+" Man\341";
var turShieldM=5;

function poder2(minatk,maxatk,manaatk,costatk,tur,nom,sprite,efect,atack)
{
		MinAtaque2PJ=minatk;
		MaxAtaque2PJ=maxatk;
		ManaAtk2=manaatk;
		costoatk2=costatk;
		turReqAtk2=tur;
		nomAtk2=nom;
		spriteATK2=sprite;
		efectoATK2=efect;
		attack2=atack;
		document.getElementById("dpimg2").src=spriteATK2; //para el sprite de descripcion personaje
		
		document.getElementById("Spritebtn2").src=spriteATK2;
}
function poder3(minatk,maxatk,manaatk,costatk,tur,nom,sprite,efect,atack)
{
	MinAtaque3PJ=minatk;
	MaxAtaque3PJ=maxatk;
	ManaAtk3=manaatk;
	costoatk3=costatk;
	turReqAtk3=tur;
	nomAtk3=nom;
	spriteATK3=sprite;
	efectoATK3=efect;
	attack3=atack;
	document.getElementById("dpimg3").src=spriteATK3; //para el sprite de descripcion personaje
	document.getElementById("Spritebtn3").src=spriteATK3;
}
function poder4(minatk,maxatk,manaatk,costatk,tur,nom,sprite,efect,atack)
{
			MinAtaque4PJ=minatk;
			MaxAtaque4PJ=maxatk;
			ManaAtk4=manaatk;
			costoatk4=costatk;
			turReqAtk4=tur;
			nomAtk4=nom;
			spriteATK4=sprite;
			efectoATK4=efect;
			attack4=atack;
			document.getElementById("dpimg4").src=spriteATK4; //para el sprite de descripcion personaje
			document.getElementById("Spritebtn4").src=spriteATK4;
} 
function asignar(sig,cont) //sig=1 es placaje , sig=2 es Regen mana , sig=3 es BeSouls , sig=4 es Blood Shot
{
	if(sig ==1 && cont ==1)    //PLACAJE EN POSICION 2
	{
		poder2(MinatkPlacaje,MaxatkPlacaje,manaPlacaje,costoPlacaje,turReqPlacaje,nomPlacaje,spritePlacaje,efecPlacaje,1);
	}
	else
		if(sig ==1 && cont ==3) //PLACAJE EN POSICION 4
		{
			poder4(MinatkPlacaje,MaxatkPlacaje,manaPlacaje,costoPlacaje,turReqPlacaje,nomPlacaje,spritePlacaje,efecPlacaje,1);
		}
		else
			if(sig ==2 && cont ==1) //Regen mana en posicion 2
			{
				poder2(MinatkRegen,MaxatkRegen,manaRegen,costoRegen,turReqRegen,nomRegen,spriteRegen,efecRegen,3);
			}
			else
				if(sig ==2 && cont ==3) //Regen mana en posicion 4
				{
					poder4(MinatkRegen,MaxatkRegen,manaRegen,costoRegen,turReqRegen,nomRegen,spriteRegen,efecRegen,3);
				}
				else
					if(sig ==1 && cont ==2) //palcaje en posicion 3
					{
						poder3(MinatkPlacaje,MaxatkPlacaje,manaPlacaje,costoPlacaje,turReqPlacaje,nomPlacaje,spritePlacaje,efecPlacaje,1);
					}
					else
						if(sig ==2 && cont ==2) //Regen mana en posicion 3
						{
							 poder3(MinatkRegen,MaxatkRegen,manaRegen,costoRegen,turReqRegen,nomRegen,spriteRegen,efecRegen,3);
						}
						else
							if(sig ==3 && cont ==1) //BeSouls en posicion 2
							{
								poder2(MinatkBsouls,MaxatkBsouls,manaBeSouls,costoBsouls,turBsouls,nomBsouls,spriteBsouls,efecBsouls,2);
							}
							else
								if(sig ==3 && cont ==2)//BeSouls en posicion 3
								{
									poder3(MinatkBsouls,MaxatkBsouls,manaBeSouls,costoBsouls,turBsouls,nomBsouls,spriteBsouls,efecBsouls,2);
								}
								else
									if(sig ==3 && cont ==3)//BeSouls en posicion 4
									{
										poder4(MinatkBsouls,MaxatkBsouls,manaBeSouls,costoBsouls,turBsouls,nomBsouls,spriteBsouls,efecBsouls,2);
									}
									else
										if(sig ==4 && cont ==1)    //Blood Shot EN POSICION 2
										{
											poder2(MinatkBloodS,MaxatkBloodS,manaBloodS,costoBloodS,turBloodS,nomBloodS,spriteBloodS,efecBloodS,4);
										}
										else
											if(sig ==4 && cont ==2) //Blood Shot EN POSICION 3
											{
												poder3(MinatkBloodS,MaxatkBloodS,manaBloodS,costoBloodS,turBloodS,nomBloodS,spriteBloodS,efecBloodS,4);
											}
											else
												if(sig ==4 && cont ==3)//Blood Shot EN POSICION 4
												{
													poder4(MinatkBloodS,MaxatkBloodS,manaBloodS,costoBloodS,turBloodS,nomBloodS,spriteBloodS,efecBloodS,4);
												}
												else
													if(sig ==5 && cont ==1)    //Heart Light EN POSICION 2
													{
														poder2(MinatkheartL,MaxatkheartL,manaheartL,costoheartL,turheartL,nomheartL,spriteheartL,efecheartL,5);
													}
													else
														
														if(sig ==5 && cont ==2) //Heart Light EN POSICION 3
														{
															poder3(MinatkheartL,MaxatkheartL,manaheartL,costoheartL,turheartL,nomheartL,spriteheartL,efecheartL,5);
														}
														else
															if(sig ==5 && cont ==3)//Heart Light EN POSICION 4
															{
																poder4(MinatkheartL,MaxatkheartL,manaheartL,costoheartL,turheartL,nomheartL,spriteheartL,efecheartL,5);
															}
															else
																if(sig ==6 && cont ==1)    //MagShield EN POSICION 2
																{
																	poder2(MinatkShieldM,MaxatkShieldM,manaShieldM,costoShieldM,turShieldM,nomShieldM,spriteShieldM,efecShieldM,6);
																}
																else
														
																	if(sig ==6 && cont ==2) //MagShield EN POSICION 3
																	{
																		poder3(MinatkShieldM,MaxatkShieldM,manaShieldM,costoShieldM,turShieldM,nomShieldM,spriteShieldM,efecShieldM,6);
																	}
																	else
																		if(sig ==6 && cont ==3)//MagShield EN POSICION 4
																		{
																			poder4(MinatkShieldM,MaxatkShieldM,manaShieldM,costoShieldM,turShieldM,nomShieldM,spriteShieldM,efecShieldM,6);
																		}
}
