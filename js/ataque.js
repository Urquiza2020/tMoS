var restoBarra=0;
var boolAtk5=false;
var boolAtk6=false;
var boolAtk6A=false;
var c=0;
var contAtk6=-1;
function ataque(atk) 
			{
				
				if(turno==0)
				{
				//document.getElementById("bntAtaque").disabled=true;
				document.getElementById("Spritebtn").style.opacity = "0.6";   //modificar opacidad para q se vea q no se puede usar ATK1
				document.getElementById("Spritebtn2").style.opacity = "0.6";   //modificar opacidad para q se vea q no se puede usar ATK2
				document.getElementById("Spritebtn3").style.opacity = "0.6";   //modificar opacidad para q se vea q no se puede usar ATK3
				document.getElementById("Spritebtn4").style.opacity = "0.6";   //modificar opacidad para q se vea  q no se puede usar ATK4
				
				document.getElementById("bntAtk2").disabled=true;   
				document.getElementById("bntAtk3").disabled=true;
				document.getElementById("bntAtk4").disabled=true; 
				
				document.getElementById("Spritebtn2").style.zIndex = "4";
				document.getElementById("Spritebtn3").style.zIndex = "4";
				document.getElementById("Spritebtn4").style.zIndex = "4";
				
				turno=1;
				 
				if(atk==0) //Ataque 1 pj
				{
					document.getElementById("arribajotatk").innerHTML="Attack"; //Modificar etiqueta ataque
					document.getElementById("arribajotatk").style.visibility="visible"; //Mostrar etiqueta de ataque
					document.getElementById("imgAttack").style.visibility="visible"; //Mostrar efecto ataque  
					ataque1PJ=nose(MinAtaque1PJ,MaxAtaque1PJ);
					
					cantHPN=cantHPN-ataque1PJ; //variable de daño hecho
					danoPJ=ataque1PJ;
					
					
					contadorTurnos();  //metodo q resta los turnos 
					
				}
				if(atk==1) //Ataque 2 Placaje
				{
					
					document.getElementById("arribajotatk").innerHTML=nomPlacaje; //Modificar etiqueta ataque
					document.getElementById("arribajotatk").style.visibility="visible";//Mostrar etiqueta de ataque
					document.getElementById("imgAttack2").style.visibility="visible"; //Mostrar efecto ataque 2
					
					
					
					contadorTurnos();  //metodo q resta los turnos 
					
					if(attack2 == 1) //pregunta si el placaje esta en el boton 2
					{
						ataque2PJ=nose(MinAtaque2PJ,MaxAtaque2PJ);
						contTurAtk2=turReqAtk2; //le asigna la cuenta 
						cantHPN=cantHPN-ataque2PJ;
						danoPJ=ataque2PJ;
						mana=mana-ManaAtk2;   //restar maná
						restoBarra=ManaAtk2;
					}
					if(attack4 ==1) //pregunta si el placaje esta en el boton 4
					{
						contTurAtk4=turReqAtk4;
						ataque4PJ=nose(MinAtaque4PJ,MaxAtaque4PJ);
						cantHPN=cantHPN-ataque4PJ;
						danoPJ=ataque4PJ;
						mana=mana-ManaAtk4;   //restar maná
						restoBarra=ManaAtk4; 
					}
					if(attack3 ==1) //pregunta si el placaje esta en el boton 3
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=nose(MinAtaque3PJ,MaxAtaque3PJ);
						cantHPN=cantHPN-ataque3PJ;
						danoPJ=ataque3PJ;
						mana=mana-ManaAtk3;   //restar maná
						restoBarra=ManaAtk3;
					}
										
					//mana=mana-ManaAtk2;   //restar maná
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Mana: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   //modificar barra Mana
				}
				if(atk==2) //Ataque 3 BeSouls 
				{					
					document.getElementById("arribajotatk").innerHTML=nomBsouls; //Modificar etiqueta ataque
					document.getElementById("arribajotatk").style.visibility="visible";//Mostrar etiqueta de ataque
					document.getElementById("imgAtk1A").style.visibility="visible"; //Mostrar efecto ataque 3 A 
					document.getElementById("imgAtk1b").style.visibility="visible";  //Mostrar efecto ataque 3 B
					document.getElementById("imgAtk1b").style.marginLeft="-50%";     //mover sprite a la derecha para simular movimiento
					
					
					contadorTurnos();  //metodo q resta los turnos 
					
					if(attack2 == 2) //pregunta si el BeSouls esta en el boton 2
					{
						ataque2PJ=nose(MinAtaque2PJ,MaxAtaque2PJ);
						contTurAtk2=turReqAtk2; //le asigna la cuenta 
						cantHPN=cantHPN-ataque2PJ; //variable de daño hecho
						danoPJ=ataque2PJ;
						mana=mana-ManaAtk2;   //restar maná
						restoBarra=ManaAtk2;
					}
					if(attack4 == 2) //pregunta si el BeSouls esta en el boton 4
					{
						contTurAtk4=turReqAtk4;
						ataque4PJ=nose(MinAtaque4PJ,MaxAtaque4PJ);
						cantHPN=cantHPN-ataque4PJ; //variable de daño hecho
						danoPJ=ataque4PJ;
						mana=mana-ManaAtk4;   //restar maná
						restoBarra=ManaAtk4; 
					}
					if(attack3 ==2) //pregunta si el BeSouls esta en el boton 3
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=nose(MinAtaque3PJ,MaxAtaque3PJ);
						cantHPN=cantHPN-ataque3PJ;             //variable de daño hecho
						danoPJ=ataque3PJ;
						mana=mana-ManaAtk3;   //restar maná
						restoBarra=ManaAtk3;
					}
					
					
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Mana: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   //modificar barra Mana
				}
				if(atk==3) //regen de mana
				{
					
					document.getElementById("imgAttack3").style.visibility="visible"; //Mostrar efecto Mana plus
					
					
					document.getElementById("arribajotatk").style.color="#0c3df0";     //poner el color del mana
					document.getElementById("arribajotatk").style.visibility="visible";//Mostrar etiqueta poder maná
					
					
					contadorTurnos();  //metodo q resta los turnos 
					
					
					
					if(attack4 ==3) //pregunta si el mana plus esta en el boton 4
					{
						contTurAtk4=turReqAtk4; //le asigna la cuenta regresiva
						ataque4PJ=MinatkRegen//nose(MinAtaque4PJ,MaxAtaque4PJ);
						mana=mana+ataque4PJ; //variable mana
						document.getElementById("arribajotatk").innerHTML="Maná Plus <br>         +"+ataque4PJ; //Modificar etiqueta poder maná
						if(mana > manaTotal)
						{
							mana=manaTotal;
						}			
						document.getElementById("manapj").innerHTML="Mana:"+mana;
						document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,ataque4PJ,"1")+"%";   //modificar barra Mana
						
					}
					if(attack2 == 3) //pregunta si el mana plus esta en el boton 2
					{
						contTurAtk2=turReqAtk2; //le asigna la cuenta regresiva
						ataque2PJ=MinatkRegen//nose(MinAtaque2PJ,MaxAtaque2PJ);
						mana=mana+ataque2PJ; //variable mana
						document.getElementById("arribajotatk").innerHTML="Maná Plus <br>         +"+ataque2PJ; //Modificar etiqueta poder maná
						if(mana > manaTotal)
						{
							mana=manaTotal;
						}			
						document.getElementById("manapj").innerHTML="Mana:"+mana;
						document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,ataque2PJ,"1")+"%";   //modificar barra Mana
						
					}
					if(attack3 == 3) //pregunta si el mana plus esta en el boton 3
					{
						contTurAtk3=turReqAtk3; //le asigna la cuenta regresiva
						ataque3PJ=MinatkRegen//nose(MinAtaque3PJ,MaxAtaque3PJ);
						mana=mana+ataque3PJ; //variable mana
						document.getElementById("arribajotatk").innerHTML="Maná Plus <br>         +"+ataque3PJ; //Modificar etiqueta poder maná
						if(mana > manaTotal)
						{
							mana=manaTotal;
						}			
						document.getElementById("manapj").innerHTML="Mana:"+mana;
						document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,ataque3PJ,"1")+"%";   //modificar barra Mana
						
					}
					
					
				}
				if(atk == 4) //ataque Blood Shot
				{
					document.getElementById("imgAttack4a").style.visibility="visible"; //Mostrar efecto Blood Shot
					document.getElementById("imgAttack4B").style.visibility="visible";
					document.getElementById("arribajotatk").style.visibility="visible";//Mostrar etiqueta Blood Shot
					
					
					contadorTurnos();  //metodo q resta los turnos 
					
					if(attack4 ==4)  //si blood shot esta en boton 4
					{
						contTurAtk4=turReqAtk4; //cuenta regresiva
						ataque4PJ=MinatkBloodS;  //vida jugador /2
						cantHPN=cantHPN-ataque4PJ; //variable de daño hecho 
						cantHPPj=cantHPPj-ataque4PJ;
						danoPJ=ataque4PJ;
						mana=mana-ManaAtk4;   //restar maná
						restoBarra=ManaAtk4;
						document.getElementById("arribajotatk").innerHTML="Blood Shot <br>         -"+ataque4PJ; //Modificar etiqueta poder maná
						
					}
					if(attack2 == 4) //si blood shot esta en boton  2
					{
						contTurAtk2=turReqAtk2; //le asigna la cuenta 
						ataque2PJ=MinatkBloodS;
						cantHPN=cantHPN-ataque2PJ; //variable de daño hecho
						cantHPPj=cantHPPj-ataque2PJ;
						danoPJ=ataque2PJ;
						mana=mana-ManaAtk2;   //restar maná
						restoBarra=ManaAtk2;
						document.getElementById("arribajotatk").innerHTML="Blood Shot <br>         -"+ataque2PJ; //Modificar etiqueta poder maná
					}
					if(attack3 ==4) //pregunta si el ataque Blood Shot esta en el boton 3
					{
						ataque3PJ=MinatkBloodS;
						contTurAtk3=turReqAtk3;
						cantHPN=cantHPN-ataque3PJ;             //variable de daño hecho
						cantHPPj=cantHPPj-ataque3PJ;
						danoPJ=ataque3PJ;
						mana=mana-ManaAtk3;   //restar maná
						restoBarra=ManaAtk3;
						document.getElementById("arribajotatk").innerHTML="Blood Shot <br>         -"+ataque3PJ; //Modificar etiqueta poder maná
					}
					
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Mana: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   //modificar barra Mana
					
					document.getElementById("vidapj").innerHTML="Vida:"+cantHPPj;  //asignar nueva cantidad de vida
					document.getElementById("gra1").style.width=porcenBarraHP(vidatotalPJ,danoPJ,"1")+"%";  
					
				}
				
				
				if(atk==5)  //Heart Ligth
				{
					boolAtk5=true;
					c=0;
					document.getElementById("arribajotatk").innerHTML=nomheartL; //Modificar etiqueta ataque
					document.getElementById("arribajotatk").style.color="#057d1d";
					document.getElementById("arribajotatk").style.visibility="visible";//Mostrar etiqueta de ataque
					document.getElementById("imgAttack5").style.visibility="visible"; //Mostrar efecto ataque 
					
					contadorTurnos();  //metodo q resta los turnos 
					
					if(attack2 == 5) //pregunta si el Heart Ligth esta en el boton 2
					{
						ataque2PJ=MinatkheartL;
						contTurAtk2=turReqAtk2; //le asigna la cuenta 
						mana=mana-ManaAtk2;   //restar maná
						restoBarra=ManaAtk2;
						
						
					}
					if(attack4 == 5) //pregunta si el Heart Ligth esta en el boton 4
					{
						contTurAtk4=turReqAtk4;
						ataque4PJ=MinatkheartL;
						mana=mana-ManaAtk4;   //restar maná
						restoBarra=ManaAtk4; 
						
					}
					if(attack3 ==5) //pregunta si el Heart Ligth esta en el boton 3
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=MinatkheartL;
						mana=mana-ManaAtk3;   //restar maná
						restoBarra=ManaAtk3;
						
					}
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Mana: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   //modificar barra Mana
					
					
				}
				if(atk==6)  //MagShield
				{
					document.getElementById("arribajotatk").style.color="#0c3df0";
					document.getElementById("arribajotatk").innerHTML=nomShieldM; //Modificar etiqueta ataque
					document.getElementById("arribajotatk").style.visibility="visible";//Mostrar etiqueta de ataque
					document.getElementById("imgAttack6A").style.visibility="visible"; //Mostrar efecto ataque 6A
					
					contadorTurnos();
					
					if(attack2 == 6) //pregunta si el MagShield esta en el boton 2
					{
						contTurAtk2=turReqAtk2; //le asigna la cuenta 
						mana=mana-ManaAtk2;   //restar maná
						restoBarra=ManaAtk2;
						
					}
					if(attack4 == 6) //pregunta si el MagShield esta en el boton 4
					{
						contTurAtk4=turReqAtk4;
						mana=mana-ManaAtk4;   //restar maná
						restoBarra=ManaAtk4; 
						
					}
					if(attack3 ==6) //pregunta si el Heart Ligth esta en el boton 3
					{
						contTurAtk3=turReqAtk3;
						mana=mana-ManaAtk3;   //restar maná
						restoBarra=ManaAtk3;
						
					}
					contAtk6=-1;
					boolAtk6=true;
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Mana: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   //modificar barra Mana
				}
				if(boolAtk5==true)    //para el ataque de dormir
						{
							
							if(c >= 2)
							{
								boolAtk5=false;
							}
							
							c++;
						}
				if(atk != 3 && atk !=5 && atk!=6) //para q no haga animacion de daño si no es un poder de ataque            ///////////////////////////////////////////////////NO PODER DE ATAQUE
				{
				
				var timout3=setTimeout(function(){
				xleonm=xleonm+3;
					
				leonm.style.marginLeft=xleonm+"%";    //mover imagen
				
				document.getElementById("arribaNPC").innerHTML="-"+danoPJ;  //Modificar etiqueta de daño
				document.getElementById("arribaNPC").style.visibility="visible"; //Mostrar el h1 en la cabeza de Leonmon
				
				},100,"JavaScript") 
				var timout4=setTimeout(function(){
				
				
				xleonm=xleonm-3;
				leonm.style.marginLeft=xleonm+"%";  //mover imagen 
				},200,"JavaScript")
				
				}
				else
					{
						if(atk ==5) 
						{
							document.getElementById("arribaNPC").innerHTML="-"+MinatkheartL+" Turnos";  //Modificar etiqueta de turnos quitados
							document.getElementById("arribaNPC").style.color="#057d1d";  
							document.getElementById("arribaNPC").style.visibility="visible"; //Mostrar el h1 en la cabeza de Leonmon
						}
					}
				
				var timout6=setTimeout(function(){ 
				
				document.getElementById("arribajotatk").style.visibility="hidden"; //ocultar etiqueta de ataque
				document.getElementById("imgAtk1A").style.visibility="hidden"; //Ocultar efecto ataque 3 A BeSouls
				document.getElementById("imgAtk1b").style.visibility="hidden"; //Ocultar efecto ataque 3 B BeSouls
				document.getElementById("imgAttack").style.visibility="hidden"; //Ocultar efecto Attack
				document.getElementById("imgAttack2").style.visibility="hidden"; //Ocultar efecto ataque 2 Placaje
				document.getElementById("imgAttack3").style.visibility="hidden"; //Ocultar efecto regen maná
				document.getElementById("imgAttack4a").style.visibility="hidden"; //Ocultar efecto Blood Shot A
				document.getElementById("imgAttack4B").style.visibility="hidden"; //Ocultar efecto Blood Shot B
				document.getElementById("imgAttack5").style.visibility="hidden";  //ocultar efecto Healt Ligth
				document.getElementById("imgAttack6A").style.visibility="hidden"; //ocultar efecto MagShield
				
				if(atk != 3 && atk != 5 && atk!=6) //para q no haga animacion de daño si no es un poder de ataque                      ///////////////////////////////////////////NO PODER DE ATAQUE
				{
					document.getElementById("arribaNPC").style.visibility="hidden"; //Ocultar el h1 en la cabeza de LeonMon
				}
				else
					{
						if(atk ==5)
						{
							document.getElementById("arribaNPC").innerHTML=ataque2PJ+" Turnos";  //Modificar etiqueta de daño
							document.getElementById("arribaNPC").style.visibility="hidden"; //Mostrar el h1 en la cabeza de Leonmon
						}
					}
				},1500,"JavaScript")
				
				
				var timout2=setTimeout(function(){ //que tarde un segundo en atacar
				vidaNpc=document.getElementById("vidaNpc");
				if(cantHPN < 0)
						{
							cantHPN=0;
						}
				vidaNpc.innerHTML="Vida:"+cantHPN;     //asigna la nueva cantidad de vida
				if(atk != 3 && atk != 5 && atk !=6) //si no es ataque 3 que no disminuya la barra del npc
				{
				document.getElementById("gra2").style.width=porcenBarraHP(vidatotalNPC,danoPJ,"0")+"%";
				}
				
				
					},1000,"JavaScript")
				
				
				if(cantHPN <=0)
				{
					var timout2=setTimeout(function(){ //retardado porque larga alerta antes de atacar
						//alert("Felicidades , Ganaste!!!"); // Alerta de que gane
						document.getElementById("endGame").style.visibility="visible";
						document.getElementById("msjFinal").innerHTML="Felicidades <br> Ganaste!!!";
					},1000,"JavaScript")
				}
				else
					{
				if(atk !=5 && boolAtk5==false) //que el npc no ataque 
				{
					var min, max;
					var pNPC=0;
					min=Math.ceil(1); 
					max=Math.floor(3); //si aumentan los ataques del NPC hay q aumentar aca
					var resultado=Math.floor(Math.random()* (1+max-min)+min); //ataques aleatorios
					
					
					
					if(resultado==1)   //los ataques del NPC
					{
						document.getElementById("arribaLeonAtk").innerHTML="Attack"; //Modificar etiqueta ataque
											
						ataque1NPC=nose(MinAtaque1NPC,MaxAtaque1NPC);
						if(boolAtk6==false)           //si el ataque es mayor que el mana , que quite vida
						{	
						cantHPPj=cantHPPj-ataque1NPC;
						danoNPC=ataque1NPC;
						}
						else
							atkMagShield(ataque1NPC);
					}
					if(resultado==2)
					{
						document.getElementById("arribaLeonAtk").innerHTML="Placaje"; //Modificar etiqueta ataque
						
						ataque2NPC=nose(MinAtaque2NPC,MaxAtaque2NPC);
						if(boolAtk6==false)
						{
						cantHPPj=cantHPPj-ataque2NPC;
						danoNPC=ataque2NPC;
						}
						else
							{atkMagShield(ataque2NPC);}
					}
					if(resultado==3)
					{
						document.getElementById("arribaLeonAtk").innerHTML="BeSouls"; //Modificar etiqueta ataque
						
						ataque3NPC=nose(MinAtaque3NPC,MaxAtaque3NPC);
						if(boolAtk6==false)
						{
						cantHPPj=cantHPPj-ataque3NPC;
						danoNPC=ataque3NPC;
						}
						else
							{atkMagShield(ataque3NPC);}
					}
				
				var timout5=setTimeout(function(){
				xjota=xjota-2;
				
				jota.style.marginLeft=xjota+"%";
				document.getElementById("imgAttack6").style.marginLeft="-76%"; //mover escudo mana
				
				if(boolAtk6A ==true)
				{
					document.getElementById("arribajota").style.color="#0c3df0";
					document.getElementById("imgAttack6").style.visibility="visible"; //Mostrar escudo de mana
				}
				document.getElementById("arribajota").innerHTML="-"+danoNPC;  //Modificar etiqueta de daño
				document.getElementById("arribajota").style.visibility="visible"; //Mostrar el h1 en la cabeza de Jotaro
				document.getElementById("arribaLeonAtk").style.visibility="visible"; //Mostrar etiqueta de ataque
				
				
				if(resultado==1) //pregunta si es el primer ataque
				{
				document.getElementById("imgAttackNPC").style.visibility="visible"; //Mostrar efecto ataque NPC
				}
				if(resultado==2) //pregunta si es el segundo ataque
				{
				document.getElementById("imgAttack2NPC").style.visibility="visible"; //Mostrar efecto ataque NPC
				}
				if(resultado==3) //pregunta si es el tercer ataque
				{
				document.getElementById("imgAttack3NPCA").style.visibility="visible"; //Mostrar efecto ataque NPC
				document.getElementById("imgAttack3NPCB").style.visibility="visible";
				document.getElementById("imgAttack3NPCB").style.marginLeft="-71%";     //mover sprite a la derecha para simular movimiento
				}
				
				},2000,"JavaScript")
				var timout6=setTimeout(function(){
				xjota=xjota+2;
				jota.style.marginLeft=xjota+"%";
				document.getElementById("imgAttack6").style.marginLeft="-75%"; //mover escudo mana
				
				},2100,"JavaScript")
				
				}
				else
					if(boolAtk5 ==true)
					{
					var timout5=setTimeout(function(){
					document.getElementById("arribaLeonAtk").innerHTML="ZZzzZ";  //Modificar etiqueta de daño
					document.getElementById("arribaLeonAtk").style.color="#057d1d";  
					document.getElementById("arribaLeonAtk").style.visibility="visible"; //Mostrar etiqueta de ataque
					},2000,"JavaScript")
					contAtk6++;  //para q cuente cuando se use el Heart Ligth
					}
				
				var timout=setTimeout(function(){   //esto es para que tarde en atacar el NPC    
				
						document.getElementById("arribajota").style.visibility="hidden"; //Ocultar el h1 en la cabeza de Jotaro
						document.getElementById("arribaLeonAtk").style.visibility="hidden"; //ocultar etiqueta de ataque leonmon
						document.getElementById("imgAttackNPC").style.visibility="hidden"; //Ocultar efecto ataque 1 NPC
						document.getElementById("imgAttack2NPC").style.visibility="hidden"; //Ocultar efecto ataque 2 NPC
						document.getElementById("imgAttack3NPCA").style.visibility="hidden"; //Mostrar efecto ataque NPC
						document.getElementById("imgAttack3NPCB").style.visibility="hidden";
						document.getElementById("imgAttack6").style.visibility="hidden"; //Ocultar escudo de mana
						document.getElementById("imgAtk1b").style.marginLeft="-65%";
						
						
						vidaJug=document.getElementById("vidapj");
						if(cantHPPj < 0)
						{
							cantHPPj=0;
						}
						/*if(boolAtk6A == false)     //si el ataque MagShield no esta siendo utilizado
						{ 
						vidaJug.innerHTML="Vida:"+cantHPPj;  //asignar nueva cantidad de vida
						}
						else */ //si el ataque MagShield siendo utilizado
						//{ 
							if(boolAtk6A == true && boolAtk5==false)
							{
								document.getElementById("manapj").innerHTML="Mana:"+mana;
								document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%"; //que baje la barra mana si esta puesto el magic shield
							}
						//}
						if(atk !=5 && boolAtk5==false && boolAtk6A == false) //que el npc no ataque 
						{
							document.getElementById("gra1").style.width=porcenBarraHP(vidatotalPJ,danoNPC,"1")+"%";   //modificar barra HP Personaje
							vidaJug.innerHTML="Vida:"+cantHPPj;
						}
						
						turno=0; // para poder volver a atacar
						document.getElementById("bntAtaque").disabled=false;
						document.getElementById("Spritebtn").style.opacity = "1";   //modificar opacidad para q se puede usar ATK1
						//alert("cantidad mana "+mana);alert("cantidad hp "+cantHPPj);
						if(mana >= ManaAtk2 && contTurAtk2==0 ) //abilitar boton atk2 por MANÁ y Turnos
						{
							document.getElementById("bntAtk2").disabled=false; 
							document.getElementById("Spritebtn2").style.zIndex = "2";
							document.getElementById("Spritebtn2").style.opacity = "1";   //modificar opacidad para q se vea se puede usar ATK2
						}
						if(contTurAtk2 !=0)
						{
							
							document.getElementById("numero1").innerHTML=contTurAtk2;
							
						}
						else
							{
								
								document.getElementById("numero1").innerHTML="";
							}
							
						if(contTurAtk3 !=0)
						{
							
							document.getElementById("numero2").innerHTML=contTurAtk3; 
						}
						else
							{
								
								document.getElementById("numero2").innerHTML="";
							}
						if(contTurAtk4 !=0)
						{
							
							document.getElementById("numero3").innerHTML=contTurAtk4; 
						}
						else
							{
								//document.getElementById("bntAtk4").innerHTML="a"; //cuando se pueda volver a usar el poder
								//document.getElementById("bntAtk4").style.color = "transparent"; //poner letra transparente para q no se bugee
								document.getElementById("numero3").innerHTML="";
							}
						if(mana >= ManaAtk3 && contTurAtk3==0 ) //abilitar boton atk3 por MANÁ y Turnos
						{
						document.getElementById("bntAtk3").disabled=false;
						document.getElementById("Spritebtn3").style.zIndex = "2";
						document.getElementById("Spritebtn3").style.opacity = "1"; //modificar opacidad para q se vea se puede usar ATK3
						
						
						}
						if(mana >= ManaAtk4 && contTurAtk4==0 ) //abilitar boton regen Maná por Turnos
						{
						document.getElementById("bntAtk4").disabled=false; 
						document.getElementById("Spritebtn4").style.zIndex = "2";
						document.getElementById("Spritebtn4").style.opacity = "1";   //modificar opacidad para q se vea se puede usar ATK4
						}
						document.getElementById("arribajotatk").style.color="#b8042e"; //para devolverle el color rojo al label               
						document.getElementById("arribaLeonAtk").style.color="#b8042e";
						document.getElementById("arribaNPC").style.color="#b8042e";
						document.getElementById("arribajota").style.color="#b8042e"; //color rojo
						
						if(cantHPPj <=0) //Pregunta si perdiste
						{
							//alert("Has perdido :( , suerte la proxima!!!"); // alerta de que perdi   
							document.getElementById("msjFinal").innerHTML="Has perdido :( <br> suerte la proxima!!!";
							document.getElementById("bntAtaque").disabled=true;
							document.getElementById("Spritebtn").style.opacity = "0.6";   //modificar opacidad para q se vea q no se puede usar ATK1
							document.getElementById("Spritebtn2").style.opacity = "0.6";   //modificar opacidad para q se vea q no se puede usar ATK2
							document.getElementById("Spritebtn3").style.opacity = "0.6";   //modificar opacidad para q se vea q no se puede usar ATK3
							document.getElementById("Spritebtn4").style.opacity = "0.6";
							document.getElementById("bntAtk2").disabled=true;
							document.getElementById("Spritebtn2").style.zIndex = "4";
							document.getElementById("Spritebtn3").style.zIndex = "4";
							document.getElementById("Spritebtn4").style.zIndex = "4";
							document.getElementById("bntAtk3").disabled=true;
							document.getElementById("bntAtk4").disabled=true; 
							document.getElementById("endGame").style.visibility="visible";
						}
						
						},3400,"JavaScript")
						var timout=setTimeout(function(){
							document.getElementById("imgAttack3NPCB").style.marginLeft="-62%";     //mover sprite  para simular movimiento
						},4400,"JavaScript")
				
				    }
								
					}
				
				
					
				MinatkBloodS=parseInt(cantHPPj/2);  //para q el valor del ataque blood shot se actualice siempre	
			}
			function nose(min,max) //Te devuelve un numero aleatorio
			{
				min=Math.ceil(min);
				max=Math.floor(max);
				
				var resultado=Math.floor(Math.random()* (1+max-min)+min); //aca esta la ciencia
				
				return resultado;
				
			}
			function contadorTurnos()
			{
				if(contTurAtk2 !=0) //contar los turnos de todos los poderes
					{
						contTurAtk2--;
					
					}
					if(contTurAtk3 !=0)//contTurAtk3
					{
						contTurAtk3--;
					
					}
					if(contTurAtk4 !=0)//contTurAtk4
					{
						contTurAtk4--;
					
					}
			}
			function volverAJugar()
			{
				turno=0;
				document.getElementById("endGame").style.visibility="hidden";
				document.getElementById("gra1").style.width="100%";
				document.getElementById("gra2").style.width="100%";
				document.getElementById("gra3").style.width="100%";
				
				cantHPPj=vidatotalPJ;
				document.getElementById("vidapj").innerHTML="Vida:"+cantHPPj;
				cantHPN=vidatotalNPC;
				document.getElementById("vidaNpc").innerHTML="Vida:"+cantHPN;
				mana=manaTotal;
				document.getElementById("manapj").innerHTML="Mana: "+mana;
				
				document.getElementById("bntAtaque").disabled=false;
				document.getElementById("bntAtk2").disabled=false;
				document.getElementById("bntAtk3").disabled=false;
				document.getElementById("bntAtk4").disabled=false; 
				
				document.getElementById("Spritebtn").style.opacity = "1";   
				document.getElementById("Spritebtn2").style.opacity = "1";   
				document.getElementById("Spritebtn3").style.opacity = "1";   
				document.getElementById("Spritebtn4").style.opacity = "1";
				document.getElementById("Spritebtn2").style.zIndex = "2";
				document.getElementById("Spritebtn3").style.zIndex = "2";
				document.getElementById("Spritebtn4").style.zIndex = "2";
				
				document.getElementById("numero1").innerHTML=""; 
				document.getElementById("numero2").innerHTML="";
				document.getElementById("numero3").innerHTML="";
				
				MinatkBloodS=parseInt(cantHPPj/2);  //para q el valor del ataque blood shot se actualice siempre	
				
				contTurAtk2=0;
				contTurAtk3=0;
				contTurAtk4=0;
				
				barraHPpJ=0;
				barraHPNPC=0;
			    barraMP=0;
				contAtk6=-1;
				boolAtk6=false;
				boolAtk6A=false;
				
			}
		function atkMagShield(atknpc)
		{
			contAtk6++;
			if(contAtk6 >=MaxatkShieldM )
			{
				boolAtk6=false;
				boolAtk6A=false;
				cantHPPj=cantHPPj-atknpc;
				danoNPC=atknpc;
			}
			else
				{
					if(atknpc <= mana )
					{
						restoBarra=atknpc; 
						mana=mana - atknpc;
						danoNPC=atknpc;
						boolAtk6A=true;
					}
					else
						{
							cantHPPj=cantHPPj-atknpc;
							danoNPC=atknpc;
							boolAtk6A=false;
						}
				}
			
			
			
		}
