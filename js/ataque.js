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
				
				document.getElementById("Spritebtn").style.opacity = "0.6";   
				document.getElementById("Spritebtn2").style.opacity = "0.6";   
				document.getElementById("Spritebtn3").style.opacity = "0.6";   
				document.getElementById("Spritebtn4").style.opacity = "0.6";  
				
				document.getElementById("bntAtk2").disabled=true;   
				document.getElementById("bntAtk3").disabled=true;
				document.getElementById("bntAtk4").disabled=true; 
				
				document.getElementById("Spritebtn2").style.zIndex = "4";
				document.getElementById("Spritebtn3").style.zIndex = "4";
				document.getElementById("Spritebtn4").style.zIndex = "4";
				
				turno=1;
				 
				if(atk==0)
				{
					document.getElementById("arribajotatk").innerHTML="Attack"; 
					document.getElementById("arribajotatk").style.visibility="visible"; 
					document.getElementById("imgAttack").style.visibility="visible"; 
					ataque1PJ=nose(MinAtaque1PJ,MaxAtaque1PJ);
					
					cantHPN=cantHPN-ataque1PJ; 
					danoPJ=ataque1PJ;
					
					
					contadorTurnos(); 
					
				}
				if(atk==1) 
				{
					
					document.getElementById("arribajotatk").innerHTML=nomPlacaje; 
					document.getElementById("arribajotatk").style.visibility="visible";
					document.getElementById("imgAttack2").style.visibility="visible";
					
					
					
					contadorTurnos();  
					
					if(attack2 == 1)
					{
						ataque2PJ=nose(MinAtaque2PJ,MaxAtaque2PJ);
						contTurAtk2=turReqAtk2; 
						cantHPN=cantHPN-ataque2PJ;
						danoPJ=ataque2PJ;
						mana=mana-ManaAtk2;  
						restoBarra=ManaAtk2;
					}
					if(attack4 ==1) 
					{
						contTurAtk4=turReqAtk4;
						ataque4PJ=nose(MinAtaque4PJ,MaxAtaque4PJ);
						cantHPN=cantHPN-ataque4PJ;
						danoPJ=ataque4PJ;
						mana=mana-ManaAtk4;  
						restoBarra=ManaAtk4; 
					}
					if(attack3 ==1) 
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=nose(MinAtaque3PJ,MaxAtaque3PJ);
						cantHPN=cantHPN-ataque3PJ;
						danoPJ=ataque3PJ;
						mana=mana-ManaAtk3;   
						restoBarra=ManaAtk3;
					}
										
					
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Man\341: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";  
				}
				if(atk==2) //Ataque 3 BeSouls 
				{					
					document.getElementById("arribajotatk").innerHTML=nomBsouls;
					document.getElementById("arribajotatk").style.visibility="visible";
					document.getElementById("imgAtk1A").style.visibility="visible"; 
					document.getElementById("imgAtk1b").style.visibility="visible";  
					document.getElementById("imgAtk1b").style.marginLeft="-50%";     
					
					
					contadorTurnos();  
					
					if(attack2 == 2) 
					{
						ataque2PJ=nose(MinAtaque2PJ,MaxAtaque2PJ);
						contTurAtk2=turReqAtk2; 
						cantHPN=cantHPN-ataque2PJ; 
						danoPJ=ataque2PJ;
						mana=mana-ManaAtk2;  
						restoBarra=ManaAtk2;
					}
					if(attack4 == 2) 
					{
						contTurAtk4=turReqAtk4;
						ataque4PJ=nose(MinAtaque4PJ,MaxAtaque4PJ);
						cantHPN=cantHPN-ataque4PJ; 
						danoPJ=ataque4PJ;
						mana=mana-ManaAtk4;   
						restoBarra=ManaAtk4; 
					}
					if(attack3 ==2) 
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=nose(MinAtaque3PJ,MaxAtaque3PJ);
						cantHPN=cantHPN-ataque3PJ;             
						danoPJ=ataque3PJ;
						mana=mana-ManaAtk3;  
						restoBarra=ManaAtk3;
					}
					
					
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Man\341: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   
				}
				if(atk==3)
				{
					
					document.getElementById("imgAttack3").style.visibility="visible";
					
					
					document.getElementById("arribajotatk").style.color="#0c3df0";     
					document.getElementById("arribajotatk").style.visibility="visible";
					
					
					contadorTurnos(); 
					
					
					
					if(attack4 ==3) 
					{
						contTurAtk4=turReqAtk4; 
						ataque4PJ=MinatkRegen;
						mana=mana+ataque4PJ; 
						document.getElementById("arribajotatk").innerHTML="Man\341 Plus <br>         +"+ataque4PJ; 
						if(mana > manaTotal)
						{
							mana=manaTotal;
						}			
						document.getElementById("manapj").innerHTML="Man\341:"+mana;
						document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,ataque4PJ,"1")+"%";   
						
					}
					if(attack2 == 3) 
					{
						contTurAtk2=turReqAtk2; 
						ataque2PJ=MinatkRegen;
						mana=mana+ataque2PJ; 
						document.getElementById("arribajotatk").innerHTML="Maná Plus <br>         +"+ataque2PJ; 
						if(mana > manaTotal)
						{
							mana=manaTotal;
						}			
						document.getElementById("manapj").innerHTML="Man\341:"+mana;
						document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,ataque2PJ,"1")+"%";  
						
					}
					if(attack3 == 3) 
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=MinatkRegen;
						mana=mana+ataque3PJ; 
						document.getElementById("arribajotatk").innerHTML="Maná Plus <br>         +"+ataque3PJ; 
						if(mana > manaTotal)
						{
							mana=manaTotal;
						}			
						document.getElementById("manapj").innerHTML="Mana:"+mana;
						document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,ataque3PJ,"1")+"%";   
						
					}
					
					
				}
				if(atk == 4) 
				{
					document.getElementById("imgAttack4a").style.visibility="visible"; 
					document.getElementById("imgAttack4B").style.visibility="visible";
					document.getElementById("arribajotatk").style.visibility="visible";
					
					
					contadorTurnos(); 
					
					if(attack4 ==4)  
					{
						contTurAtk4=turReqAtk4; 
						ataque4PJ=MinatkBloodS;  
						cantHPN=cantHPN-ataque4PJ; 
						cantHPPj=cantHPPj-ataque4PJ;
						danoPJ=ataque4PJ;
						mana=mana-ManaAtk4;  
						restoBarra=ManaAtk4;
						document.getElementById("arribajotatk").innerHTML="Blood Shot <br>         -"+ataque4PJ; 
						
					}
					if(attack2 == 4) 
					{
						contTurAtk2=turReqAtk2; 
						ataque2PJ=MinatkBloodS;
						cantHPN=cantHPN-ataque2PJ; 
						cantHPPj=cantHPPj-ataque2PJ;
						danoPJ=ataque2PJ;
						mana=mana-ManaAtk2;   
						restoBarra=ManaAtk2;
						document.getElementById("arribajotatk").innerHTML="Blood Shot <br>         -"+ataque2PJ; 
					}
					if(attack3 ==4) 
					{
						ataque3PJ=MinatkBloodS;
						contTurAtk3=turReqAtk3;
						cantHPN=cantHPN-ataque3PJ;             
						cantHPPj=cantHPPj-ataque3PJ;
						danoPJ=ataque3PJ;
						mana=mana-ManaAtk3;   
						restoBarra=ManaAtk3;
						document.getElementById("arribajotatk").innerHTML="Blood Shot <br>         -"+ataque3PJ; 
					}
					
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Man\341: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";   
					
					document.getElementById("vidapj").innerHTML="Vida:"+cantHPPj;  
					document.getElementById("gra1").style.width=porcenBarraHP(vidatotalPJ,danoPJ,"1")+"%";  
					
				}
				
				
				if(atk==5)  
				{
					boolAtk5=true;
					c=0;
					document.getElementById("arribajotatk").innerHTML=nomheartL; 
					document.getElementById("arribajotatk").style.color="#057d1d";
					document.getElementById("arribajotatk").style.visibility="visible";
					document.getElementById("imgAttack5").style.visibility="visible";  
					
					contadorTurnos();  
					
					if(attack2 == 5)
					{
						ataque2PJ=MinatkheartL;
						contTurAtk2=turReqAtk2; 
						mana=mana-ManaAtk2;  
						restoBarra=ManaAtk2;
						
						
					}
					if(attack4 == 5) 
					{
						contTurAtk4=turReqAtk4;
						ataque4PJ=MinatkheartL;
						mana=mana-ManaAtk4;  
						restoBarra=ManaAtk4; 
						
					}
					if(attack3 ==5)
					{
						contTurAtk3=turReqAtk3;
						ataque3PJ=MinatkheartL;
						mana=mana-ManaAtk3;   
						restoBarra=ManaAtk3;
						
					}
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Man\341: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%"; 
					
					
				}
				if(atk==6)  
				{
					document.getElementById("arribajotatk").style.color="#0c3df0";
					document.getElementById("arribajotatk").innerHTML=nomShieldM; 
					document.getElementById("arribajotatk").style.visibility="visible";
					document.getElementById("imgAttack6A").style.visibility="visible"; 
					
					contadorTurnos();
					
					if(attack2 == 6) 
					{
						contTurAtk2=turReqAtk2; 
						mana=mana-ManaAtk2;   
						restoBarra=ManaAtk2;
						
					}
					if(attack4 == 6) 
					{
						contTurAtk4=turReqAtk4;
						mana=mana-ManaAtk4;   
						restoBarra=ManaAtk4; 
						
					}
					if(attack3 ==6) 
					{
						contTurAtk3=turReqAtk3;
						mana=mana-ManaAtk3;   
						restoBarra=ManaAtk3;
						
					}
					contAtk6=-1;
					boolAtk6=true;
					
					if(mana < 0)
					{
						mana=0;
					}
										
					document.getElementById("manapj").innerHTML="Man\341: "+mana;
					document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%";  
				}
				if(boolAtk5==true)    
						{
							
							if(c >= 2)
							{
								boolAtk5=false;
							}
							
							c++;
						}
				if(atk != 3 && atk !=5 && atk!=6) 
				{
				
				var timout3=setTimeout(function(){
				xleonm=xleonm+3;
					
				leonm.style.marginLeft=xleonm+"%";    
				
				document.getElementById("arribaNPC").innerHTML="-"+danoPJ;  
				document.getElementById("arribaNPC").style.visibility="visible";
				
				},100,"JavaScript") 
				var timout4=setTimeout(function(){
				
				
				xleonm=xleonm-3;
				leonm.style.marginLeft=xleonm+"%"; 
				},200,"JavaScript")
				
				}
				else
					{
						if(atk ==5) 
						{
							document.getElementById("arribaNPC").innerHTML="-"+MinatkheartL+" Turnos"; 
							document.getElementById("arribaNPC").style.color="#057d1d";  
							document.getElementById("arribaNPC").style.visibility="visible"; 
						}
					}
				
				var timout6=setTimeout(function(){ 
				
				document.getElementById("arribajotatk").style.visibility="hidden"; 
				document.getElementById("imgAtk1A").style.visibility="hidden"; 
				document.getElementById("imgAtk1b").style.visibility="hidden"; 
				document.getElementById("imgAttack").style.visibility="hidden"; 
				document.getElementById("imgAttack2").style.visibility="hidden"; 
				document.getElementById("imgAttack3").style.visibility="hidden"; 
				document.getElementById("imgAttack4a").style.visibility="hidden"; 
				document.getElementById("imgAttack4B").style.visibility="hidden"; 
				document.getElementById("imgAttack5").style.visibility="hidden";  
				document.getElementById("imgAttack6A").style.visibility="hidden"; 
				
				if(atk != 3 && atk != 5 && atk!=6) 
				{
					document.getElementById("arribaNPC").style.visibility="hidden"; 
				}
				else
					{
						if(atk ==5)
						{
							document.getElementById("arribaNPC").innerHTML=ataque2PJ+" Turnos";  
							document.getElementById("arribaNPC").style.visibility="hidden"; 
						}
					}
				},1500,"JavaScript")
				
				
				var timout2=setTimeout(function(){ 
				vidaNpc=document.getElementById("vidaNpc");
				if(cantHPN < 0)
						{
							cantHPN=0;
						}
				vidaNpc.innerHTML="Vida:"+cantHPN;     
				if(atk != 3 && atk != 5 && atk !=6)
				{
				document.getElementById("gra2").style.width=porcenBarraHP(vidatotalNPC,danoPJ,"0")+"%";
				}
				
				
					},1000,"JavaScript")
				
				
				if(cantHPN <=0)
				{
					var timout2=setTimeout(function(){ 
						
						document.getElementById("endGame").style.visibility="visible";
						document.getElementById("msjFinal").innerHTML="Felicidades <br> Ganaste!!!";
					},1000,"JavaScript")
				}
				else
					{
				if(atk !=5 && boolAtk5==false) 
				{
					var min, max;
					var pNPC=0;
					min=Math.ceil(1); 
					max=Math.floor(3); 
					var resultado=Math.floor(Math.random()* (1+max-min)+min); 
					
					
					
					if(resultado==1)   
					{
						document.getElementById("arribaLeonAtk").innerHTML="Attack"; 
											
						ataque1NPC=nose(MinAtaque1NPC,MaxAtaque1NPC);
						if(boolAtk6==false)          
						{	
						cantHPPj=cantHPPj-ataque1NPC;
						danoNPC=ataque1NPC;
						}
						else
							atkMagShield(ataque1NPC);
					}
					if(resultado==2)
					{
						document.getElementById("arribaLeonAtk").innerHTML="Placaje"; 
						
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
						document.getElementById("arribaLeonAtk").innerHTML="BeSouls"; 
						
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
				document.getElementById("imgAttack6").style.marginLeft="-76%"; 
				
				if(boolAtk6A ==true)
				{
					document.getElementById("arribajota").style.color="#0c3df0";
					document.getElementById("imgAttack6").style.visibility="visible"; 
				}
				document.getElementById("arribajota").innerHTML="-"+danoNPC;  
				document.getElementById("arribajota").style.visibility="visible"; 
				document.getElementById("arribaLeonAtk").style.visibility="visible"; 
				
				
				if(resultado==1) 
				{
				document.getElementById("imgAttackNPC").style.visibility="visible"; 
				}
				if(resultado==2) 
				{
				document.getElementById("imgAttack2NPC").style.visibility="visible"; 
				}
				if(resultado==3)
				{
				document.getElementById("imgAttack3NPCA").style.visibility="visible";
				document.getElementById("imgAttack3NPCB").style.visibility="visible";
				document.getElementById("imgAttack3NPCB").style.marginLeft="-71%";     
				}
				
				},2000,"JavaScript")
				var timout6=setTimeout(function(){
				xjota=xjota+2;
				jota.style.marginLeft=xjota+"%";
				document.getElementById("imgAttack6").style.marginLeft="-75%"; 
				
				},2100,"JavaScript")
				
				}
				else
					if(boolAtk5 ==true)
					{
					var timout5=setTimeout(function(){
					document.getElementById("arribaLeonAtk").innerHTML="ZZzzZ"; 
					document.getElementById("arribaLeonAtk").style.color="#057d1d";  
					document.getElementById("arribaLeonAtk").style.visibility="visible"; 
					},2000,"JavaScript")
					contAtk6++;  
					}
				
				var timout=setTimeout(function(){ 
				
						document.getElementById("arribajota").style.visibility="hidden"; 
						document.getElementById("arribaLeonAtk").style.visibility="hidden"; 
						document.getElementById("imgAttackNPC").style.visibility="hidden"; 
						document.getElementById("imgAttack2NPC").style.visibility="hidden";
						document.getElementById("imgAttack3NPCA").style.visibility="hidden"; 
						document.getElementById("imgAttack3NPCB").style.visibility="hidden";
						document.getElementById("imgAttack6").style.visibility="hidden"; 
						document.getElementById("imgAtk1b").style.marginLeft="-65%";
						
						
						vidaJug=document.getElementById("vidapj");
						if(cantHPPj < 0)
						{
							cantHPPj=0;
						}
						
							if(boolAtk6A == true && boolAtk5==false)
							{
								document.getElementById("manapj").innerHTML="Mana:"+mana;
								document.getElementById("gra3").style.width=porcenBarraMP(manaTotal,restoBarra,"0")+"%"; 
							}
						
						if(atk !=5 && boolAtk5==false && boolAtk6A == false)
						{
							document.getElementById("gra1").style.width=porcenBarraHP(vidatotalPJ,danoNPC,"1")+"%";   
							vidaJug.innerHTML="Vida:"+cantHPPj;
						}
						
						turno=0; 
						document.getElementById("bntAtaque").disabled=false;
						document.getElementById("Spritebtn").style.opacity = "1";
						
						if(mana >= ManaAtk2 && contTurAtk2==0 )
						{
							document.getElementById("bntAtk2").disabled=false; 
							document.getElementById("Spritebtn2").style.zIndex = "2";
							document.getElementById("Spritebtn2").style.opacity = "1";   
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
								
								document.getElementById("numero3").innerHTML="";
							}
						if(mana >= ManaAtk3 && contTurAtk3==0 ) 
						{
						document.getElementById("bntAtk3").disabled=false;
						document.getElementById("Spritebtn3").style.zIndex = "2";
						document.getElementById("Spritebtn3").style.opacity = "1"; 
						
						
						}
						if(mana >= ManaAtk4 && contTurAtk4==0 )
						{
						document.getElementById("bntAtk4").disabled=false; 
						document.getElementById("Spritebtn4").style.zIndex = "2";
						document.getElementById("Spritebtn4").style.opacity = "1";   
						}
						document.getElementById("arribajotatk").style.color="#b8042e";          
						document.getElementById("arribaLeonAtk").style.color="#b8042e";
						document.getElementById("arribaNPC").style.color="#b8042e";
						document.getElementById("arribajota").style.color="#b8042e"; 
						
						if(cantHPPj <=0) 
						{
							
							document.getElementById("msjFinal").innerHTML="Has perdido :( <br> suerte la proxima!!!";
							document.getElementById("bntAtaque").disabled=true;
							document.getElementById("Spritebtn").style.opacity = "0.6";   
							document.getElementById("Spritebtn2").style.opacity = "0.6"; 
							document.getElementById("Spritebtn3").style.opacity = "0.6";  
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
							document.getElementById("imgAttack3NPCB").style.marginLeft="-62%";  
						},4400,"JavaScript")
				
				    }
								
					}
				
				
					
				MinatkBloodS=parseInt(cantHPPj/2);  
			}
			function nose(min,max) 
			{
				min=Math.ceil(min);
				max=Math.floor(max);
				
				var resultado=Math.floor(Math.random()* (1+max-min)+min);
				
				return resultado;
				
			}
			function contadorTurnos()
			{
				if(contTurAtk2 !=0) 
					{
						contTurAtk2--;
					
					}
					if(contTurAtk3 !=0)
					{
						contTurAtk3--;
					
					}
					if(contTurAtk4 !=0)
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
				
				MinatkBloodS=parseInt(cantHPPj/2);  	
				
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