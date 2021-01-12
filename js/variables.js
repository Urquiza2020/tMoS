			var attack1=0;     //este muestra que ataque es   , ataque simple 
			var attack2=1;     //placaje
			var attack3=2;     //Besouls 
			var attack4=3;     //regen mana 
			var attack5=4;     //Blood Shot
			var attack6=5;     //Heart Light
			var attack7=6      //Magic Shield
			
			var spriteATK2="sprites/placaje.png";       //sprites ataques 
			var spriteATK4;
			var spriteATK3;
			
			
			var efectoATK2="Una serie de ataques elemento viento"; //descripcion ataque
			var efectoATK4;
			var efectoATK3;
			
			
			var vidaJug,vidaNpc;   //h1 de vida que le queda al jugador y npc
			var nombrepj="";
			
			var barraHPpJ=0;       //acumula el porcentaje q se le quita a la barra
			var barraHPNPC=0;
			var barraMP=0;
			var vidatotalPJ=100;    //cantidad maxima de la barra PJ
						
			var h1VidaPJ="Vida :"+vidatotalPJ;                     //modificar h1 pj con la vida inicial
			document.getElementById("vidapj").innerHTML=h1VidaPJ;
			
			var vidatotalNPC=100;   //cantidad maxima de la barra PJ
			
			var h1VidaNPC="Vida :"+vidatotalNPC;                   //modificar h1 con la vida inicial 
			document.getElementById("vidaNpc").innerHTML=h1VidaNPC;
			
			var manaTotal=150;     //cantidad maxima de mana
			
			var h1Manapj="Mana:"+manaTotal;
			document.getElementById("manapj").innerHTML=h1Manapj;
			
			var cantHPN=vidatotalNPC; 
			var cantHPPj=vidatotalPJ;
			var turno=0;
			var ataque1NPC,ataque2NPC,ataque3NPC,ataque1PJ,ataque2PJ,ataque3PJ,ataque4PJ,MinAtaque1PJ,MaxAtaque1PJ,MinAtaque2PJ,MaxAtaque2PJ; //ataque5PJ
			var MinAtaque3PJ,MaxAtaque3PJ,MinAtaque4PJ,MaxAtaque4PJ;//MinAtaque5PJ,MaxAtaque5PJ;
			
			var nomAtk3="BeSouls"; //nombre poder 3
			var nomAtk2="Placaje"; //nombre poder 2  
			var nomAtk4="Maná Plus";   //nombre poder 4
			
			
			var contTurAtk2=0; //contar cuando se use el poder 2
			var turReqAtk2=4;  //turno requerido para volver a usar el poder 2
			
			var contTurAtk3=0; //contar cuando se use el poder 3
			var turReqAtk3=4;  //turno requerido para volver a usar el poder 3
			
			var contTurAtk4=0; //contar cuando se use el regen mana /poder 4
			var turReqAtk4=2;  //turno requerido para volver a usar el regen mana /poder 4
			
			//var contTurAtk5=0; //contar cuando se use el poder 5
			//var turReqAtk5=5;  //turno requerido para volver a usar el poder 5
			
			var MinAtaque1NPC,MaxAtaque1NPC,MinAtaque2NPC,MaxAtaque2NPC,MaxAtaque3NPC,MaxAtaque3NPC;
			var mana=manaTotal; //cantidad mana pj
			
			MinAtaque1PJ=1; //poder de ataque 1 pj
			MaxAtaque1PJ=5; 
			
			MinAtaque2PJ=6; //poder de ataque 2 pj PLACAJE
			MaxAtaque2PJ=10; 
			
			MinAtaque3PJ=11; //poder de ataque 3 pj  BESOILS
			MaxAtaque3PJ=15;
			
			MinAtaque4PJ=20; //poder de regen mana  pj MANÁ PLUS
			MaxAtaque4PJ=30;
			
			var ManaAtk2=15; //mana requerido para ataque 2
			var costoatk2=ManaAtk2+" Maná";
			
			
			var ManaAtk3=25; //mana requerido para ataque 3
			var costoatk3=ManaAtk3+" Maná";
			
			var ManaAtk4=0; //mana requerido para regen mana /ataque 4
			var costoatk4;
			
			//var ManaAtk5=15; //mana requerido para ataque 5
			//var costoatk5=ManaAtk5+" Maná";
			
			MinAtaque1NPC=2; // poder de ataque 1 npc
			MaxAtaque1NPC=6;
			
			MinAtaque2NPC=7; // poder de ataque 2 npc
			MaxAtaque2NPC=11;
			
			MinAtaque3NPC=12; // poder de ataque 3 npc
			MaxAtaque3NPC=16;
			
			var danoNPC,danoPJ; //daño hecho por jotaro y leonmon
			
			var jota,leonm ,xjota ,xleonm,yjota ,yleonm;
			
			jota=document.getElementById("imgjotaro");
			leonm=document.getElementById("imgLeon");
			
			xjota=-80;   //Posicion en x
			xleonm=-35;
			
			yjota=53; //Posicion en y
			yleonm=51; 