function porcenBarraHP(vida,resto,player) 
			{
				var resultado=0;
				var porcentaje=0;
				
				porcentaje=(resto/vida)*100; 
				if(player == 1)
				{
				barraHPpJ=barraHPpJ+porcentaje;  
				resultado=100-barraHPpJ; 
				}
				else
					{
						barraHPNPC=barraHPNPC+porcentaje;
						resultado=100-barraHPNPC;
					}
				
				if(resultado < 0)
				{
					resultado=0;
				}
				
				return resultado;
				
			}
			function porcenBarraMP(mana,restSum,dif) 
			{
				var resultado=0;
				var porcentaje=0;
				
				porcentaje=(restSum/mana)*100; 
				if(dif == 0) 
				{
				barraMP=barraMP+porcentaje;   
				resultado=100-barraMP; 
				}
				else 
					{
						barraMP=barraMP-porcentaje;
						if(barraMP > 0)              
						{
						resultado=100-barraMP;
						}
						else
							{
								barraMP=0;
								resultado=100;
							}
					}
				
				if(resultado > 100)
				{
					resultado=100;
				}
				
				return resultado;
				
			}