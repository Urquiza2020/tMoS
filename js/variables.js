			var attack1=0;     
			var attack2=1;     
			var attack3=2;     
			var attack4=3;     
			var attack5=4;     
			var attack6=5;     
			var attack7=6      
			
			var spriteATK2="sprites/placaje.png";      
			var spriteATK4;
			var spriteATK3;
			
			
			var efectoATK2="Una serie de ataques elemento viento"; 
			var efectoATK4;
			var efectoATK3;
			
			
			var vidaJug,vidaNpc;  
			var nombrepj="";
			
			var barraHPpJ=0;      
			var barraHPNPC=0;
			var barraMP=0;
			var vidatotalPJ=100;    
						
			var h1VidaPJ="Vida :"+vidatotalPJ;                    
			document.getElementById("vidapj").innerHTML=h1VidaPJ;
			
			var vidatotalNPC=100;   
			
			var h1VidaNPC="Vida :"+vidatotalNPC;                  
			document.getElementById("vidaNpc").innerHTML=h1VidaNPC;
			
			var manaTotal=100;     
			
			var h1Manapj="Man\341:"+manaTotal;
			document.getElementById("manapj").innerHTML=h1Manapj;
			
			var cantHPN=vidatotalNPC; 
			var cantHPPj=vidatotalPJ;
			var turno=0;
			var ataque1NPC,ataque2NPC,ataque3NPC,ataque1PJ,ataque2PJ,ataque3PJ,ataque4PJ,MinAtaque1PJ,MaxAtaque1PJ,MinAtaque2PJ,MaxAtaque2PJ;
			var MinAtaque3PJ,MaxAtaque3PJ,MinAtaque4PJ,MaxAtaque4PJ;
			
			var nomAtk3="BeSouls"; 
			var nomAtk2="Placaje";
			var nomAtk4="Man� Plus";   
			
			
			var contTurAtk2=0; 
			var turReqAtk2=4;  
			
			var contTurAtk3=0; 
			var turReqAtk3=4;  
			
			var contTurAtk4=0; 
			var turReqAtk4=2;  
			
			
			
			var MinAtaque1NPC,MaxAtaque1NPC,MinAtaque2NPC,MaxAtaque2NPC,MaxAtaque3NPC,MaxAtaque3NPC;
			var mana=manaTotal; 
			
			MinAtaque1PJ=1; 
			MaxAtaque1PJ=5; 
			
			MinAtaque2PJ=6; 
			MaxAtaque2PJ=10; 
			
			MinAtaque3PJ=11; 
			MaxAtaque3PJ=15;
			
			MinAtaque4PJ=20; 
			MaxAtaque4PJ=30;
			
			var ManaAtk2=15; 
			var costoatk2=ManaAtk2+" Man�";
			
			
			var ManaAtk3=25; 
			var costoatk3=ManaAtk3+" Man�";
			
			var ManaAtk4=0; 
			var costoatk4;
			
			
			
			MinAtaque1NPC=2; 
			MaxAtaque1NPC=6;
			
			MinAtaque2NPC=7; 
			MaxAtaque2NPC=11;
			
			MinAtaque3NPC=12; 
			MaxAtaque3NPC=16;
			
			var danoNPC,danoPJ;
			
			var jota,leonm ,xjota ,xleonm,yjota ,yleonm;
			
			jota=document.getElementById("imgjotaro");
			leonm=document.getElementById("imgLeon");
			
			xjota=-80;   
			xleonm=-35;
			
			yjota=53; 
			yleonm=51; 