function desPlacaje()
{
						document.getElementById("Eldano").innerHTML="Da\361o :"; 
					
						document.getElementById("SpritebtnDesc").src=spritePlacaje;
						document.getElementById("lblDesc").innerHTML=nomPlacaje;
						document.getElementById("lblDesc2").innerHTML=efecPlacaje;
						document.getElementById("lblDesc3").innerHTML=MinatkPlacaje+" - "+MaxatkPlacaje;
						document.getElementById("lblDesc4").innerHTML=costoPlacaje;
						document.getElementById("lblDesc5").innerHTML=turReqPlacaje;
}
function desBeSouls()
{
						document.getElementById("Eldano").innerHTML="Da\361o :";  
					
						document.getElementById("SpritebtnDesc").src=spriteBsouls;
						document.getElementById("lblDesc").innerHTML=nomBsouls;
						document.getElementById("lblDesc2").innerHTML=efecBsouls;
						document.getElementById("lblDesc3").innerHTML=MinatkBsouls+" - "+MaxatkBsouls;
						document.getElementById("lblDesc4").innerHTML=costoBsouls;
						document.getElementById("lblDesc5").innerHTML=turBsouls;
						//alert("poder 2");
}
function desManaPlus()
{
						document.getElementById("Eldano").innerHTML="Adicional :";  
						
						document.getElementById("SpritebtnDesc").src=spriteRegen;
						document.getElementById("lblDesc").innerHTML=nomRegen;
						document.getElementById("lblDesc2").innerHTML=efecRegen;;
						document.getElementById("lblDesc3").innerHTML="30% de man\341";
						document.getElementById("lblDesc4").innerHTML=costoRegen;
						document.getElementById("lblDesc5").innerHTML=turReqRegen;
}
function desBloodShot()
{
						document.getElementById("Eldano").innerHTML="Da\361o :"; 
					
						document.getElementById("SpritebtnDesc").src=spriteBloodS;
						document.getElementById("lblDesc").innerHTML=nomBloodS;
						document.getElementById("lblDesc2").innerHTML=efecBloodS;
						document.getElementById("lblDesc3").innerHTML="Vida jugador/2";
						document.getElementById("lblDesc4").innerHTML=costoBloodS;
						document.getElementById("lblDesc5").innerHTML=turBloodS;
}
function deHeartL()
{
					document.getElementById("Eldano").innerHTML="Da\361o :"; 
					
					document.getElementById("SpritebtnDesc").src=spriteheartL;
					document.getElementById("lblDesc").innerHTML=nomheartL;
					document.getElementById("lblDesc2").innerHTML=efecheartL;
					document.getElementById("lblDesc3").innerHTML="Inmoviliza 2 turnos al contrario";
					document.getElementById("lblDesc4").innerHTML=costoheartL;
					document.getElementById("lblDesc5").innerHTML=turheartL;
}
function deMagShield()
{
					document.getElementById("Eldano").innerHTML="Condicion :";  
					
					document.getElementById("SpritebtnDesc").src=spriteShieldM;
					document.getElementById("lblDesc").innerHTML=nomShieldM;
					document.getElementById("lblDesc2").innerHTML=efecShieldM;
					document.getElementById("lblDesc3").innerHTML="si tiene man\341 igual o mayor al da\361o";
					document.getElementById("lblDesc4").innerHTML=costoShieldM;
					document.getElementById("lblDesc5").innerHTML=turShieldM;
}

var algo=document.getElementById("bntAtaque");  
					algo.onmouseover=function()
					{
						document.getElementById("Eldano").innerHTML="Da\361o :"; 
					
						document.getElementById("SpritebtnDesc").src="sprites/btnAtk1.png";
						document.getElementById("lblDesc").innerHTML="Ataque Simple";
						document.getElementById("lblDesc2").innerHTML="Un poderoso ataque rapido";
						document.getElementById("lblDesc3").innerHTML=MinAtaque1PJ+" - "+MaxAtaque1PJ;
						document.getElementById("lblDesc4").innerHTML="0";
						document.getElementById("lblDesc5").innerHTML="0";
						 
					};
			var algo=document.getElementById("bntAtk3");  
					algo.onmouseover=function()
					{
						ataque3();
					};
			var algo=document.getElementById("bntAtk2");    
					algo.onmouseover=function()
					{
						ataque2();
					};
			var algo=document.getElementById("bntAtk4");   
					algo.onmouseover=function()
					{
						ataque4();
					};
			var algo=document.getElementById("Spritebtn2");  
					algo.onmouseover=function()
					{
						ataque2();
					};
			var algo=document.getElementById("Spritebtn3");   
					algo.onmouseover=function()
					{
						ataque3();
					};
			var algo=document.getElementById("Spritebtn4");  
					algo.onmouseover=function()
					{
					
						
						ataque4();
						
					};
var algo=document.getElementById("numero1");     
					algo.onmouseover=function()
					{
						ataque2();
					};
var algo=document.getElementById("numero2");  
					algo.onmouseover=function()
					{
						ataque3();
					};
var algo=document.getElementById("numero3");  
					algo.onmouseover=function()
					{
					ataque4();
					};
function ataque3()
{
						if(attack3 == 2)
						{
							desBeSouls();
							
						}
						else
							if(attack3 == 1)
							{
								desPlacaje();
							}
							else
								if(attack3 == 3)
								{
									desManaPlus();
								}
								else
									if(attack3 == 4)
									{
										desBloodShot();
									}
									else
										if(attack3 == 5)
										{
											deHeartL();
										}
										else
											if(attack3 == 6)
											{
												deMagShield();
											}
}
function ataque4()
{
						if(attack4 == 3)
						{
							desManaPlus();
							
						}
						else
							if(attack4 == 1)
							{
								desPlacaje();
							}
							else
								if(attack4 == 2)
								{
									desBeSouls();
								}
								else
									if(attack4 == 4)
									{
										desBloodShot();
									}
									else
										if(attack4 == 5)
										{
											deHeartL();
										}
										else
											if(attack4 == 6)
											{
												deMagShield();
											}
						
}
function ataque2()
{
						if(attack2 == 3)
						{
							desManaPlus();
							
						}
						else
							if(attack2 == 1)
							{
								desPlacaje();
							}
							else
								if(attack2 == 2)
								{
									desBeSouls();
								}
								else
									if(attack2 == 4)
									{
										desBloodShot();
									}
									else
										if(attack2 == 5)
										{
											deHeartL();
										}
										else
											if(attack2 == 6)
											{
												deMagShield();
											}
}