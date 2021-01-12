function porcenBarraHP(vida,resto,player) //vida completa del PJ
			{
				var resultado=0;
				var porcentaje=0;
				
				porcentaje=(resto/vida)*100; 
				if(player == 1)
				{
				barraHPpJ=barraHPpJ+porcentaje;   //acumula el porcentaje de daño 
				resultado=100-barraHPpJ; //alert("barra HP "+resultado);
				}
				else
					{
						barraHPNPC=barraHPNPC+porcentaje;
						resultado=100-barraHPNPC;
					}
				//alert("porcentaje barra "+resultado);
				if(resultado < 0)
				{
					resultado=0;
				}
				
				return resultado;
				
			}
			function porcenBarraMP(mana,restSum,dif) //mana completa del PJ
			{
				var resultado=0;
				var porcentaje=0;
				
				porcentaje=(restSum/mana)*100; 
				if(dif == 0) //si gasta mana
				{
				barraMP=barraMP+porcentaje;   //acumula el porcentaje de mana 
				resultado=100-barraMP; 
				}
				else //si no gasta , osea si usa regen mana
					{
						barraMP=barraMP-porcentaje;
						if(barraMP > 0)              //poder se bugea si se usa al principio
						{
						resultado=100-barraMP;
						}
						else
							{
								barraMP=0;
								resultado=100;
							}
					}
				//alert("porcentaje barra "+resultado);
				if(resultado > 100)
				{
					resultado=100;
				}
				//alert("barra mana "+resultado);
				return resultado;
				
			}